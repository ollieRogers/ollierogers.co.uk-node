module.exports = {
  siteMetadata: {
    title: "Ollie Rogers",
    author: "Ollie Rogers",
    description: "Front End Developer, & Designer, based in Bournemouth, UK"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ff5e02',
        theme_color: '#ff5e02',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
