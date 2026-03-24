import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  const featured = posts[0];
  const rest = posts.slice(1, 7);

  return (
    <Layout>
      <SEO title="Portal OZE Rzeszów" description="OZE w Rzeszowie i na Podkarpaciu — aktualności energetyczne" siteName="OZE Rzeszów" />

      <section style={{ background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, var(--navy-light) 100%)', padding: '4rem 0', borderBottom: '4px solid var(--orange)' }}>
        <div className="container">
          <p style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--orange)', fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>LOKALNY PORTAL ENERGETYCZNY</p>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', lineHeight: 1.05, marginBottom: '1rem' }}>
            OZE W RZESZOWIE<br/><span style={{ color: 'var(--orange)' }}>I NA PODKARPACIU</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', maxWidth: '580px', marginBottom: '1.5rem' }}>
            Najnowsze informacje o fotowoltaice, wietrze i zielonej transformacji energetycznej regionu podkarpackiego.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/blog" style={{ background: 'var(--orange)', color: '#fff', padding: '0.65rem 1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em', textDecoration: 'none' }}>ARTYKUŁY OZE</Link>
            <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '0.65rem 1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em', textDecoration: 'none' }}>AUDYT ENERGETYCZNY</a>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '2.5rem 1.5rem 3rem' }}>
        {featured ? (
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '2rem', marginBottom: '2.5rem' }}>
            <article style={{ background: 'var(--bg-alt)', padding: '2rem', borderTop: '5px solid var(--orange)' }}>
              {featured.frontmatter.tags?.[0] && <span style={{ background: 'var(--orange)', color: '#fff', fontFamily: "'Oswald', sans-serif", fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '0.75rem' }}>{featured.frontmatter.tags[0].toUpperCase()}</span>}
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
                <Link to={`/blog${featured.fields.slug}`} style={{ color: 'var(--navy-dark)', textDecoration: 'none' }}>{featured.frontmatter.title}</Link>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.65 }}>{featured.excerpt}</p>
              <Link to={`/blog${featured.fields.slug}`} style={{ background: 'var(--navy)', color: '#fff', padding: '0.6rem 1.25rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.04em', textDecoration: 'none', display: 'inline-block' }}>CZYTAJ ARTYKUŁ →</Link>
            </article>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {rest.slice(0, 3).map(post => (
                <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2rem', color: 'var(--navy)' }}>ARTYKUŁY WKRÓTCE</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Przygotowujemy treści o OZE w Rzeszowie.</p>
          </div>
        )}
        {rest.length > 3 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {rest.slice(3).map(post => (
              <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
            ))}
          </div>
        )}
        {posts.length > 7 && (
          <div style={{ textAlign: 'center' }}>
            <Link to="/blog" style={{ border: '2px solid var(--navy)', color: 'var(--navy)', padding: '0.6rem 1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', display: 'inline-block' }}>WSZYSTKIE ARTYKUŁY ({posts.length}) →</Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes { fields { slug } excerpt(pruneLength: 180) frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags } }
    }
  }
`;

export default IndexPage;
