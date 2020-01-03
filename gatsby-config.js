const path = require('path')

module.exports = {
	siteMetadata: {
		title: '3EH',
		description: '3EH Website',
		author: '@nnikolov-dev',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, 'src', 'assets', 'images'),
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		// {
		// 	resolve: 'gatsby-plugin-manifest',
		// 	options: {
		// 		name: 'gatsby-starter-default',
		// 		short_name: 'starter',
		// 		start_url: '/',
		// 		background_color: '#663399',
		// 		theme_color: '#663399',
		// 		display: 'minimal-ui',
		// 		icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
		// 	},
		// },
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: 'http://localhost:1337',
				queryLimit: 1000,
				contentTypes: ['product', 'company-details', 'social-media'],
				loginData: {
					identifier: '',
					password: '',
				},
			},
		},
	],
}
