import React, { useState } from 'react';
import { faqData } from '../../data/faqData.js';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="container">
        <div className="section-heading reveal" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '44px' }}>
          <div className="section-kicker">05 / Inquiries &amp; SLA</div>
          <h2>
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted" style={{ maxWidth: '540px', fontSize: '15px' }}>
            Direct answers regarding implementation lead times, turnkey hardware sourcing, and ongoing SLA maintenance.
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item reveal ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${index}`}
                  id={`faq-btn-${index}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle-badge" aria-hidden="true">
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq-content"
                    id={`faq-body-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                  >
                    <p style={{ margin: 0 }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
