import React from 'react'
import Layout from '../Layout'
import styles from './navbar.module.scss'

const Navbar = ({links, social}) => (
	<div className={styles.Navbar}>
		<Layout>
			<div className={styles.Inner}>
				<div className={styles.Links}>
					{links.map(({name, active}) => (
						<div className={`${styles.Link} ${active ? styles.Active : ''}`}>{name}</div>
					))}
				</div>
				<div className={styles.Social}>
					{social.map(({name, address, image}) => (
						<a href={address} className={styles.Icon}><img src={image} alt={name} /></a>
					))}
				</div>
			</div>
		</Layout>
	</div>
)

export default Navbar
