import React from 'react';
import { testimonialsData } from '../../data/testimonialsData.js';

export function Testimonials() {
  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <div className="section-kicker">06 / Client Trust</div>
            <h2>
              Endorsed by<br />
              <em>operators & doctors.</em>
            </h2>
          </div>
          <p>
            Real feedback from healthcare administrators, facility directors, and IT leads who depend on our systems daily.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <article
              key={item.author}
              className={`testimonial-card reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <span className="testimonial-badge">{item.badge}</span>
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-author">
                <strong>{item.author}</strong>
                <span>{item.role} · {item.organization}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
