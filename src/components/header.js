import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header>
    <div style={{ background: 'var(--orange)', padding: '0.3rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.3rem 1.5rem' }}>
        <span style={{ color: '#fff', fontSize: '0.75rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.06em' }}>🔴 AKTUALNOŚCI OZE DLA PODKARPACIA</span>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>ecoaudyt.app ↗</a>
      </div>
    </div>
    <div style={{ background: 'var(--navy-dark)', borderBottom: '3px solid var(--orange)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            OZE <span style={{ color: 'var(--orange)' }}>RZESZÓW</span>
          </span>
          <span style={{ display: 'block', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Portal energetyczny Podkarpacia</span>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Oswald', sans-serif", fontSize: '0.9rem', letterSpacing: '0.05em', textDecoration: 'none' }}>GŁÓWNA</Link>
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Oswald', sans-serif", fontSize: '0.9rem', letterSpacing: '0.05em', textDecoration: 'none' }}>ARTYKUŁY</Link>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
            style={{ background: 'var(--orange)', color: '#fff', padding: '0.4rem 1rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.04em', textDecoration: 'none' }}>
            AUDYT →
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
