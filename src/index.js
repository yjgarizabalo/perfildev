const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')
const passport = require('passport')

const { database } = require('./keys')

// inicilizador
const app = express()
require('./lib/passport')

// settings
app.set('port', process.env.PORT || 7000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))

app.set('views engine', '.hbs')

// middlewares
app.use(session({
    secret: 'perfildev-admin',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}))
app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

// variables globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    app.locals.newsletter = req.flash('newsletter')
    app.locals.contact = req.flash('contact')
    app.locals.message = req.flash('message')
    app.locals.user = req.user
    next()
})

// routes
app.use(require('./routes/'))
app.use(require('./routes/authentication'))
app.use('/links', require('./routes/links'))
app.use(require('./routes/newsletter')) // ruta para enviar email
app.use(require('./routes/send-contact')) // ruta para enviar info de contacto



// public
app.use(express.static(path.join(__dirname, 'public')))

//error 404
app.use(function(req,res){
    res.status(404).render('links/404.hbs');
});

// iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})