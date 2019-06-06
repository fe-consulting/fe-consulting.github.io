const config = require('./config/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		siteUrl: config.siteUrl + pathPrefix,
		title: config.siteTitle,
		description: config.siteDescription,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-react-helmet-canonical-urls`,
			options: {
				siteUrl: `https://frontend.consulting`,
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'post',
				path: `${__dirname}/blog`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank',
							rel: 'nofollow noopener noreferrer',
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-autolink-headers',
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js',
			},
		},
		'gatsby-plugin-catch-links',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-lodash',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleAlt,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'standalone',
				icon: 'src/favicon.png',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-netlify',
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				// this base query will be merged with any queries in each feed
				query: `
        {
          site {
            siteMetadata {
              title
              description,
              siteUrl,
              site_url: siteUrl
            }
          }
        }
      `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) =>
							allMarkdownRemark.edges.map(edge =>
								Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url:
										site.siteMetadata.siteUrl +
										edge.node.fields.slug,
									guid:
										site.siteMetadata.siteUrl +
										edge.node.fields.slug,
									custom_elements: [
										{
											'content:encoded': edge.node.html,
										},
									],
								})
							),
						query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
						output: '/rss.xml',
						title: 'Frontend Consulting Blog RSS Feed',
					},
				],
			},
		},
	],
};
