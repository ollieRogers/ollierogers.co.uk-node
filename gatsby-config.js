module.exports = {
  siteMetadata: {
    title: "Ollie Rogers",
    author: "Ollie Rogers",
    description: "Front End Developer, & Designer, based in Bournemouth, UK"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-71084590-2",
        head: false,
        respectDNT: true,
        cookieDomain: "ollierogers.co.uk",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ollie-rogers',
        short_name: 'ollie',
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
