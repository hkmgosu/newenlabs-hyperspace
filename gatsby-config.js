module.exports = {
  pathPrefix: `/gatsby-starter-hyperspace-newenlabs/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Newenlabs Ingenieria Software',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Newenlabs Ingenieria Software',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require("sass"),
      }
    },
    'gatsby-plugin-offline',
  ],
};
