import React from 'react';
import { Brand } from '../common/BrandLogo.jsx';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main-grid">
        <div>
          <Brand />
          <p className="footer-brand-copy">
            Enterprise hospital software, optical fiber networks, and 4K IP CCTV surveillance systems built for 99.9% uptime across Pakistan.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-menu">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Solutions</div>
          <ul className="footer-menu">
            <li><a href="#solutions">Hospital HIMS / LIMS</a></li>
            <li><a href="#solutions">Optical Fiber &amp; Cat6A</a></li>
            <li><a href="#solutions">4K IP CCTV Surveillance</a></li>
            <li><a href="#solutions">Biometric Access Gates</a></li>
            <li><a href="#platform">Hardware Procurement</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact &amp; Support</div>
          <ul className="footer-menu">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp: {siteConfig.phone} ↗
              </a>
            </li>
            <li><span>{siteConfig.location}</span></li>
            <li><span className="text-primary">{siteConfig.availability}</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom-bar">
        <span>© {siteConfig.copyrightYear} {siteConfig.name}. All Rights Reserved.</span>
        <span>Enterprise Infrastructure &amp; Healthcare Systems · Lahore, PK</span>
        <a href="#top">Back to Top ↑</a>
      </div>
    </footer>
  );
}
