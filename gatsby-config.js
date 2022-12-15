/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "@DeeQeeVee",
    description: "Dao Quang Vinh (@DeeQeeVee)",
    author: "DeeQeeVee",
    twitterUsername: "DeeQeeVee",
    facebookUsername: "DeeQeeVee",
    instagramUsername: "DeeQeeVee",
    linkedinUsername: "",
    image: "/macbook-color.jpg",
    siteUrl: "https://barcadia.netlify.com",
    developerName: "Dao Quang Vinh",
    developerUrl: "https://deeqeevee.netlify.com/",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "g2wuq0wtk1uv", // process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "0FuI7KuI-hHCyXAUTme05vcNFoKOXsrPWLK0sKVaLW4", // process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
