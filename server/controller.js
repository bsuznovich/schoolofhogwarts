const bcrypt = require('bcryptjs')

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
    },

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
            res.status(200).send(req.session.user)
        } else{
            res.status(401).send('Must sign in')
        }
    }
}