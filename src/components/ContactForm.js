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
      <h2>{t('contactSection.title')}</h2>
      <p className="contact-subtitle">{t('contactSection.subtitle')}</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">{t('contactSection.name')}</label>
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
            <label htmlFor="email">{t('contactSection.email')}</label>
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
          <label htmlFor="message">{t('contactSection.message')}</label>
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
            {t('contactSection.sendButton')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;