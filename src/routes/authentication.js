const express = require('express')
const router = express.Router()

const passport = require('passport')
const { isLoggedIn, isNotloggedin } = require('../lib/auth')

router.get('/signup',  isNotloggedin, (req, res) => {
    res.render('auth/signup.hbs')
})

router.post('/signup', isNotloggedin, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

router.get('/signin', isNotloggedin, (req, res) => {
    res.render('auth/signin.hbs')
})

router.post('/signin', isNotloggedin,  (req, res) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res);
})

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile.hbs')
})

// Cerrar sesión

router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut()
    res.redirect('/signin')
})

module.exports = router