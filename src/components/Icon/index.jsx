import React from 'react'
import styles from './icon.module.scss'

const Icon = ({name, image}) => (
	<div className={styles.Icon}>
		<img src={image} alt={name} />
	</div>
)

export default Icon
