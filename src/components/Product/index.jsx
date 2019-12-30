import React from 'react'
import styles from './product.module.scss'
import Button from '../Button'

const Product = ({name, description, image}) => (
	<div className={styles.Product}>
		<div className={styles.ImageHolder}>
			<div className={styles.Image}>
				<img src={image} alt={name} />
			</div>
			<div className={styles.Shadow} />
			<div className={styles.Shadow} />
		</div>
		<div className={styles.Description}>
			<p>{description}</p>
			<Button>More</Button>
		</div>
	</div>
)

export default Product
