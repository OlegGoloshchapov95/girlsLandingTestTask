import styles from "./SignUpBlock.module.scss"
import {cc} from "../../utils/Classnames"
import InputText from "../Input/InputText";
import GreenButton from "../GreenButton/GreenButton";
import InputCheckboxHorizontal from "../CheckboxHorizontal/InputCheckboxHorizontal";
import {Controller, useForm} from "react-hook-form";

interface SignUpBlockProps {
    className?: any
}

type FormData = {
    email: string
    password: string
    checkbox: boolean
}

function SignUpBlock(props: SignUpBlockProps) {
    const {
        className
    } = props

    const {handleSubmit, control} = useForm<FormData>({
        mode: "onChange",
    })

    const onFormSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
    }

    return (
        <div
            className={cc(
                styles.signUpBlock,
                className && className,
            )}

        >
            <h2 className={styles.signUpTitle}>sign up</h2>
            <form className={styles.formBlock} onSubmit={handleSubmit(onFormSubmit)}>
                <div className={styles.inputItemBlock}>
                    <Controller
                        render={({field, fieldState}) => {
                            return (
                                <InputText
                                    field = {field}
                                    type="text"
                                    fullWidth="full"
                                    placeholder={"email"}
                                />
                            )
                        }}
                        name="email"
                        control={control}
                        defaultValue={""}
                    />
                </div>
                <div className={styles.inputItemBlock}>
                    <Controller
                        render={({field, fieldState}) => {
                            return (
                                <InputText
                                    field = {field}
                                    type="password"
                                    fullWidth="full"
                                    placeholder={"password"}
                                />
                            )
                        }}
                        name="password"
                        control={control}
                        defaultValue={""}
                    />
                </div>
                <div className={styles.inputItemBlock}>
                    <Controller
                        render={({field, fieldState}) => {
                            return (
                                <InputCheckboxHorizontal field = {field} value="new-checkbox-for-form">I agree to the <a href="#">Terms and Conditions</a> and I confirm that I am eighteen (18) years of age or older</InputCheckboxHorizontal>
                            )
                        }}
                        name="checkbox"
                        defaultValue = {false}
                        control={control}
                    />
                </div>
                <div className = {styles.submitBtn}>
                    <GreenButton>Create profile</GreenButton>
                </div>
                <p className = {styles.bottomText}>This site is protected by reCAPTCHA and the Google<br/> <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply</p>
            </form>
        </div>
    )
}

export default SignUpBlock
