import styles from "./StatisticsItem.module.scss"

interface StatisticsItemProps {
	children: any
}

function StatisticsItem(props: StatisticsItemProps) {
	const {
		children,
	} = props

	return (
		<div
			className={styles.StatisticsItem}
		>
			{children}
		</div>
	)
}

export default StatisticsItem
