import React from 'react';

export function Intro() {
  return (
    <section className="intro section-pad">
      <div className="container intro-grid">
        <div className="section-kicker reveal">
          01 / The M Solutions Advantage
        </div>
        <div className="intro-copy reveal reveal-delay-1">
          <h2>Technology should feel like a <em>superpower.</em></h2>
          <p>
            We pair robust hands-on systems engineering with intuitive design to make complex IT infrastructure and hospital software feel effortless, secure, and built squarely around the people operating it.
          </p>
          <a className="arrow-link" href="#approach">
            Explore our engineering approach <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
