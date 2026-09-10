import React from 'react';
import { getWhatsAppUrl } from '../../data/siteConfig.js';

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float-btn"
      href={getWhatsAppUrl('Hello M Solutions, I would like to speak to an expert.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly with M Solutions on WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">💬</span>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
