const path = require('path')

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions
	const productTemplate = path.resolve('./src/templates/product.jsx')
	return graphql(`
	query strapiQuery {
		sitePlugin(name: {eq: "gatsby-source-strapi"}) {
		  pluginOptions {
			apiURL
		  }
		}
		allStrapiProduct {
		  edges {
			node {
			  media {
				url
				name
			  }
			  enable
			  id
			  description
			  name
			  product_category {
				icon {
				  name
				  url
				}
				name
			  }
			  slug
			  brand {
				name
				country
				website
			  }
			}
		  }
		}
		strapiCompanyDetails {
		  phone
		  name
		  email
		  address
		  logo {
			publicURL
		  }
		}
		allStrapiSocialMedia {
		  nodes {
			name
			address
			icon {
			  publicURL
			}
		  }
		}
	  }	  
`).then((result) => {
		if (result.errors) {
			throw result.errors
		}
		const products = result.data.allStrapiProduct.edges
		const {apiURL} = result.data.sitePlugin.pluginOptions
		const companyDetails = result.data.strapiCompanyDetails
		products.forEach(({node: product}) => {
			createPage({
				path: `/product/${product.slug}/`,
				component: productTemplate,
				context: {
					product,
					apiURL,
					companyDetails,
				},
			})
			console.log(`created /product/${product.slug}/`)
		})
	})
}
