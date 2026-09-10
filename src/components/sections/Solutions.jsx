import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function Solutions() {
  return (
    <section className="solutions-section section-pad" id="solutions">
      <div className="container">
        <div className="section-heading reveal" style={{ marginBottom: '48px' }}>
          <div>
            <div className="section-kicker">01 / Full-Spectrum Solutions</div>
            <h2>
              Grow Your Enterprise With{' '}
              <span className="text-primary">Scalable Infrastructure</span>
            </h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '440px', fontSize: '15px' }}>
            Delivered through our dedicated engineering model: combining physical cabling precision, clinical software workflows, and 24/7 technical support.
          </p>
        </div>

        <div className="solutions-grid">
          {siteConfig.solutions.map((solution, index) => (
            <article
              key={solution.id}
              className={`solution-box reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <div className="solution-thumb-wrap">
                <img
                  className="solution-thumb"
                  src={solution.image}
                  alt={solution.title}
                  loading="lazy"
                />
                <div className="solution-thumb-overlay" />
                <span className="solution-pill">{solution.pill}</span>
              </div>

              <div className="solution-content">
                <h3>{solution.title}</h3>
                <p>{solution.summary}</p>

                <ul className="solution-list">
                  {solution.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="solution-footer">
                  <a
                    className="solution-cta"
                    href={getWhatsAppUrl(`Hello M Solutions, I am interested in your ${solution.title} solutions.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{solution.ctaText}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
