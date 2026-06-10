const TRUST_ITEMS = [
  {
    label: 'Grass-Fed Tallow',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    label: 'Made in USA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      </svg>
    ),
  },
  {
    label: 'Secure Checkout',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: 'Satisfaction Guaranteed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          {/* Eyebrow */}
          <span className="hero-eyebrow fade-up">
            100% Natural · Grass-Fed · Handcrafted
          </span>

          {/* Headline */}
          <h1 className="fade-up" style={{ animationDelay: '0.1s' }}>
            Skin food from<br />
            <em>nature's pantry</em>
          </h1>

          {/* Lead copy */}
          <p className="hero-lead fade-up" style={{ animationDelay: '0.18s' }}>
            Grass-fed beef tallow — the same nourishment your great-grandmother used.
            Packed with vitamins A, D, E &amp; K, biocompatible with human skin.
          </p>

          {/* CTAs */}
          <div className="hero-actions fade-up" style={{ animationDelay: '0.26s' }}>
            <a href="#products" className="btn btn-primary btn-lg">
              Shop the Collection
            </a>
            <a href="#about" className="btn btn-outline btn-lg">
              Our Story
            </a>
          </div>

          {/* Trust strip */}
          <div className="hero-trust fade-up" style={{ animationDelay: '0.34s' }}>
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="trust-item">
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
