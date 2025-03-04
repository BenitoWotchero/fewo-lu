import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert(t('contactForm.recaptchaError'));
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(t('contactForm.successMessage'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Server response:', data);
        alert(t('contactForm.errorMessage'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('contactForm.errorMessage'));
    }
  };

  return (
    <div className="contact">
      <h2>Dein Urlaub bei uns</h2>
      <p className="contact-subtitle">Fragen zur Ausstattung oder Verfügbarkeit? Wir sind für dich da!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Nachricht</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>
        <div className="form-footer">
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
          />
          <button type="submit" className="submit-button">
            Anfrage senden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;