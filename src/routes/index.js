const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('index.hbs')
    res.render('build/enconstruccion.hbs')
})

module.exports = router