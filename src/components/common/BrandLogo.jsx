import React from 'react';

export function BrandLogo({ className = 'brand-logo', size = 38 }) {
  return (
    <img
      className={className}
      src="/msolutions-mark.svg"
      alt="M Solutions"
      width={size}
      height={size}
      loading="eager"
      style={{ filter: 'drop-shadow(0 2px 8px rgba(56, 189, 248, 0.35))' }}
    />
  );
}

export function Brand() {
  return (
    <div className="brand">
      <BrandLogo />
      <span className="brand-text">
        <span className="brand-primary">M</span>
        <span className="brand-accent">Solutions</span>
      </span>
    </div>
  );
}
