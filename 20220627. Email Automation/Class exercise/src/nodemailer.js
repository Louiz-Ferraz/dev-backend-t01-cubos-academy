const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0454e7f3e4b5ac",
        pass: "ca8d338e0d7e6c"
    },
    secure: false, // true for 465, false for other ports
    tls: {
        rejectUnauthorized: false
    }
});

transporter.use('compile', hbs({
    viewEngine: {
        extname: '.handlebars',
        defaultLayout: false
    },
    viewPath: './views/'
}));

module.exports = transporter;