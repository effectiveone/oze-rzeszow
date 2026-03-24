import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ borderLeft: '4px solid var(--navy)', background: 'var(--bg-alt)', padding: '1.25rem 1.5rem', transition: 'border-color 0.2s' }}
    onMouseEnter={e => e.currentTarget.style.borderLeftColor = 'var(--orange)'}
    onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'var(--navy)'}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      {tags && tags[0] && <span style={{ background: 'var(--orange)', color: '#fff', fontFamily: "'Oswald', sans-serif", fontSize: '0.65rem', fontWeight: 600, padding: '0.1rem 0.5rem', letterSpacing: '0.08em' }}>{tags[0].toUpperCase()}</span>}
      <time style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.04em' }}>{date}</time>
    </div>
    <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: 1.25 }}>
      <Link to={`/blog${slug}`} style={{ color: 'var(--navy-dark)', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.color = 'var(--orange)'}
        onMouseLeave={e => e.target.style.color = 'var(--navy-dark)'}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ color: 'var(--orange)', fontFamily: "'Oswald', sans-serif", fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none' }}>CZYTAJ DALEJ →</Link>
  </article>
);

export default PostCard;
