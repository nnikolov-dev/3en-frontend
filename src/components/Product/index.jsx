import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Button from '../Button'
import styles from './product.module.scss'

const Product = ({slug, name, description, image}) => (
	<div className={styles.Product}>
		<div className={styles.ImageHolder}>
			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<div className={styles.Image}>
					<img src={image} alt={name} />
				</div>
				<div className={styles.Shadow} />
				<div className={styles.Shadow} />
			</ScrollAnimation>
		</div>
		<div className={styles.Description}>
			<ScrollAnimation animateIn="fadeIn" animateOnce><p>{description}</p></ScrollAnimation>
			<ScrollAnimation animateIn="fadeInUp" animateOnce><Button href={`/product/${slug}`}>More</Button></ScrollAnimation>
		</div>
	</div>
)

export default Product
