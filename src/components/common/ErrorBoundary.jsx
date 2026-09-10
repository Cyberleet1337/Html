import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{ padding: '40px 20px', textAlign: 'center', background: '#0b1d30', color: '#ffffff' }}>
          <h3>Visualization temporarily paused</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
            Interactive graphic unavailable on this browser/device mode.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
