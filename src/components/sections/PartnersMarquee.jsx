import React from 'react';
import { siteConfig } from '../../data/siteConfig.js';

export function PartnersMarquee() {
  const partnersList = [...siteConfig.partners, ...siteConfig.partners];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-heading">
          Enterprise Hardware &amp; Systems <span>We Engineer &amp; Deploy</span>
        </div>
      </div>
      <div className="partners-track-wrap" aria-label="Hardware & Technology Partners">
        <div className="partners-track">
          {partnersList.map((partner, index) => (
            <div key={`${partner}-${index}`} className="partner-badge">
              <span className="partner-dot" aria-hidden="true" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
