
const registerUser = require('../Models/registerUsers')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('./Mailgun')
const fetch = require('isomorphic-fetch');
const fs = require("fs")
var path = require("path");

const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../views/emailTemplate.ejs"), "utf8")

exports.Login = async (req, res, next) =>{
  const {email, password, token} =req.body.data
  var response = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.Google_captch_Secret_key}&response=${token}&remoteip=${req.connection.remoteAddress}`,{
    method: 'post'
  })
  const data = await response.json()
    console.log('googleCaptcha',data)
    try{
       const user =  await registerUser.aggregate([
            {
              '$match': {
                'email': email
              }
            }
          ])   
         if(user && bcrypt.compareSync(password, user[0]?.password)){
           const token = jwt.sign({ userId : user._id }, 'amazonlite',{expiresIn: '1h'});
           await sendEmail('daljinder.singh@geeky.dev', 'daljinder@yopmail.com', 'test subject', emailTemplateSource)
           return res.status(200).json({ auth: true, token: token })
         }
    }catch(err){
        return res.status(400).json({message: 'somenthing wrong'})
    }

}