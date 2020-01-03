import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import Carousel from '../components/Carousel'

const Product = ({pageContext: {product, apiURL, companyDetails: {phone, name: companyName, email, address, logo: {publicURL: logo}}}}) => (
	<div className="main-content">
		<div className="product">
			<div className="container">
				<Layout>
					<h2>{product.name}</h2>
					<div className="content">
						<div className="inner">
							<div className="perks">
								<Icon
									name={product.product_category.name}
									image={`${apiURL}/${product.product_category.icon.url}`}
								/>
							</div>
							<div className="slideshow">
								<Carousel images={product.media.map(({name, url}) => ({address: `${apiURL}/${url}`, alt: name}))} />
							</div>
							<div className="description">
								{product.description}
							</div>
						</div>
					</div>
				</Layout>
			</div>
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
	</div>
)

export default Product
