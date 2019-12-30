import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/styles/style.scss'

import Header from '../components/Header'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import Product from '../components/Product'
import Footer from '../components/Footer'

import facebookIcon from '../assets/images/facebook.svg'
import linkedInIcon from '../assets/images/linkedin.svg'
import bottleIcon from '../assets/images/bottle.svg'
import butterIcon from '../assets/images/butter.svg'
import yoghurtIcon from '../assets/images/yoghurt.svg'
import mapImage from '../assets/images/map.png'

const navLinks = [
	{
		name: 'Home',
		address: '#!',
		active: true,
	},
	{
		name: 'Link 1',
		address: '#!',
	},
	{
		name: 'Link 2',
		address: '#!',
	},
	{
		name: 'Link 3',
		address: '#!',
	},
]

const socialLinks = [
	{
		name: 'Facebook',
		address: 'https://facebook.com',
		image: facebookIcon,
	},
	{
		name: 'LinkIn',
		address: 'https://linkedin.com',
		image: linkedInIcon,
	},
]

const products = [
	{
		name: 'Product 1',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		image: facebookIcon,
	},
	{
		name: 'Product 1',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		image: facebookIcon,
	},
	{
		name: 'Product 1',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		image: facebookIcon,
	},
]

const Home = () => (
	<>
		<div className="content">
			<Navbar links={navLinks} social={socialLinks} />
			<Header />
			<section className="icons">
				<Icon name="Bottle" image={yoghurtIcon} />
				<Icon name="Bottle" image={bottleIcon} />
				<Icon name="Bottle" image={butterIcon} />
			</section>
			<section className="products">
				<Layout>
					{products.map(({name, description, image}) => <Product name={name} description={description} image={image} />)}
				</Layout>
			</section>
		</div>
		<div className="footer">
			<Footer>
				<ul>
					<li><h2>Company Name</h2></li>
					<li>Address Line One</li>
					<li>Address Line Two</li>
					<li>Address Line Three</li>
					<li>+49888888888</li>
				</ul>
				<img src={mapImage} alt="map" />
			</Footer>
		</div>
	</>
)

export default Home
