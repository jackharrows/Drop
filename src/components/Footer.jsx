export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>
            <span>✦</span> Ancestral <span>Glow</span>
          </h3>
          <p>
            Nature's original nourishment. Grass-fed tallow skincare 
            crafted the way our ancestors intended — pure, simple, effective.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
            <a href="#" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }} onClick={(e) => { e.preventDefault(); alert('Instagram @ancestralglow'); }}>Instagram</a>
            <a href="#" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }} onClick={(e) => { e.preventDefault(); alert('TikTok @ancestralglow'); }}>TikTok</a>
            <a href="#" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }} onClick={(e) => { e.preventDefault(); alert('Facebook @ancestralglow'); }}>Facebook</a>
          </div>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#products">All Products</a></li>
            <li><a href="#products">Whipped Tallow Balm</a></li>
            <li><a href="#products">Honey Face Cream</a></li>
            <li><a href="#products">Lip Balm Set</a></li>
          </ul>
        </div>

        <div>
          <h4>Learn</h4>
          <ul>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4>Policies</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('We offer free shipping on orders over $50 within the US. Standard shipping takes 3-5 business days. International shipping to Canada, UK, and Australia takes 7-14 business days.'); }}>Shipping Policy</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('We want you to love your glow! If you aren\'t satisfied with your purchase, we offer a 30-day return policy on all products. Contact our customer service team for assistance.'); }}>Return Policy</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('We never share your data. Your information is used only for order fulfillment and customer service.'); }}>Privacy Policy</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('By purchasing, you agree to our terms of service. Contact us for full details.'); }}>Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Ancestral Glow — Pathfinder Dropship. All rights reserved.</p>
      </div>
    </footer>
  );
}