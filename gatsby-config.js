module.exports = {
  pathPrefix: "/sang_&_sagebrush",
  siteMetadata: {
    title: "Sand & Sagebrush Salon and Spa",
    contact: {
      phone: "(775) 397-0932",
      email: "maddie@sandandsagebrush.com",
      address: "461 Idaho St. Elko, NV 89801"
    },
    development: {
      company: "Unfergettable Designs, LLC",
      devEmail: "john.ferguson@unfergettabledesigns.com"
    },
    menuLinks: [
      {
        name: "Book Now",
        link: "/book"
      },
      {
        name: "The Salon",
        link: "/salon",
      },
      {
        name: "The Team",
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
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp"],
          placeholder: "dominantColor",
          quality: 50,
          breakpoints: [],
          backgroundColor: "transparent",
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
  ],
};
