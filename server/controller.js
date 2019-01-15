const bcrypt = require('bcryptjs')

module.exports = {
    getStudents: (req,res) => {
        const db = req.app.get('db')
        let {houseid} = req.params
        db.get_students({houseid}).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    }
}