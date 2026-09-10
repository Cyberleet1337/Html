import React, { useState, useEffect } from 'react';
import { Brand } from '../common/BrandLogo.jsx';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* STN-style Top Announcement Bar */}
      <div className="top-announcement">
        <a href={siteConfig.announcement.href}>
          <span className="top-announcement-badge">{siteConfig.announcement.badge}</span>
          <span>{siteConfig.announcement.text}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Main Navigation */}
      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a href="#top" aria-label="M Solutions Home">
            <Brand />
          </a>

          <nav id="main-nav" className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              className="stn-button"
              href={getWhatsAppUrl('Hello M Solutions, I would like to schedule a consultation.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <span>Schedule a Consultation</span>
              <span className="button-arrow-circle" aria-hidden="true">↗</span>
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
