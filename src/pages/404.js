import React from 'react';
import { Link } from 'gatsby';
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem', fontFamily: "'Oswald', sans-serif" }}>
    <h1 style={{ fontSize: '3rem', color: 'var(--navy)' }}>404</h1>
    <p style={{ marginTop: '1rem' }}><Link to="/">← Wróć na stronę główną</Link></p>
  </div>
);
export default NotFound;
