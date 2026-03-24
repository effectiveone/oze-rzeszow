import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły OZE" description="Wszystkie artykuły o OZE w Rzeszowie" siteName="OZE Rzeszów" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 3rem' }}>
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2.5rem', color: 'var(--navy-dark)', borderBottom: '4px solid var(--orange)', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>ARTYKUŁY OZE</h1>
        <p style={{ color: 'var(--text-muted)', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.04em', marginBottom: '2rem' }}>{posts.length} ARTYKUŁÓW W ARCHIWUM</p>
        {posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {posts.map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
          </div>
        ) : <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '3rem 0' }}>Artykuły pojawią się wkrótce.</p>}
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

export default BlogPage;
