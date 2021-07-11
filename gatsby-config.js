/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ArtHaus Visual Communication Ltd',
        short_name: 'ArtHaus Visual Communication Ltd',
        display: 'standalone',
        icon: `${__dirname}/src/images/arthaus-icon.png`,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f28b00',
        cache_busting_mode: 'none'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-yaml',
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -148
      }
    }
  ]
}
