module.exports = {
  siteMetadata: {
    title: 'Ollie Rogers',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ollie Rogers",
        short_name: "Ollie Rogers",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#666666",
        display: "standalone",
        icons: [
          {
            src: `/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
         
        ],
      },
    },
  ],
};
