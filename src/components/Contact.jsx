export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title fade-in">Get in Touch</h2>
        <p className="section-subtitle fade-in" style={{ animationDelay: '0.1s' }}>
          Have questions about our products or want to place a bulk order? 
          We'd love to hear from you.
        </p>

        <div className="contact-grid">
          <div className="contact-info fade-in" style={{ animationDelay: '0.2s' }}>
            <h3>Let's Talk Tallow</h3>
            <p>
              We're here to help! Whether you have a question about ingredients, 
              need skincare advice, or want to discuss wholesale opportunities — 
              reach out anytime. Our team typically responds within 24 hours.
            </p>

            <ul className="contact-details">
              <li>hello@ancestralglow.com</li>
              <li>Response within 24 hours</li>
              <li>Free skincare consultations</li>
              <li>Wholesale & bulk pricing available</li>
            </ul>

            <div className="contact-social" style={{ marginTop: '1.5rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); alert('Follow us on Instagram @ancestralglow'); }}>Instagram</a>
                <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); alert('Follow us on TikTok @ancestralglow'); }}>TikTok</a>
                <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); alert('Follow us on Facebook @ancestralglow'); }}>Facebook</a>
              </div>
            </div>
          </div>

          <form
            className="contact-form fade-in"
            style={{ animationDelay: '0.3s' }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('✅ Message sent! (Demo — this is a static storefront. For real orders, email us at hello@ancestralglow.com)');
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Jane Doe" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="jane@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell us what you're looking for..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}