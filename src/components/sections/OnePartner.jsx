import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function OnePartner() {
  return (
    <section className="support-section section-pad" id="platform">
      <div className="container">
        <div className="section-heading reveal" style={{ marginBottom: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-kicker">02 / Unified Engineering</div>
          <h2>
            One partner across{' '}
            <span className="text-primary">every layer of technology.</span>
          </h2>
          <p className="text-muted" style={{ maxWidth: '640px', fontSize: '15px' }}>
            Technology stacks become fragmented when companies juggle separate vendors for software, network cabling, CCTV, and servers. M Solutions unifies everything under one accountable roof:
          </p>
        </div>

        <div className="support-grid">
          {siteConfig.supportCards.map((card, index) => (
            <div
              key={card.title}
              className={`support-card reveal ${index > 0 ? `reveal-delay-${(index % 3) + 1}` : ''}`}
            >
              <div className="support-card-icon" aria-hidden="true">
                {card.icon}
              </div>
              <div>
                <div className="support-card-title">{card.title}</div>
                <div className="support-card-desc">{card.desc}</div>
              </div>
            </div>
          ))}

          {/* 6th Card: STN Signature Black CTA Card */}
          <a
            className="support-card support-card-cta reveal reveal-delay-3"
            href={getWhatsAppUrl('Hello M Solutions, I would like to schedule an infrastructure consultation.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span className="section-kicker" style={{ marginBottom: '8px' }}>Get Started</span>
              <div className="support-card-title" style={{ fontSize: '22px' }}>
                Schedule a<br />Consultation
              </div>
              <div className="support-card-desc">
                Speak directly with our senior infrastructure engineer.
              </div>
            </div>
            <div className="support-card-cta-arrow" aria-hidden="true">
              ↗
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
