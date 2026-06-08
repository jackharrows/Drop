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
            Nature's original moisturizer. Grass-fed tallow skincare 
            crafted the way our ancestors intended — pure, simple, effective.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#products">All Products</a></li>
            <li><a href="#products">Whipped Tallow Balm</a></li>
            <li><a href="#products">Face Cream</a></li>
            <li><a href="#products">Lip Balm Set</a></li>
          </ul>
        </div>

        <div>
          <h4>Learn</h4>
          <ul>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Policies</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Shipping: Free on orders over $50. 3-5 business days (US). International available.'); }}>Shipping Policy</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Returns: 30-day satisfaction guarantee. Full refund or exchange — no questions asked.'); }}>Return Policy</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy: We never share your data. Your information is used only for order fulfillment.'); }}>Privacy Policy</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Terms: By purchasing, you agree to our terms of service. Contact us for full details.'); }}>Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Ancestral Glow — Pathfinder Dropship. All rights reserved.</p>
      </div>
    </footer>
  );
}