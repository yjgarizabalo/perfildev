const express = require('express')
const router = express.Router()

const pool = require('../database')
const { isLoggedIn } = require('../lib/auth')

router.get('/add', isLoggedIn, (req, res) => {
    res.render('template/add.hbs')
})

// agregar una ruta

router.post('/add', isLoggedIn, async (req, res) => {
    const { title, url, description } = req.body
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    }
    // guardar template en la base de datos
    await pool.query('INSERT INTO template set ?', [newLink])
    req.flash('success', 'Link guradado correctamente')
    res.redirect('/template')
})

router.get('/', isLoggedIn, async (req, res) => {
    const template = await pool.query('SELECT * FROM template WHERE user_id = ?', [req.user.id])
    res.render('template/list.hbs', { template })
})

router.get('/delete/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM template WHERE ID = ?', [id])
    req.flash('success', 'Link eliminado satifactoriamente')
    res.redirect('/template')
})

router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params
    const template = await pool.query('SELECT * FROM template WHERE id = ?', [id])
    res.render('template/edit.hbs', { link: template[0] })
})

// editar un enlaze 

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params
    const { title, url, description } = req.body
    const newLink = {
        title,
        url,
        description,
    }
    console.log(newLink)
    await pool.query('UPDATE template set ? WHERE id = ?', [newLink, id])
    req.flash('success', 'Link editar satifactoriamente')
    res.redirect('/template')

})

// about

router.get('/about', (req, res) => {
    res.render('template/about.hbs')
})

// contacto

router.get('/contact', (req, res) => {
    res.render('template/contact.hbs')
})

// politicas

router.get('/politicas', (req, res) => {
    res.render('template/politicas.hbs')
})

module.exports = router