import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Shop', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <span>✦</span> Ancestral <span>Glow</span>
        </a>

        <ul className="navbar-links" style={{ display: menuOpen ? 'flex' : undefined }}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </div>
    </nav>
  );
}