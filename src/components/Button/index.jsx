import React from 'react'
import styles from './button.module.scss'

const Button = ({children}) => (
	<div className={styles.Button}>
		{children}
	</div>
)

export default Button
