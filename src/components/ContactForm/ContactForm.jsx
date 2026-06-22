import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose, recipientEmail = 'Khashia791@gmail.com' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    services: [],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'E-commerce Solutions',
    'API Development',
    'Database Design',
    'Consultation',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, value],
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter(service => service !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare data to send to backend
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      services: formData.services,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };

    // Send to backend
    fetch('https://portfolio-backend-api.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Also send email
        const mailtoLink = `mailto:${recipientEmail}?subject=Project Inquiry - ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0DLocation: ${formData.location}%0DServices Interested In: ${formData.services.join(', ')}%0D%0DMessage:%0D${formData.message}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Still show success even if backend fails
        const mailtoLink = `mailto:${recipientEmail}?subject=Project Inquiry - ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0DLocation: ${formData.location}%0DServices Interested In: ${formData.services.join(', ')}%0D%0DMessage:%0D${formData.message}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      });
  };

  return (
    <div className="contact-form-overlay" onClick={onClose}>
      <div className="contact-form-container" onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your email has been successfully sent.</p>
            <p className="follow-up">I will contact you within 24 hours.</p>
          </div>
        ) : (
          <>
            <button className="close-btn" onClick={onClose}>
              <span>&times;</span>
            </button>

            <h2 className="form-title">Get In Touch</h2>
            <p className="form-subtitle">Let's discuss your project needs</p>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Location */}
              <div className="form-group">
                <label htmlFor="location">Location/City</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Your city or country"
                />
              </div>

              {/* Services */}
              <div className="form-group">
                <label>Services Interested In</label>
                <div className="services-grid">
                  {serviceOptions.map((service) => (
                    <div key={service} className="service-checkbox">
                      <input
                        type="checkbox"
                        id={`service-${service}`}
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleServiceChange}
                      />
                      <label htmlFor={`service-${service}`}>{service}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message/Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
