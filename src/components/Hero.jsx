export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content container">
        <span className="hero-badge fade-in">🌿 100% Natural • Grass-Fed • Handmade</span>
        <h1 className="fade-in" style={{ animationDelay: '0.1s' }}>
          Nature's Original <em>Moisturizer</em>
        </h1>
        <p className="fade-in" style={{ animationDelay: '0.2s' }}>
          Experience the ancestral wisdom of grass-fed beef tallow skincare. 
          Rich in vitamins A, D, E & K — your skin's deepest nourishment, 
          naturally.
        </p>
        <div className="hero-actions fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="#products" className="btn btn-primary btn-large">
            Shop Our Collection
          </a>
          <a href="#about" className="btn btn-secondary btn-large">
            Our Story
          </a>
        </div>
        <div className="hero-trust fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="hero-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Grass-Fed Tallow
          </div>
          <div className="hero-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
            </svg>
            Made in USA
          </div>
          <div className="hero-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Secure Checkout
          </div>
          <div className="hero-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            Satisfaction Guaranteed
          </div>
        </div>
      </div>
    </section>
  );
}