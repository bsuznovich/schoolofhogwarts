const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

module.exports = {
    getStudents: (req,res) => {
        const db = req.app.get('db')
        let {houseid} = req.params
        db.get_students({houseid}).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },
    
    enroll: async (req,res) => {
        const {email, password, firstname, lastname} = req.body
        const db = req.app.get('db')
        // console.log(req.body)
        const studentArr = await db.find_student({email: email})
        if(studentArr.length !== 0){
            res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let newStudentArr = await db.create_student({email: email, hash: hash, firstname: firstname, lastname: lastname})
        req.session.user = {id: newStudentArr[0].id, email: newStudentArr[0].email}
        res.status(200).send({message: 'Signed in', userData: {...req.session.user}, signedIn: true})

        // nodemailer.createTestAccount((err, account) => {
        //     const htmlEmail = `
        //     <h3>contact details</h3>
        //     <ul>
        //         <li>First Name: ${req.body.firstname} ${req.body.lastname}</li>
        //         <li>Email: ${req.body.email}</li>
        //     </ul>
        //     <h3>Message</h3>
        //     <p>yeet</p>
        //     `
        //     let transporter = nodemailer.createTransport({
        //         host: 'smtp.ether.email',
        //         port: 587,
        //         auth: {
        //             user: `gfg3hinp7n2ndqzu@ethereal.email`,
        //             pass: `NB1rvhcK8vrKf7YPjv`
        //         }
        //     })
        //     let mailOptions = {
        //         from: `adumbledore@hogwarts.edu`,
        //         to: `gfg3hinp7n2ndqzu@ethereal.email`,
        //         replyTo: `adumbledore@hogwarts.edu`,
        //         subject: `Admission`,
        //         text: 'yeet',
        //         html: htmlEmail
        //     }
        //     transporter.sendMail(mailOptions, (err, info) =>{
        //         if (err){
        //             console.log(err)
        //         }
        //         console.log(`message sent %s`, info.message)
        //         console.log(`message URL %s`, nodemailer.getTestMessageUrl(info))
        //     })
        // })
    },
// NB1rvhcK8vrKf7YPjv	gfg3hinp7n2ndqzu@ethereal.email
    signIn: async (req,res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const studentArr = await db.find_student({email: email})
        if(!studentArr[0]){
            return res.status(200).send({message: 'Email not found'})
        }
        const result = bcrypt.compareSync(password, studentArr[0].hash)
        if(!result){
            return res.status(401).send({message: 'Incorrect password'})
        }
        req.session.user = {id: studentArr[0].id, email: studentArr[0].email}
        res.status(200).send({message: 'Signed in', userData: {...req.session.user}, signedIn: true})
    },

    userData: async (req,res) => {
        if(req.session.user){
            console.log(req.session.user)
            res.status(200).send(req.session.user)
        } else{
            res.status(401).send('Must sign in')
        }
    },

    myData: (req,res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.get_user_data({id}).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    }
}