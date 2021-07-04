module.exports = {
  pathPrefix: "/sang_&_sagebrush",
  siteMetadata: {
    title: "Sand & Sagebrush Salon and Spa",
    contact: {
      phone: "775 ... idk yet",
      email: "maddie@sandandsagebrush.com",
    },
    menuLinks: [
      /*{
        name: "Products",
        link: "/products",
      },*/
      {
        name: "Team",
        link: "/team",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
};
