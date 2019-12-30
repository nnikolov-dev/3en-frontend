import React from 'react'
import styles from './layout.module.scss'

const Layout = ({children}) => (
	<div className={styles.Layout}>
		{children}
	</div>
)

export default Layout
