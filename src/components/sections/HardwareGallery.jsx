import React from 'react';
import { siteConfig } from '../../data/siteConfig.js';

export function HardwareGallery() {
  return (
    <section className="gallery-section section-pad" id="gallery">
      <div className="container">
        <div className="section-heading reveal" style={{ marginBottom: '44px' }}>
          <div>
            <div className="section-kicker">03 / Field Execution</div>
            <h2>
              Hardware &amp; Operations <span className="text-primary">In the Field</span>
            </h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '420px', fontSize: '15px' }}>
            A glimpse into physical rack installations, clinical machine interfacing, and commercial CCTV command walls deployed by our Lahore team.
          </p>
        </div>

        <div className="gallery-grid">
          {siteConfig.gallery.map((item, index) => (
            <div
              key={item.title}
              className={`gallery-card reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <img
                className="gallery-img"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <span className="gallery-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
