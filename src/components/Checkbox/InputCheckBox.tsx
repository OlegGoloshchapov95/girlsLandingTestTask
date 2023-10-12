import styles from "./InputCheckBox.module.scss"
import React from "react"
import {cc} from "../../utils/Classnames"

interface InputCheckBoxProps {
	field?: any
	value?: string
	title?: string | any
	id?: string
	variant?: "signin"
}

function InputCheckBox(props: InputCheckBoxProps) {
	const {field, value, title, id, variant} = props

	return (
		<div
			className={cc([
				styles.InputCheckBox,
				variant !== undefined && styles["Variant-" + variant],
			])}
			{...(id && {id: id})}
		>
			<div className={styles.Switch}>
				<div className={styles.Input}>
					<input
						{...(field && {...field})}
						type="checkbox"
						id={value}
					/>
				</div>

				{!!title && (
					<div className={styles.Text}>
						<div className={cc([styles.Title])}>
							<p>{title}</p>
						</div>
					</div>
				)}
			</div>
			<label htmlFor={value} />
		</div>
	)
}

export default InputCheckBox
