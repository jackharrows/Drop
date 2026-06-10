import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Shop',    href: '#products' },
  { label: 'About',   href: '#about'    },
  { label: 'FAQ',     href: '#faq'      },
  { label: 'Contact', href: '#contact'  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={close}>
          Ancestral<span className="logo-dot">·</span>Glow
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#products" className="btn btn-primary navbar-cta">
          Shop Now
        </a>

        {/* Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={open ? { opacity: 0 }                                    : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a href="#products" className="btn btn-primary" style={{ marginTop: '0.75rem' }} onClick={close}>
          Shop Now
        </a>
      </div>
    </nav>
  );
}
