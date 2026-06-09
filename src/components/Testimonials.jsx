const testimonials = [
  {
    quote: "I've tried every 'clean' moisturizer on the market, but nothing compares to this tallow balm. My skin literally drinks it up. I wake up with a radiance I haven't seen in years. Ancestral Glow is now my only skincare step.",
    author: 'Sarah M.',
    location: 'Austin, TX',
    title: 'The Glow is Real!',
    emoji: '🌟',
  },
  {
    quote: 'The Honey-Infused cream is a game changer. I struggle with redness and dry spots, and this calmed everything down after just one use. Plus, knowing it\'s 100% natural gives me so much peace of mind.',
    author: 'Jessica L.',
    location: 'Vancouver, BC',
    title: 'Healed my dry patches overnight.',
    emoji: '🍯',
  },
  {
    quote: "I'm obsessed with the lip balm set. Most balms make my lips feel drier after an hour, but these stay on and actually heal. Love the plastic-free tubes, too!",
    author: 'Emma R.',
    location: 'London, UK',
    title: 'Finally, a lip balm that actually works.',
    emoji: '💚',
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title fade-in">What Our Customers Say</h2>
        <p className="section-subtitle fade-in" style={{ animationDelay: '0.1s' }}>
          Join thousands of glowing customers who've made the switch 
          to ancestral skincare.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <span className="testimonial-emoji">{t.emoji}</span>
              <p className="testimonial-title">"{t.title}"</p>
              <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
              <div className="testimonial-author">
                <strong>{t.author}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}