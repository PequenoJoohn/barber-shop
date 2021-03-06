export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    default: {
        from: 'Jonathan Matos <jonathan.matos2445@gmail.com>',
    },
};

// Amazon SES
// Mailgun
// Sparkpost
// Mandril (Mailchimp)

// Mailtrap (DEV)
