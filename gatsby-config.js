module.exports = {
  siteMetadata: {
    title: `Tyger Technology`,
    titleTemplate: `%s - Tyger Technology`,
    description: `Tyger Technology - digital studio.`,
    url: `https://tyger.technology`,
    author: `David Buck`,
    twitterUsername: `david_buck`,
    image: `/images/tyger.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `tygertechnology-cdn`,
        protocol: `https`,
        hostname: `tyger.technology`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tyger Technology`,
        short_name: `TygerTech`,
        start_url: `/`,
        background_color: `#50E3C2`,
        theme_color: `#50E3C2`,
        display: `minimal-ui`,
        icon: `src/images/tyger-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
