module.exports = {
  siteTitle: "Source of Fun", // Site title.
  siteTitleShort: "Funny", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Source of Fun", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://sourceof.fun", // Domain of your website without pathPrefix.
  pathPrefix: "/sourceof-fun", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Some valuable insights about business, tech and entrepreneurship", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  //siteFBAppID: // "1825356251115265", // FB Application ID for using app insights
  // siteGATrackingID: // "UA-47311644-4", // Tracking code ID for google analytics.
  //disqusShortname: // "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Startups", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Karianne Melleby", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Oslo, Norway", // User location to display in the author segment.
  userAvatar: "https://static1.squarespace.com/static/56951e5dd8af10cf1a938b89/t/5b15056a2b6a28c2965c8ed3/1528104320745/Karianne+Melleby+bilde+Status+Norge+Anno+2017.png?format=750w", // User avatar to display in the author segment.
  userDescription:
    "I work at StartLab and I help people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/karianne-u-melleby-95ba8/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/KMelleby",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:karianne.melleby@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Karianne Melleby - Source of Fun" // Copyright string for the footer of the website and RSS feed.
};
