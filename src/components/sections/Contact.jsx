import React, { useState } from 'react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Hospital Software (HIMS / LIMS)',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please complete all required fields.');
      return;
    }

    const structuredMessage = `*New Infrastructure Inquiry via M Solutions*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Phone:* ${formData.phone || 'Not provided'}\n` +
      `• *Service:* ${formData.service}\n` +
      `• *Project Details:* ${formData.message}`;

    setFormStatus('Redirecting to WhatsApp...');

    const whatsappLink = getWhatsAppUrl(structuredMessage);
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setFormStatus('Inquiry prepared! We look forward to speaking with you on WhatsApp.');
    }, 1200);
  };

  return (
    <section className="consultation-section section-pad" id="contact">
      <div className="container">
        <div className="consultation-card reveal">
          <div className="consultation-info">
            <div className="section-kicker">06 / Connect Directly</div>
            <h2>
              Schedule an Infrastructure <span className="text-primary">Consultation</span>
            </h2>
            <p>
              Tell us about your facility, network bottleneck, or hospital software requirements. Our senior systems engineer will review your setup and schedule an on-site survey.
            </p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">📞</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Direct Phone / WhatsApp:</strong>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">✉️</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Enterprise Email:</strong>
                  <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--text-light)' }}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">📍</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Engineering HQ:</strong>
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </div>

          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="stn-input-group">
              <label htmlFor="stn-name">Full Name *</label>
              <input
                id="stn-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Tariq / Salman Raza"
                required
              />
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-email">Organization Email *</label>
              <input
                id="stn-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@organization.com"
                required
              />
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-phone">Phone / WhatsApp Number</label>
              <input
                id="stn-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
              />
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-service">Service Area</label>
              <select
                id="stn-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Hospital Software (HIMS / LIMS)">Hospital Software (HIMS / LIMS)</option>
                <option value="Enterprise Networks & Optical Fiber Cabling">Enterprise Networks & Optical Fiber Cabling</option>
                <option value="4K IP CCTV Surveillance & Biometric Access">4K IP CCTV Surveillance & Biometric Access</option>
                <option value="Server Racks & Hardware Procurement">Server Racks & Hardware Procurement</option>
                <option value="General IT Infrastructure Consultation">General IT Infrastructure Consultation</option>
              </select>
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-message">Project Scope &amp; Facility Details *</label>
              <textarea
                id="stn-message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Specify number of beds, camera drops, current switches, or pain points..."
                required
              />
            </div>

            <div style={{ marginTop: '8px' }}>
              <button className="stn-button" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Submit &amp; Open on WhatsApp</span>
                <span className="button-arrow-circle" aria-hidden="true">↗</span>
              </button>
              {formStatus && (
                <p className="stn-form-note" role="status" aria-live="polite" style={{ marginTop: '10px', textAlign: 'center' }}>
                  {formStatus}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
