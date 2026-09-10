import React from 'react';
import { caseStudiesData } from '../../data/caseStudiesData.js';

export function CaseStudies() {
  return (
    <section className="case-studies section-pad" id="case-studies">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <div className="section-kicker">03 / Proven Deployments</div>
            <h2>
              Measurable results,<br />
              <em>real environments.</em>
            </h2>
          </div>
          <p>
            Explore how our hospital software and enterprise network rollouts solve operational bottlenecks for high-throughput clients.
          </p>
        </div>

        <div className="case-grid">
          {caseStudiesData.map((cs, index) => (
            <article
              key={cs.id}
              className={`case-card reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <div className="case-top">
                <span className="case-category">{cs.category}</span>
                <span className="case-client">{cs.client}</span>
              </div>

              <h3>{cs.title}</h3>

              <div className="metric-banner">
                <strong>{cs.metric}</strong>
                <span>{cs.metricLabel}</span>
              </div>

              <p className="case-description">{cs.description}</p>

              <div className="case-tags">
                {cs.tags.map((tag) => (
                  <span key={tag} className="case-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
