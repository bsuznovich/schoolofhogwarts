require('dotenv').config()
const massive = require('massive')
const express = require('express')
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Revelio on port ${SERVER_PORT}`)
    })
})

app.get(`/api/students/:houseid`, controller.getStudents)