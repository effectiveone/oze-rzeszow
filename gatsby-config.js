module.exports = {
  siteMetadata: {
    title: 'OZE Rzeszów',
    description: 'Portal o odnawialnych źródłach energii w Rzeszowie i na Podkarpaciu',
    siteUrl: 'https://oze-rzeszow.pages.dev',
    author: 'Redakcja OZE Rzeszów',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
