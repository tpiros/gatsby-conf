require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
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
      resolve: `gatsby-plugin-snipcartv3`,
      options: {
        apiKey: process.env.SNIPCART,
        autopop: true,
      },
    },
  ],
}
