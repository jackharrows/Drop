const PILLARS = [
  { title: 'Grass-Fed Sourcing', desc: 'Tallow from 100% grass-fed, pasture-raised cattle.' },
  { title: 'Small Batch', desc: 'Made in small runs for freshness and quality control.' },
  { title: 'Clean Ingredients', desc: 'No synthetic additives, fillers, or hidden chemicals.' },
  { title: 'Regenerative', desc: 'Supporting farms that give back to the land.' },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <div className="about-visual">
            <img
              src="/images/lifestyle_concept.png"
              alt="Ancestral Glow lifestyle"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-visual-placeholder" style={{ display: 'none' }}>🌿</div>
          </div>

          {/* Text */}
          <div className="about-text">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Returning to<br />our roots</h2>

            <p>
              Before moisturisers came in plastic tubes with ingredient lists you need a
              chemistry degree to read, people used what the land gave them. Beef tallow —
              rendered from grass-fed cattle — has nourished skin for centuries.
            </p>
            <p>
              We started Ancestral Glow because we believe your skin deserves food-grade
              ingredients it actually recognises. Tallow's fatty-acid profile mirrors that of
              human sebum, which is why it absorbs so well and plays so nicely with all skin types.
            </p>
            <p>
              Every jar is made in small batches in the USA, using tallow from regenerative farms
              that treat their animals and their land with care.
            </p>

            {/* Pillars */}
            <div className="about-pillars">
              {PILLARS.map((p) => (
                <div key={p.title} className="pillar">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
