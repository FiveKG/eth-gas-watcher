const nodemailer = require('nodemailer');

// 创建一个邮件传输对象
var transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 4653,
    secure: true,
    auth: {
        user: 'abc@xxx.com',
        pass: 'xxxx'
    }
});
transporter.verify(function (err, success) {
    if (err) { console.error(`SMTP Error: ${err}`); }
    if (success) {
        console.log("SMTP ready...");
    } else {
        console.error("SMTP not ready!");
    }
});
module.exports = transporter.sendMail.bind(transporter)