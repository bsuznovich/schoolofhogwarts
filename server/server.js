require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env

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

app.get(`/api/students/:houseid`, controller.getStudents)

app.post(`/api/enroll`, controller.enroll)

app.post(`/api/signin`, controller.signIn)

app.get(`/api/user-data`, controller.userData)

app.get(`/api/student/:id`, controller.myData)

app.get(`/api/signout`, (req,res) => {
    req.session.destroy()
    res.redirect(`http://localhost:3000/#/`)
})






// const output= `
        // <p>Congratulations</p>
        // <h3>Contact Details</h3>
        // <ul>
        //     <li>Name: ${req.body.firstname} ${req.body.lastname}</li>
        //     <li>School: Hogwarts school of witchcraft and wizardry</li>
        //     <li>email: ${req.body.email}</li>
        // </ul>
        // <h3>Message</h3>
        // <p>Congratulations</p>
        // `
        // let transporter = nodemailer.createTransport({
        //     service: 'gmail.com',
        //     // host: "smtp.mail.yahoo.com",
        //     port: 25,
        //     secure: false, // true for 465, false for other ports
        //     auth: {
        //       user: 'bsuz1313@gmail.com', // generated ethereal user
        //       pass: 'Manonthemoon13' // generated ethereal password
        //     },
        //     tls: {
        //         rejectUnauthorized: false
        //     }
        //   });

        //   let helperOptions = {
        //     from: '"Albus Dumbledore" <bsuz1313@gmail.com',
        //     to: "bsuz1313@gamil.com",
        //     subject: "Enrollment",
        //     text: "Hello world?",
        //   }
        
        //   // setup email data with unicode symbols
        // //   let mailOptions = {
        // //     from: '"Albus Dumbledore" <bsuz1313@gmail.com', // sender address
        // //     to: "bsuz1313@gamil.com", // list of receivers
        // //     subject: "Enrollment", // Subject line
        // //     text: "Hello world?", // plain text body
        // //     html: output // html body
        // //   };
        
        //   // send mail with defined transport object
        //   let info = await transporter.sendMail(helperOptions, (err, info) => {
        //       if(err){
        //           return console.log(err)
        //       } else{
        //           console.log('message was sent')
        //           console.log(info)
        //       }
        //   })
        
        //   console.log("Message sent: %s", info.messageId);
        //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        //   res.render('contact', {message: 'You have been enrolled'})
        

        //   const output= `
        // <p>Congratulations</p>
        // <h3>Contact Details</h3>
        // <ul>
        //     <li>Name: ${req.body.firstname} ${req.body.lastname}</li>
        //     <li>School: Hogwarts school of witchcraft and wizardry</li>
        //     <li>email: ${req.body.email}</li>
        // </ul>
        // <h3>Message</h3>
        // <p>Congratulations</p>
        // `
        // let transporter = nodemailer.createTransport({
        //     host: "smtp.mail.yahoo.com",
        //     port: 465,
        //     secure: false, // true for 465, false for other ports
        //     auth: {
        //       user: 'brodysuznovich@yahoo.com', // generated ethereal user
        //       pass: 'fakehappy' // generated ethereal password
        //     },
        //     tls: {
        //         rejectUnauthorized: false
        //     }
        //   });
        
        //   // setup email data with unicode symbols
        //   let mailOptions = {
        //     from: '"Albus Dumbledore" <brodysuznovich@yahoo.com>', // sender address
        //     to: "bsuz1313@gamil.com", // list of receivers
        //     subject: "Enrollment", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: output // html body
        //   };
        
        //   // send mail with defined transport object
        //   let info = await transporter.sendMail(mailOptions)
        
        //   console.log("Message sent: %s", info.messageId);
        //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        //   res.render('contact', {message: 'You have been enrolled'})