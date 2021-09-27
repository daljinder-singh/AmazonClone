
const registerUser = require('../Models/registerUsers')
const bcrypt = require('bcrypt');
const fetch = require('isomorphic-fetch');

exports.Login = async (req, res, next) =>{
  const {email, password, token} =req.body
  var response = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.Google_captch_Secret_key}&response=${token}&remoteip=${req.connection.remoteAddress}`,{
    method: 'post'
  })
  const data = await response.json()
    console.log(data)
    try{
       const user =  await registerUser.aggregate([
            {
              '$match': {
                'email': email
              }
            }
          ])

         if(user && bcrypt.compareSync(password, user[0]?.password)){
            return res.status(200).json({message: 'user login successfull'})
         }
    }catch(err){
        return res.status(400).json({message: 'somenthing wrong'})
    }

}