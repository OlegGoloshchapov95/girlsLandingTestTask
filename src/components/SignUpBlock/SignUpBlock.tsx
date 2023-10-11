import styles from "./SignUpBlock.module.scss"
import {cc} from "../../utils/Classnames"

interface SignUpBlockProps {
	className?: any
}

function SignUpBlock(props: SignUpBlockProps) {
	const {
		className
	} = props

	return (
		<div
			className={cc(
				styles.signUpBlock,
				className && className,
			)}

		>
			<h2>Sign up block</h2>
		</div>
	)
}

export default SignUpBlock
