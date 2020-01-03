import React from 'react'
import {navigate} from 'gatsby'
import styles from './button.module.scss'

const Button = ({children, href}) => {
	const handleClick = (e) => {
		e.preventDefault()
		navigate(href || '#!')
	}
	return (
		<div className={styles.Button} onClick={handleClick}>
			{children}
		</div>
	)
}

export default Button
