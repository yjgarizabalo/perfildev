const path = require('path')
const exphbs = require('express-handlebars')

module.exports = app => {

  //setings
  app.set('port', process.env.PORT || 7000)
  app.set('views', path.join(__dirname, 'views'))
  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'))
  }))
  //middlewares

  //routes

  //errorhandlers

  return app
}