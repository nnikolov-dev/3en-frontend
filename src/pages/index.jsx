import React from 'react'
import {graphql} from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Product from '../components/Product'
import Footer from '../components/Footer'

import '../assets/styles/style.scss'
import 'animate.css/animate.min.css'

const Home = (
	{data:
		{
			strapiCompanyDetails: {phone, name: companyName, email, address, about, logo: {publicURL: logo}},
			// allStrapiSocialMedia: {nodes: socialMedia},
			allStrapiProduct: {edges: products},
			sitePlugin: {pluginOptions: {apiURL}},
		}},
) => (
	<>
		<div className="main-content">
			<Header><img src={`.${logo}`} alt={companyName} /></Header>
			{/* <section className="icons">
				<ScrollAnimation animateIn="fadeInLeft" animateOnce><Icon name="Bottle" image={yoghurtIcon} /></ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" animateOnce><Icon name="Bottle" image={bottleIcon} /></ScrollAnimation>
				<ScrollAnimation animateIn="fadeInRight" animateOnce><Icon name="Bottle" image={butterIcon} /></ScrollAnimation>
      </section> */}
			<section className="about">
				<Layout>
					<h1>{about}</h1>
				</Layout>
			</section>
			<section className="products">
				<Layout>
					{products.map(({node: product}) => (
						<Product
							slug={product.slug}
							name={product.name}
							description={product.description}
							image={`${apiURL}${product.media[0].url}`}
						/>
					))}
				</Layout>
			</section>
		</div>
		<div className="footer">
			<Footer>
				<img src={`.${logo}`} alt={companyName} />
				<ul>
					<li><h2>{companyName}</h2></li>
					{address.split(', ').map((addressLine) => <li>{addressLine}</li>)}
					<li>{phone}</li>
					<li>{email}</li>
				</ul>
			</Footer>
		</div>
	</>
)
export default Home
export const localQuery = graphql`
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
      }
    }
  }
  strapiCompanyDetails {
    phone
    name
    email
    about
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
`
