import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Rzeszów" />
      <div className="container" style={{ padding: '2rem 1.5rem 4rem', maxWidth: '860px' }}>
        <Link to="/blog" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.85rem', color: 'var(--navy)', letterSpacing: '0.04em', display: 'block', marginBottom: '1.5rem' }}>← POWRÓT DO ARTYKUŁÓW</Link>
        <header style={{ borderTop: '5px solid var(--orange)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            {tags && tags.map(t => <span key={t} style={{ background: 'var(--orange)', color: '#fff', fontFamily: "'Oswald', sans-serif", fontSize: '0.68rem', fontWeight: 600, padding: '0.15rem 0.5rem', letterSpacing: '0.08em' }}>{t.toUpperCase()}</span>)}
          </div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--navy-dark)', lineHeight: 1.1, marginBottom: '0.6rem' }}>{title}</h1>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>{date} · {author}</p>
          {description && <p style={{ fontSize: '1.05rem', color: 'var(--navy)', borderLeft: '4px solid var(--orange)', paddingLeft: '1rem', lineHeight: 1.65 }}>{description}</p>}
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
