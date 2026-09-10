import React, { Suspense, lazy } from 'react';
import { siteConfig } from '../../data/siteConfig.js';
import { ErrorBoundary } from '../common/ErrorBoundary.jsx';

const NetworkScene = lazy(() => import('../3d/NetworkScene.jsx'));

function TopologyFallback() {
  return (
    <div style={{ height: '280px', display: 'grid', placeItems: 'center' }}>
      <span style={{ font: '11px var(--mono)', color: 'var(--muted)' }}>[Network Topology Engine]</span>
    </div>
  );
}

export function Approach() {
  return (
    <section className="approach section-pad" id="approach">
      <div className="container approach-grid">
        <div className="network-visual reveal">
          <div className="network-header">
            <div>
              <span className="network-live">
                <i aria-hidden="true" /> LIVE TELEMETRY
              </span>
              <strong>Multi-Branch Infrastructure Map</strong>
            </div>
            <span className="network-code">MS / CORE ROUTING</span>
          </div>

          <div className="network-scene">
            <ErrorBoundary fallback={<TopologyFallback />}>
              <Suspense fallback={<TopologyFallback />}>
                <NetworkScene />
              </Suspense>
            </ErrorBoundary>
            
            <div className="scene-label scene-core">MS CORE</div>
            <div className="scene-label scene-hospital">HOSPITAL</div>
            <div className="scene-label scene-office">OFFICE</div>
            <div className="scene-label scene-cloud">CLOUD</div>
            <div className="scene-label scene-cctv">CCTV</div>
          </div>

          <div className="network-metrics">
            <div>
              <span>UPTIME SLA</span>
              <b>99.9%</b>
            </div>
            <div>
              <span>SURVEILLANCE</span>
              <b>24 / 7 Live</b>
            </div>
            <div>
              <span>STATUS</span>
              <b>Operational</b>
            </div>
          </div>
        </div>

        <div className="approach-copy reveal reveal-delay-1">
          <div className="section-kicker">05 / How We Work</div>
          <h2>
            Clear thinking.<br />
            <em>Clean execution.</em>
          </h2>
          <p>
            We audit your current infrastructure, map the actual workflow bottlenecks, and build the right-sized solution. No mystery markup, no bloated software, and zero disappearing acts after deployment.
          </p>

          <div className="stats-row">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.subtext}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
