const FOOTER_LINKS = {
  Shop: [
    { label: 'Tallow Balm',     href: '#products' },
    { label: 'Honey Face Cream', href: '#products' },
    { label: 'Lip Balm Set',    href: '#products' },
  ],
  Company: [
    { label: 'Our Story', href: '#about'   },
    { label: 'FAQ',       href: '#faq'     },
    { label: 'Contact',   href: '#contact' },
  ],
  Policies: [
    { label: 'Shipping Policy', href: '#' },
    { label: 'Returns Policy',  href: '#' },
    { label: 'Privacy Policy',  href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <p className="footer-brand-name">
            Ancestral<span className="logo-dot">·</span>Glow
          </p>
          <p>
            Grass-fed tallow skincare made in small batches in the USA.
            Clean ingredients, ancestral wisdom, modern results.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ancestral Glow. All rights reserved.
      </div>
    </footer>
  );
}
