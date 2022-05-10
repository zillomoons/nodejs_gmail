const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config()

const smtp_login = process.env.SMTP_LOGIN 
const smtp_password = process.env.SMTP_PASSWORD 
const end_mail = process.env.END_MAIL 

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: smtp_login,
        pass: smtp_password
    }
})

router.get('/', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Hell hound is on leash '+ smtp_login
        })
    } catch (error) {
        return res.status(500).send('Server error')
    }
})

router.post('/', async (req, res) => {
    const { name, contacts, subject, message } = req.body.data;
    try {
        await transporter.sendMail({
        from: `Portfolio`,
        to: end_mail,
        subject: 'Portfolio-message',
        html: `<em>Subject</em>: <b>${subject}</b>
        <div><em>From: ${name}</em></div>
        <div><em>Contacts:</em> ${contacts}</div>
        <div><em>Message:</em> ${message}</div>
        `
        });
        console.log('letter received')
    } catch (error) {
        return res.status(error.statusCode || 500).json({error: error.message})
    }
    
    res.send('Hell yeah! Letter is send')    
})

module.exports = router;