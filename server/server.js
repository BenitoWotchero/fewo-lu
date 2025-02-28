const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

// Konfiguration für axios, um SSL-Zertifikatsprüfung in der Entwicklung zu deaktivieren
const axiosInstance = axios.create({
  httpsAgent: new (require('https')).Agent({  
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  })
});

// E-Mail-Konfiguration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true für Port 465, false für andere Ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  }
});

// Testen der E-Mail-Konfiguration
transporter.verify(function(error, success) {
  if (error) {
    console.error('E-Mail-Konfigurationsfehler:', error);
  } else {
    console.log('Server ist bereit, E-Mails zu versenden');
    console.log('E-Mail-Konfiguration:', {
      user: process.env.EMAIL_USER,
      destinationEmail: process.env.DESTINATION_EMAIL
    });
  }
});

// Verbesserte reCAPTCHA Verifizierung
async function verifyRecaptcha(token) {
  const secretKey = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('reCAPTCHA Secret Key is not configured');
    return false;
  }

  try {
    console.log('Verifying reCAPTCHA with token:', token);
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
    const response = await axiosInstance.post(verifyUrl);
    console.log('reCAPTCHA API response:', response.data);
    
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Kontakt-Formular Handler
app.post('/api/contact', async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;
  
  console.log('Received form submission:', { name, email, message });
  console.log('reCAPTCHA token:', recaptchaToken);

  if (!recaptchaToken) {
    console.error('No reCAPTCHA token provided');
    return res.status(400).json({ error: 'reCAPTCHA token is required' });
  }

  try {
    const recaptchaVerification = await verifyRecaptcha(recaptchaToken);
    console.log('reCAPTCHA verification result:', recaptchaVerification);

    if (!recaptchaVerification) {
      console.error('reCAPTCHA verification failed');
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }

    const mailOptions = {
      from: {
        name: 'Ferienhaus Masuren',
        address: process.env.EMAIL_USER
      },
      to: process.env.DESTINATION_EMAIL,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
        Name: ${name}
        E-Mail: ${email}
        
        Nachricht:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      headers: {
        'X-Mailer': 'Ferienhaus Masuren Kontaktformular'
      }
    };

    console.log('Attempting to send email with options:', mailOptions);

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});