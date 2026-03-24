import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--navy-dark)', color: 'rgba(255,255,255,0.7)', padding: '2.5rem 0 1.5rem', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', fontSize: '1.2rem', marginBottom: '0.75rem', borderBottom: 'none' }}>OZE RZESZÓW</h3>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>Niezależny portal informacyjny o OZE w Rzeszowie i na Podkarpaciu.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--orange)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>NAWIGACJA</h4>
          <Link to="/" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginBottom: '0.4rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--orange)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>PARTNERZY</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app →</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>© {year} OZE RZESZÓW</p>
      </div>
    </footer>
  );
};

export default Footer;
