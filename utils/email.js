import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: '',
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass: ''
    }
});

export const send = async (subject, text, html) => {
    if(!subject || !text || !html){
        return console.log('Couldn\'t send email: Missing props (utils/email.js).');
    }

    try{
        const info = await transporter.sendMail({
            from: '"Gear Rental 👻" <email@example.com>',
            to: "email1@example.com, email2@example.com",
            subject: "Email from Gear Rental (gear-rental.com)",
            text: "None HTML message.",
            html: "<b>Html Message</b>"
        });

        return true;
    }catch(e){
        return false;
    }
}