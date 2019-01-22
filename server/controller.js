require('dotenv').config()
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

const {EMAIL, PASS} = process.env

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
            res.status(400).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let newStudentArr = await db.create_student({email: email, hash: hash, firstname: firstname, lastname: lastname})
        req.session.user = {id: newStudentArr[0].id, email: newStudentArr[0].email, houseid: null, firstname: newStudentArr[0].firstname, lastname: newStudentArr[0].lastname, year: '1', studentpoints: '0', housepoints: 0}
        res.status(200).send({message: 'Signed in', userData: {...req.session.user}, signedIn: true})

        console.log(req.body)

        
        
        nodemailer.createTestAccount((err, account) => {
            console.log(PASS)
            const htmlEmail = `
            <h1>HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY</h1>
            
            <h3>Headmaster: Albus Dumbledore</h3>
            <p>(Order of Merlin, First Class, Grand Sorc., Chf. Warlock,
            Supreme Mugwump, International Confed. of Wizards)</p>
            
            <p>Dear ${req.body.firstname} ${req.body.lastname},</p>
            <p>We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.
            Term begins on 1 September. We await your owl by no later than 31 July.</p>
            <p>Yours sincerely,</p>
            
            <p>Minerva McGonagall</p>
            <p>Deputy Headmistress</p>








            <h3>UNIFORM</h3>

            <p>First-year students will require:</p>
            <ol>
                <li>Three sets of plain work robes (black)</li>
                <li>One plain pointed hat (black) for day wear</li>
                <li>One pair of protective gloves (dragon hide or similar)</li>
                <li>One winter cloak (black, with silver fastenings)</li>
            </ol>

            <p>Please note that all pupil's clothes should carry name tags.</p>


            <h3>COURSE BOOKS</h3>

            <p>All students should have a copy of each of the following:</p>

            <ul>
                <li>The Standard Book of Spells (Grade 1)</li>
                    <p>by Miranda Goshawk</p>
                <li>A History of Magic</li>
                    <p>by Bathilda Bagshot</p>
                <li>Magical Theory</li>
                    <p>by Adalbert Waffling</p>
                <li>A Beginner's Guide to Transfiguration</li>
                    <p>by Emeric Switch</p>
                <li>One Thousand Magical Herbs and Fungi</li>
                    <p>by Phyllida Spore</p>
                <li>Magical Drafts and Potions</li>
                    <p>by Arsenius Jigger</p>
                <li>Fantastic Beasts and Where to Find Them</li>
                    <p>by Newt Scamander</p>
                <li>The Dark Forces: A Guide to Self-Protection</li>
                    <p>by Quentin Trimble</p>
            </ul>


            <h3>OTHER EQUIPMENT</h3>

            <ul> 
                <li>1 wand</li>
                <li>1 cauldron (pewter, standard size 2)</li>
                <li>1 set glass or crystal phials</li>
                <li>1 telescope</li>
                <li>1 set brass scales</li>
            </ul>

            
            <p>Students may also bring, if they desire, an owl OR a cat OR a toad.</p>

            <h3>PARENTS ARE REMINDED THAT FIRST YEARS</h3>
            
            <h3>ARE NOT ALLOWED THEIR OWN BROOMSTICK</h3>
            
            
            <p>Yours sincerely,</p>
            
            <p>Lucinda Thomsonicle-Pocus</p>
            <p>Chief Attendant of Witchcraft Provisions</p>
            `
            let transporter = nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                port: 587,
                secure: false,
                auth: {
                    user: EMAIL,
                    pass: PASS
                }
            })
            let mailOptions = {
                from: EMAIL,
                to: req.body.email,
                replyTo: EMAIL,
                subject: `Admission`,
                text: 'yeet',
                html: htmlEmail
            }
            transporter.sendMail(mailOptions, (err, info) =>{
                if (err){
                    console.log(err)
                } else {
                    res.status(200).send('yay')
                }
            })
        })
    },
    
    signIn: async (req,res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const studentArr = await db.find_student({email: email})
        console.log(studentArr[0])
        if(!studentArr[0]){
            return res.status(200).send({message: 'Email not found'})
        }
        const result = bcrypt.compareSync(password, studentArr[0].hash)
        if(!result){
            return res.status(401).send({message: 'Incorrect password'})
        }
        req.session.user = {id: studentArr[0].id, email: studentArr[0].email, houseid: studentArr[0].houseid}
        console.log(req.session.user)
        res.status(200).send({message: 'Signed in', userData: {...req.session.user}, signedIn: true})
    },

    userData: async (req,res) => {
        // console.log(req.session)
        if(req.session.user){
            const db = req.app.get('db')
            console.log(req.session.user)
            db.get_user_data({id: req.session.user.id}).then(response => {
                res.status(200).send(response[0])
            }).catch(err => console.log(err))
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
    },

    sort: async (req,res) => {
        const {email, houseid} = req.body
        const db = req.app.get('db')
        let studentHouse = await db.add_to_house({houseid: houseid, email: email})
        if(studentHouse.houseid){
            res.status(400).send({message: 'House already assigned'})
        }
        req.session.user.houseid = houseid
        res.status(200).send({message: 'House assigned', userData: {...req.session.user}})
    },

    updateUserInfo: async (req,res) => {
        const {firstname, lastname, year, studentpoints} = req.body
        const {id} = req.session.user
        const db = req.app.get('db')
        let newName = await db.update_user({id: id, firstname: firstname, lastname: lastname, year: year, studentpoints: studentpoints})
        req.session.user.firstname = firstname
        req.session.user.lastname = lastname
        req.session.user.year = year
        req.session.user.studentpoints = studentpoints
        // console.log(newName)
        res.status(200).send({message: 'updated', userData: {...req.session.user, newName}})
    },

    getHousePoints: (req,res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.get_points({id}).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },
    
    addPoints: async (req,res) => {
        const {houseid} = req.session.user
        const db = req.app.get('db')
        let points = await db.add_points({houseid})
        req.session.user.points = points[0].points
        res.status(200).send({message: 'updated', userData: {...req.session.user}})
    }
}
