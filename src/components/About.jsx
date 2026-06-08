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
            <h2>Ancestral Wisdom for <br/>Modern Skin</h2>
            <p>
              Before modern skincare filled shelves with chemicals and preservatives, 
              our ancestors relied on one ingredient for beautiful, resilient skin: 
              <strong> beef tallow</strong>.
            </p>
            <p>
              Tallow is one of the most bio-identical substances to human sebum, 
              meaning your skin recognizes and absorbs it instantly. Rich in 
              vitamins A, D, E, and K, it delivers deep nourishment that 
              modern moisturizers simply can't match.
            </p>
            <p>
              At <strong>Ancestral Glow</strong>, we source 100% grass-fed tallow 
              from regenerative farms. Every batch is slow-rendered, hand-whipped, 
              and blended with organic herbs and oils — never any synthetic 
              additives, preservatives, or fragrances.
            </p>

            <div className="about-values">
              <div className="about-value">
                <h4>🌱 Grass-Fed</h4>
                <p>100% grass-fed & pasture-raised beef tallow</p>
              </div>
              <div className="about-value">
                <h4>🧪 Lab Tested</h4>
                <p>Third-party tested for purity & safety</p>
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