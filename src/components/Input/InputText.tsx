import styles from "./InputText.module.scss"
import {cc} from "../../utils/Classnames"
import {useEffect, useRef} from "react"

interface InputTextProps {
	field?: any
	placeholder?: string
	type?:
		| "text"
		| "number"
		| "password"
		| "email"
		| "copyLink"
		| "copyLinkWhite"
		| "searchIcon"
	id?: string
	disabled?: boolean
	maxLength?: number
	error?: string
	autoComplete?: boolean
	spellCheck?: boolean
	onClick?: any
	onChange?: any
	fullWidth?: "full"
	value?: string
	onFocus?: any
	onBlur?: any
}

function InputText(props: InputTextProps) {
	const {
		field,
		placeholder,
		type,
		id,
		disabled,
		maxLength,
		autoComplete,
		spellCheck,
		fullWidth,
		error,
		value,
		onFocus,
		onClick,
		onChange,
		onBlur,
	} = props

	const inputRef: any = useRef<HTMLInputElement>(null)

	useEffect(() => {
		field && (value || value === "") && field.onChange(value)
	}, [value, field])
	return (
		<div
			className={cc(
				styles.InputTextContainer,
				fullWidth && styles["FullWidth-" + fullWidth]
			)}
		>
			<div
				className={cc(
					styles["input-inner-wrapper"],
					error && styles["isError"]
				)}
			>
				<input
					{...(field && {...field})}
					ref={inputRef}
					{...(onBlur && {onBlur: onBlur})}
					className={cc(
						disabled && styles["disabled"],
						fullWidth && styles["FullWidth-" + fullWidth],
					)}
					{...(id && {id: id})}
					{...((value || value === "") && {value: value})}
					{...(type !== undefined ? {type: type} : {type: "text"})}
					{...(type === "number" && {
						inputMode: "decimal",
					})}
					{...(placeholder && {placeholder: placeholder})}
					autoComplete={autoComplete ? "on" : "off"}
					spellCheck={!!spellCheck}
					{...(maxLength && {maxLength: maxLength})}
					{...(onFocus && {onFocus: onFocus})}
					{...(onChange && {onChange: onChange})}
					{...(onClick && {onClick: onClick})}
				/>
			</div>
			{error && (
				<div className={styles.ErrorContainer}>
					<p className={styles.InputTextError}>{error}</p>
				</div>
			)}
		</div>
	)
}

export default InputText
