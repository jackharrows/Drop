export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-visual" style={{ overflow: 'hidden' }}>
            <img
              src="/images/lifestyle_concept.png"
              alt="Ancestral Glow lifestyle"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-image-fallback" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span className="visual-icon">🐄</span>
              <span className="visual-text">Grass-Fed • Pasture-Raised • Small Batch</span>
            </div>
          </div>

          <div className="about-text">
            <h2>The Ancestral Glow Story</h2>
            <p>
              At Ancestral Glow, we believe that modern skincare has lost its way. In the rush for convenience and low costs, 
              the industry has traded time-tested, ancestral wisdom for synthetic chemicals, laboratory-made fillers, 
              and hormone-disrupting preservatives. We are here to bridge that gap and <strong>return to the basics</strong>.
            </p>
            <p>
              Our journey began with a simple discovery: the most effective nourishment for our skin has been right under our 
              feet for centuries. Long before the era of industrial beauty, our ancestors understood the profound healing 
              power of animal fats. Beef tallow, in particular, was a staple for skin protection and health due to its 
              incredible compatibility with human biology.
            </p>
            <p>
              By sourcing <strong>100% grass-fed, pasture-raised beef tallow</strong> and combining it with pure, 
              organic botanicals, we've created a skincare line that respects tradition and delivers real results. 
              We partner with small-scale, regenerative farms that prioritize animal welfare and soil health, 
              ensuring that every jar we produce is as ethical as it is effective.
            </p>
            <p>
              We don't just sell skincare; we're inviting you to reconnect with nature's original nourishment. 
              <strong> Welcome back to your original glow.</strong>
            </p>

            <div className="about-values">
              <div className="about-value">
                <h4>🌱 Grass-Fed & Pasture-Raised</h4>
                <p>100% grass-fed tallow from regenerative farms</p>
              </div>
              <div className="about-value">
                <h4>🧪 Nutrient-Dense</h4>
                <p>Rich in Vitamins A, D, E, K & Omega-3s</p>
              </div>
              <div className="about-value">
                <h4>♻️ Zero Waste</h4>
                <p>Plastic-free, compostable & glass packaging</p>
              </div>
              <div className="about-value">
                <h4>🤲 Small Batch</h4>
                <p>Handcrafted in small batches for quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}