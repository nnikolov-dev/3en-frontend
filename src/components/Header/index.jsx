import React from 'react'
import styles from './header.module.scss'
import headerLine from '../../assets/images/header-line.svg'

const Header = () => (
	<div className={styles.Header}>
		<div className={styles.Inner} />
		<div className={styles.Lines}>
			<img src={headerLine} alt="Header" />
			<img src={headerLine} alt="Header" />
		</div>
	</div>
)

export default Header
