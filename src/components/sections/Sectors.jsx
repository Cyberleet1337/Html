import React from 'react';
import { sectorsData } from '../../data/sectorsData.js';
import { getWhatsAppUrl } from '../../data/siteConfig.js';

export function Sectors() {
  return (
    <section className="sectors section-pad" id="sectors">
      <div className="container sectors-grid">
        <div className="sectors-intro reveal">
          <div className="section-kicker" style={{ color: 'var(--accent-cyan)' }}>
            04 / Tailored For Your World
          </div>
          <h2>
            Expertise with<br />
            <em>context.</em>
          </h2>
          <p>
            Different industries present distinct technical bottlenecks. We design architecture tailored to your daily regulatory, operational, and traffic demands.
          </p>
          <a
            className="button button-outline"
            href={getWhatsAppUrl('Hello M Solutions, I would like to discuss solutions for my industry sector.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find your solution <span>↗</span>
          </a>
        </div>

        <div className="sector-stack">
          {sectorsData.map((sector, index) => (
            <article
              key={sector.id}
              className={`sector-row reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <span className="sector-index">{sector.number}</span>
              <div>
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
                <div className="sector-highlights">
                  {sector.highlights.map((item) => (
                    <span key={item} className="sector-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <span className="sector-icon" aria-hidden="true">
                {sector.icon}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
