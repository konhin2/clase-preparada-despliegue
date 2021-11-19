// Imports
const express = require('express')
const router = express.Router()

const {getAnimes} = require('./../cotrollers/animes.controller')

// Routes
router.get('/', getAnimes)

// Esportacion
module.exports = router