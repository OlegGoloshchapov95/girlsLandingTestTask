import styles from "./SignUpBlock.module.scss"
import {cc} from "../../utils/Classnames"
import InputText from "../Input/InputText";
import GreenButton from "../GreenButton/GreenButton";

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
			<h2 className={styles.signUpTitle}>sign up</h2>
			<form className = {styles.formBlock}>
				<div className = {styles.inputItemBlock}>
					<InputText
						type="text"
						fullWidth="full"
						placeholder={"user name or email"}
					/>
				</div>
				<div className = {styles.inputItemBlock}>
					<InputText
						type="password"
						fullWidth="full"
						placeholder={"password"}
					/>
				</div>
				<GreenButton>Create profile</GreenButton>
			</form>
		</div>
	)
}

export default SignUpBlock
