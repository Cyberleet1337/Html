import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/923229015177';

const services = [
  ['01', '▦', 'Hospital & Lab Software', 'HIMS and LIMS systems designed for clearer workflows, faster decisions, and better care.', 'Discover HIMS / LIMS'],
  ['02', '⌘', 'Networks & Infrastructure', 'Resilient Wi-Fi, structured cabling, multi-VLAN networks, and servers configured for uptime.', 'Build your backbone'],
  ['03', '◉', 'Security & Surveillance', 'IP CCTV, access control, and remote monitoring that gives you visibility wherever you are.', 'Secure your space'],
  ['04', '✦', 'Creative & Digital', 'Websites, brand systems, ads, and graphics that turn your expertise into a clear signal.', 'Shape your presence'],
];

const sectors = [
  ['01', 'Healthcare', 'Connected care, protected data, less operational friction.', '✚'],
  ['02', 'Education', 'Campus-wide connectivity designed for focused learning.', '⌂'],
  ['03', 'Retail & Hospitality', 'POS, guest Wi-Fi, and security that never miss a beat.', '◇'],
  ['04', 'Growing Business', 'The dependable systems your next chapter needs.', '↗'],
];

function Brand() {
  return <img className="brand-logo" src="/msolutions-mark.svg" alt="" aria-hidden="true" />;
}

