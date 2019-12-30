import React from 'react'
import Layout from '../Layout'
import styles from './footer.module.scss'


const Footer = ({children}) => (
	<div className={styles.Footer}>
		<Layout>
			<div className={styles.Inner}>
				{children}
			</div>
		</Layout>
	</div>
)

export default Footer
