// 1.- Imports
const express = require('express')
const app = express()

require('dotenv').config()

const path = require('path')

const mongoDB = require('./config/db')

// 2.- Middlewares
// Un middleware es una funcion que se ejecuta despues de que el servidor recive una peticion peticion y antes de dar una respuesta.

// Trabajar con archivos estaticos que puedan ser visualizados por el cliente
app.use(express.static(path.join(__dirname, 'public')))

// Configuraciones
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

mongoDB()

// 3.- Routes
// Home
app.get('/', async (req, res) => {
    res.render('index')
})
// Animes
app.use('/animes', require('./routes/animes.router'))

// 4.- Server
app.listen(process.env.PORT, () => {
    console.log(`Connected on port ${process.env.PORT}`)
})