const registerUser = require('../Models/registerUsers')
const bcrypt = require('bcrypt');

exports.RegisterUser = async (req, res, next) =>{
    const {email, password} = req.body
    const newUser = new registerUser({
        email: email,
        password: bcrypt.hashSync(password,10)
    })
    try{
        await newUser.save()
        return res.json({message: 'new user register'})
    }catch(err){
        return res.status(400).json({message: 'something missing'})
    }
    
}