function WhatsAppLink({ children, className = 'button button-primary', message = 'Hello M Solutions, I would like to talk to an expert.' }) {
  return <a className={className} href={`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">{children} <span>↗</span></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNote, setFormNote] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello M Solutions, my name is ${data.get('name')}. Email: ${data.get('email')}. Project details: ${data.get('message')}`;
    setFormNote('Opening WhatsApp...');
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    event.currentTarget.reset();
  };

  return <>
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <a className="brand" href="#top" aria-label="M Solutions home"><Brand /><span>M<span className="brand-accent">Solutions</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}><span /><span /></button>
        <nav id="main-nav" className={`main-nav${menuOpen ? ' open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a><a href="#sectors" onClick={closeMenu}>Industries</a><a href="#approach" onClick={closeMenu}>Our approach</a>
          <WhatsAppLink className="nav-cta" message="Hello M Solutions, I would like to start a project.">Start a project</WhatsAppLink>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero"><div className="hero-grid" /><div className="container hero-content">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="pulse-dot" /> Lahore-based. Built for everywhere.</div><h1>IT that keeps<br /><em>business moving.</em></h1><p className="hero-text">From hospital systems to secure networks, we build the dependable digital backbone your team can rely on every day.</p><div className="hero-actions"><WhatsAppLink>Talk to an expert</WhatsAppLink><a className="text-link" href="#services">Explore services <span>↓</span></a></div><div className="hero-proof"><span className="proof-line" /><span>Software · Infrastructure · Security</span></div></div>
        <div className="hero-visual reveal reveal-delay"><div className="visual-frame"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" alt="Server rack with blue status lights" /><div className="visual-label"><span className="status-dot" /><span>Systems online</span><strong>24 / 7</strong></div></div><div className="float-card float-card-top"><span className="tiny-icon">⌁</span><span>Smart infrastructure<br /><b>Without the guesswork.</b></span></div><div className="float-card float-card-bottom"><strong>2.8K</strong><span>people<br />trust us</span></div></div>
      </div><div className="scroll-note"><span>Scroll to explore</span><span className="scroll-line" /></div></section>

      <section className="intro section-pad"><div className="container intro-grid"><div className="section-kicker reveal">01 / The M Solutions difference</div><div className="intro-copy reveal reveal-delay"><h2>Technology should feel like a <em>superpower.</em></h2><p>We pair practical engineering with thoughtful design to make complex technology feel simple, secure, and built around the people using it.</p><a className="arrow-link" href="#approach">See how we work <span>↗</span></a></div></div></section>

      <section className="services section-pad" id="services"><div className="container"><div className="section-heading reveal"><div><div className="section-kicker">02 / What we do</div><h2>Make your systems<br /><em>work harder.</em></h2></div><p>One expert partner for the software, infrastructure, and security that keeps your operation moving forward.</p></div><div className="service-list">{services.map(([number, icon, title, description, link], index) => <article className={`service-card reveal${index === 1 ? ' reveal-delay' : ''}${index === 2 ? ' reveal-delay-2' : ''}`} key={title}><span className="service-number">{number}</span><div className="service-icon">{icon}</div><div><h3>{title}</h3><p>{description}</p><WhatsAppLink className="service-link" message={`Hello M Solutions, I am interested in ${title}.`}>{link}</WhatsAppLink></div><span className="card-arrow">↗</span></article>)}</div></div></section>

      <section className="sectors section-pad" id="sectors"><div className="container sectors-grid"><div className="sectors-intro reveal"><div className="section-kicker">03 / Built for your world</div><h2>Expertise with<br /><em>context.</em></h2><p>Different industries have different pressure points. We bring the right technology to yours.</p><WhatsAppLink className="button button-outline">Find your solution</WhatsAppLink></div><div className="sector-stack">{sectors.map(([number, title, description, icon], index) => <article className={`sector-row reveal${index === 1 ? ' reveal-delay' : ''}${index === 2 ? ' reveal-delay-2' : ''}`} key={title}><span className="sector-index">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="sector-icon">{icon}</span></article>)}</div></div></section>

      <section className="approach section-pad" id="approach"><div className="container approach-grid"><div className="network-visual reveal"><div className="network-topline"><span className="network-live"><i /> NETWORK LIVE</span><span>MS / CORE 01</span></div><div className="network-stage"><span className="network-line line-one" /><span className="network-line line-two" /><span className="network-line line-three" /><span className="network-line line-four" /><span className="network-node node-core"><b>MS</b><small>CORE</small></span><span className="network-node node-hospital"><b>H</b><small>HOSPITAL</small></span><span className="network-node node-office"><b>O</b><small>OFFICE</small></span><span className="network-node node-cloud"><b>☁</b><small>CLOUD</small></span><span className="network-node node-cctv"><b>◉</b><small>CCTV</small></span></div><div className="network-footer"><span>UPTIME <b>99.9%</b></span><span>SECURE <b>24 / 7</b></span></div></div><div className="approach-copy reveal reveal-delay"><div className="section-kicker">04 / How we work</div><h2>Clear thinking.<br /><em>Clean execution.</em></h2><p>We listen first, map the real problem, then build the right-sized solution. No mystery, no unnecessary complexity, and no disappearing after launch.</p><div className="stats"><div><strong>10+</strong><span>years of<br />experience</span></div><div><strong>24/7</strong><span>systems<br />support</span></div><div><strong>∞</strong><span>room to<br />scale</span></div></div></div></div></section>

      <section className="contact section-pad" id="contact"><div className="container contact-panel reveal"><div><div className="section-kicker">05 / Let’s make it work</div><h2>Have a challenge?<br /><em>Bring it on.</em></h2><p>Tell us what’s slowing you down. We’ll help you find the clearest next step on WhatsApp.</p></div><form onSubmit={handleSubmit}><label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Work email<input type="email" name="email" placeholder="you@company.com" required /></label><label>How can we help?<textarea name="message" rows="3" placeholder="Tell us a little about your project" required /></label><button className="button button-light" type="submit">Continue on WhatsApp <span>↗</span></button><p className="form-note" aria-live="polite">{formNote}</p></form></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-top"><a className="brand" href="#top"><Brand /><span>M<span className="brand-accent">Solutions</span></span></a><div className="footer-contact"><span>Let’s connect</span><a href="mailto:msolution1337@gmail.com">msolution1337@gmail.com</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp: +92 322 9015177</a></div><div className="footer-social"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="#contact">Facebook ↗</a><a href="#contact">LinkedIn ↗</a></div></div><div className="container footer-bottom"><span>© 2026 M Solutions. Software & IT Experts.</span><span>Remote, Lahore, Pakistan · Always open</span><a href="#top">Back to top ↑</a></div></footer>
    <a className="button button-primary whatsapp-float" style={{ position: 'fixed', zIndex: 20, right: 24, bottom: 24, borderRadius: 999, boxShadow: '0 12px 28px rgba(16,37,45,.2)' }} href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hello M Solutions, I would like to talk to an expert.')}`} target="_blank" rel="noreferrer" aria-label="Chat with M Solutions on WhatsApp">◔<span>Chat with us</span></a>
  </>;
}

export default App;
