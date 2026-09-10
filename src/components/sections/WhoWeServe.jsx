import React from 'react';
import { siteConfig } from '../../data/siteConfig.js';

export function WhoWeServe() {
  return (
    <section className="who-we-serve-section section-pad" id="who-we-serve">
      <div className="container">
        <div className="section-heading reveal" style={{ marginBottom: '44px' }}>
          <div>
            <div className="section-kicker">04 / Targeted Architecture</div>
            <h2>
              Who We Serve:{' '}
              <span className="text-primary">Mission-Critical Facilities</span>
            </h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '420px', fontSize: '15px' }}>
            Tailored software and infrastructure setups engineered around specific regulatory, throughput, and traffic demands.
          </p>
        </div>

        <div className="serve-grid">
          {siteConfig.whoWeServe.map((item, index) => (
            <div
              key={item.title}
              className={`serve-row reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <div className="serve-row-left">
                <div className="serve-row-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
              <span className="serve-badge">{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
