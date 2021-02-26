require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `SellR`,
    description: `SellR - Your Favourite Online Store`,
    author: `Tamas Piros`,
    copyrightDate: new Date().getFullYear(),
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-cloudinary`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        publicApiKey: process.env.SNIPCART,
        version: "3.0.30",
        useSideCart: true,
        openCartOnAdd: false,
        currency: "gbp",
      },
    },
  ],
}
