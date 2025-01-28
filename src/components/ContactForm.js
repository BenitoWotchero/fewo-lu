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
      alert('Please complete the reCAPTCHA');
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
        alert(t('contactForm.errorMessage'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('contactForm.errorMessage'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Bestehende Formularfelder ... */}
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={handleRecaptchaChange}
      />
      <button type="submit">{t('contactForm.submit')}</button>
    </form>
  );
};

export default ContactForm;