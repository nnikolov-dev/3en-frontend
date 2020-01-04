const path = require('path')

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions
	const productTemplate = path.resolve('./src/templates/product.jsx')
	return graphql(`
	query strapiQuery {
		allStrapiProduct {
		  edges {
			node {
			  enable
			  id
			  description
			  name
			  product_category {
				icon {
				  name
				  publicURL
				}
				name
			  }
			  slug
			  media {
				localFile {
				  publicURL
				  name
				}
			  }
			}
		  }
		}
		strapiCompanyDetails {
		  phone
		  name
		  email
		  address
		  about
		  logo {
			publicURL
			sourceInstanceName
			absolutePath
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
		const companyDetails = result.data.strapiCompanyDetails
		products.forEach(({node: product}) => {
			createPage({
				path: `/product/${product.slug}/`,
				component: productTemplate,
				context: {
					product,
					companyDetails,
				},
			})
			console.log(`created /product/${product.slug}/`)
		})
	})
}
