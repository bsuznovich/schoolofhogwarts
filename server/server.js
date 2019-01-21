require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV, ENVIRONMENT} = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Revelio on port ${SERVER_PORT}`)
    })
})

app.use(async (req, res, next) => {
    if(ENVIRONMENT === 'dev'){
        const db = req.app.get('db')
        const userData = await db.set_data()
        req.session.user = userData[0]
        next()
    }else{
        next()
    }
})

app.get(`/api/students/:houseid`, controller.getStudents)

app.post(`/api/enroll`, controller.enroll)

app.post(`/api/signin`, controller.signIn)

app.get(`/api/user-data`, controller.userData)

app.get(`/api/student/:id`, controller.myData)

app.get(`/api/signout`, (req,res) => {
    req.session.destroy()
    res.redirect(`http://localhost:3000/#/`)
})

app.post(`/api/sort`, controller.sort)

app.put(`/api/userinfo`, controller.updateUserInfo)