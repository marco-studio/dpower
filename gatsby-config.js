module.exports = {
  siteMetadata: {
    title: `Dynamic Power`,
    description: `Co-Hosts Jeremy and Molly dated in High School, joined the military and ultimately met again at their 10 year High School Reunion. We raised a blended family and dealt with the trials and tribulations that come with parenthood. We found fitness and it has made an extreme impact on our mentality. Join us on our Transformation Journey as we shed our old habits, way of thinking, and old perspective as we intend to expand and gain new perspective. Our goal is to have you, the listener, learn from our experiences to know you are not alone and there can be something greater out there if you want it and will do what's necessary to get it. Power comes from the heart, mind and body. Each one of these harness their own strength. Aligning the heart, mind and body as one singular force will create a higher level of POWER. BE POWERFUL`,
    author: `Jeremy & Molly Clark`,
    twitter: ``,
    instagram: `https://www.instagram.com/powerful_jeremy_clark/`,
    facebook: `https://www.facebook.com/groups/teamdynamicpower/?ref=bookmarks`,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1448789515?ct=podlink&mt=2`,
    stitcher: `https://www.stitcher.com/s?fid=479019`,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9keW5hbWljcG93ZXIubGlic3luLmNvbS9yc3M=`,
    pocket: `https://pca.st/itunes/1448789515`,
    spotify: `https://open.spotify.com/show/6fKDUsHGj26NTDuwKNDMZQ`,
    overcast: `https://overcast.fm/itunes1448789515`,
    castbox: `https://castbox.fm/vic/1448789515`,
    castro: `https://castro.fm/itunes/1448789515`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Fdynamicpower.libsyn.com%2Frss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://dynamicpower.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
