import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function Hero() {
  return (
    <section className="stn-hero" id="home">
      {/* Photo & Atmospheric Gradient Backdrop */}
      <div className="hero-backdrop" aria-hidden="true">
        <img
          className="hero-photo-bg"
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
          alt=""
          loading="eager"
        />
        <div className="hero-overlay-gradient" />
      </div>

      <div className="container hero-main-content">
        <div className="hero-headline reveal">
          <div className="section-kicker">
            <span>●</span> Lahore-Based · Enterprise Engineering
          </div>
          <h1>
            Hospital Software &amp; IT Infrastructure —{' '}
            <span className="text-primary">Built For Zero Downtime</span>
          </h1>
          <p className="hero-desc">
            M Solutions delivers mission-critical hospital automation (HIMS / LIMS), high-availability multi-VLAN networks, and 4K IP CCTV surveillance across Pakistan.
          </p>
          <div className="hero-cta-group">
            <a
              className="stn-button"
              href={getWhatsAppUrl('Hello M Solutions, I would like to schedule an infrastructure consultation.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Schedule a Consultation</span>
              <span className="button-arrow-circle" aria-hidden="true">↗</span>
            </a>
            <a
              className="stn-button stn-button-dark"
              href="#solutions"
            >
              <span>Explore Solutions</span>
              <span className="button-arrow-circle" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-1">
          <div className="hero-visual-card">
            <div className="hero-visual-badge">
              <span className="pulse-icon" />
              <span>CORE NETWORK ONLINE · 24/7</span>
            </div>
            <img
              className="hero-visual-img"
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
              alt="M Solutions optical fiber infrastructure rack"
              loading="eager"
            />
            <div className="hero-visual-info">
              <div>
                <strong>Multi-Branch Optical Routing</strong>
                <span>Lahore Central Exchange · Active</span>
              </div>
              <span className="text-primary" style={{ font: '700 13px var(--font-mono)' }}>99.9% UPTIME</span>
            </div>
          </div>
        </div>
      </div>

      {/* Docked STN Stat Bar */}
      <div className="container hero-stat-bar reveal reveal-delay-2">
        <div className="stat-bar-grid">
          {siteConfig.stats.map((item) => (
            <div key={item.label} className="stat-box">
              <div className="stat-box-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <div className="stat-box-value">{item.value}</div>
                <div className="stat-box-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
