import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#custom-art', label: 'Custom Art' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">SHA</span>
          <span className="brand-word">Art by SHA</span>
        </a>

        <div
          className={`nav-backdrop ${open ? 'open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <nav className={`links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a href={l.href} key={l.href} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
            Start a Commission
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
