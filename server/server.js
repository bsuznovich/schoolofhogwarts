require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV, ENVIRONMENT, AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY} = process.env

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

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: 'us-west-2'
  });

  AWS.config.setPromisesDependency(bluebird);

  const s3 = new AWS.S3();

  const uploadFile = (buffer, name, type) => {
    const params = {
      ACL: 'public-read',
      Body: buffer,
      Bucket: 'school-of-hogwarts',
      ContentType: type.mime,
      Key: `${name}.${type.ext}`
    };
    return s3.upload(params).promise();
  };

// app.use(async (req, res, next) => {
//     if(ENVIRONMENT === 'dev'){
//         const db = req.app.get('db')
//         const userData = await db.set_data()
//         req.session.user = userData[0]
//         next()
//     }else{
//         next()
//     }
// })

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

app.get('/api/housepoints/:id', controller.getHousePoints)

app.post('/api/updatepoints', controller.addPoints)

app.delete('/api/delete/:email', controller.deleteProfile)

app.post('/api/upload', (request, response) => {
    const form = new multiparty.Form();
      form.parse(request, async (error, fields, files) => {
        if (error) throw new Error(error);
        try {
          const path = files.file[0].path;
          const buffer = fs.readFileSync(path);
          const type = fileType(buffer);
          const timestamp = Date.now().toString();
          const fileName = `bucketFolder/${timestamp}-lg`;
          const data = await uploadFile(buffer, fileName, type);
          return response.status(200).send(data);
        } catch (error) {
            console.log(error)
          return response.status(400).send(error);
        }
      });
  });

  app.post('/api/picture', controller.addPicture)