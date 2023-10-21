import styles from "./StatisticsItem.module.scss"

interface StatisticsItemProps {
	title: string
	middleText: string
	bottomText: string
}

function StatisticsItem(props: StatisticsItemProps) {
	const {
		title,
		middleText,
		bottomText
	} = props

	return (
		<div
			className={styles.StatisticsItem}
		>
			<div className={styles.title}>{title}</div>
			<div className={styles.middleText}>{middleText}</div>
			<div className={styles.bottomText}>{bottomText}</div>
		</div>
	)
}

export default StatisticsItem
