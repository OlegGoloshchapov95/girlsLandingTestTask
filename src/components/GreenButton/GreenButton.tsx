import styles from "./GreenButton.module.scss"
import {cc} from "../../utils/Classnames"
import {useNavigate} from "react-router-dom"
import {useCallback} from "react"

interface GreenButtonProps {
	children: any
	onClick?: (e: any) => void
	className?: any
	isSubmit?: boolean
	isNotFullWith?: boolean
	to?: string
}

function GreenButton(props: GreenButtonProps) {
	const {
		children,
		onClick,
		className,
		isSubmit,
		isNotFullWith,
		to,
	} = props

	const navigate = useNavigate()

	const gotoCallback = useCallback(() => {
		if (to) {
			navigate(to)
		}
	}, [navigate, to])

	const handleOnClick = (e: any) => {
		onClick && onClick(e)
		gotoCallback()
	}

	return (
		<button
			className={cc(
				styles.Button,
				className && className,
				isNotFullWith && styles["not-full-width"],
			)}
			onClick={handleOnClick}
			{...(isSubmit && {type: "submit"})}
		>
			{children}
		</button>
	)
}

export default GreenButton
