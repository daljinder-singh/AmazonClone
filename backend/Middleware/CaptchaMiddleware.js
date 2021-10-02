const fetch = require('isomorphic-fetch');

const captcha = async (req, res, next) =>{
    const {token} =req.body
    const response = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.Google_captch_Secret_key}&response=${token}&remoteip=${req.connection.remoteAddress}`,{
    method: 'post',
    headers : {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    }
  })
  const data = await response.json()
  if(data.success) next()
}

module.exports = captcha