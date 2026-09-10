import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function FeaturedCaseStudy() {
  const { caseStudy } = siteConfig;

  return (
    <section className="case-feature-section section-pad" id="case-study">
      <div className="container">
        <div className="case-feature-grid">
          <div className="case-feature-content reveal">
            <div className="case-metric-pill">
              <span>⚡</span> {caseStudy.metric.toUpperCase()} {caseStudy.metricLabel.toUpperCase()}
            </div>

            <h2>
              Healthcare Infrastructure Trusted By{' '}
              <span className="text-primary">Clinical Pioneers</span>
            </h2>

            <p className="text-muted" style={{ fontSize: '16px', lineHeight: '1.65' }}>
              How Diagnostic &amp; Care Labs partnered with M Solutions to interface 8 clinical analyzers directly with our HIMS/LIMS database, eliminating human transcript errors and accelerating diagnosis.
            </p>

            <div className="case-quote-box">
              <p className="case-quote-text">“{caseStudy.quote}”</p>
              <div className="case-quote-author">
                <strong>{caseStudy.author}</strong>
                <span>{caseStudy.role} · {caseStudy.client}</span>
              </div>
            </div>

            <a
              className="stn-button"
              href={getWhatsAppUrl('Hello M Solutions, I would like to learn more about your HIMS/LIMS hospital case studies.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Consult on Hospital Automation</span>
              <span className="button-arrow-circle" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="case-feature-photo-wrap reveal reveal-delay-1">
            <img
              className="case-feature-photo"
              src={caseStudy.photo}
              alt="Medical facility running M Solutions HIMS and network infrastructure"
              loading="lazy"
            />
            <div className="case-photo-badge">
              <div>
                <strong>{caseStudy.client}</strong>
                <span className="text-muted">8 Automated Machines Connected</span>
              </div>
              <span>99.98% UPTIME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
