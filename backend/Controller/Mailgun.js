const api_key = process.env.MailGun_Private_key;
const domain = process.env.Domain_name;

const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const sendEmail = (from, to, subject, html) =>{
    const data = {
        from,
        to,
        subject,
        html,
      };
    return mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
}

module.exports = sendEmail;