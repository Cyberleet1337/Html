import React from 'react';
import { servicesData } from '../../data/servicesData.js';
import { getWhatsAppUrl } from '../../data/siteConfig.js';

export function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <div className="section-kicker">02 / What We Deliver</div>
            <h2>
              Make your systems<br />
              <em>work harder.</em>
            </h2>
          </div>
          <p>
            One accountable partner for hospital automation, enterprise networking, 4K CCTV surveillance, and modern digital platforms.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className={`service-card reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <div className="service-header">
                <span className="service-number">{service.number}</span>
                <div className="service-icon-box" aria-hidden="true">
                  {service.icon}
                </div>
              </div>

              <span className="service-tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>

              <ul className="capabilities-list" aria-label={`Key capabilities for ${service.title}`}>
                {service.capabilities.map((capability, i) => (
                  <li key={i}>{capability}</li>
                ))}
              </ul>

              <div className="service-footer">
                <a
                  className="service-cta"
                  href={getWhatsAppUrl(`Hello M Solutions, I am interested in discussing your ${service.title} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.ctaText} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
