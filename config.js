const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://learn.hasura.io",
    gaTrackingId: null
  },
  header: {
    logo: "./src/components/images/OverOps.png",
    logoLink: "./src/components/images/OverOps.png",
    title: "OverOps",
    githubUrl: "https://github.com/hasura/gatsby-gitbook-boilerplate",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["", ""],
    links: [{ text: "Hasura", link: "https://hasura.io" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "OverOps",
    description: "Documentation built with mdx. Powering learn.hasura.io ",
    ogImage: null,
    docsLocation:
      "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  }
};

module.exports = config;
