import React, {useState} from 'react'
import styles from './carousel.module.scss'

const Carousel = ({images}) => {
	const [current, setCurrent] = useState(0)
	const handleClick = (arg) => () => setCurrent(arg >= 0 && arg < images.length ? arg : current)
	const leftStyle = {visibility: current !== 0 ? 'visible' : 'hidden'}
	const rightStyle = {visibility: current < images.length - 1 ? 'visible' : 'hidden'}
	return (
		<div className={styles.Carousel}>
			<div className={styles.ImageHolder}>
				{images.map(({address, alt}, index) => (
					<div className={`${styles.Image} ${index === current ? styles.Visible : styles.Invisible}`}>
						<img src={address} alt={alt} />
					</div>
				))}
				<div className={styles.Left} onClick={handleClick(current - 1)} style={leftStyle} />
				<div className={styles.Right} onClick={handleClick(current + 1)} style={rightStyle} />
			</div>
			<div className={styles.Controls}>
				{images.map((_, index) => (
					<div className={`${styles.Bar} ${index === current ? styles.Filled : null}`} onClick={handleClick(index)} />
				))}
			</div>
		</div>
	)
}

export default Carousel
