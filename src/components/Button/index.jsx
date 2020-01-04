import React from 'react'
import styles from './button.module.scss'

const Button = ({children, href}) => (
	<a href={href || '#!'} className={styles.Button}>
		{children}
	</a>
)

export default Button
