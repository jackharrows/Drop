import { useState } from 'react';

const CONTACT_ITEMS = [
  'Orders usually ship within 2 business days',
  'hello@ancestralglow.com',
  'Instagram · TikTok · Facebook',
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Basic form submit handler — wire up to your backend / Formspree / Netlify Forms as needed
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info-col">
            <span className="section-label">Get in Touch</span>
            <h3>We'd love to hear from you</h3>
            <p>
              Have a question about an order, an ingredient, or just want to say hello?
              Drop us a message and we'll get back to you within one business day.
            </p>
            <ul className="contact-items">
              {CONTACT_ITEMS.map((item) => (
                <li key={item}>
                  <span className="dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form column */}
          <div className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌿</p>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--bark)', marginBottom: '0.5rem' }}>
                  Message received!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="What's on your mind?" required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
