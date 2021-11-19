// 1.- Imports
const express = require('express')
const app = express()

require('dotenv').config()

// 2.- Middlewares

// 3.- Routes

// 4.- Server
app.listen(process.env.PORT, () => {
    console.log(`Connected on port ${process.env.PORT}`)
})