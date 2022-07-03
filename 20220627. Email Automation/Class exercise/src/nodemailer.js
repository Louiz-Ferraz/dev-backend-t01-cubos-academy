const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { user, pass } = require('./secrets');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user,
        pass
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