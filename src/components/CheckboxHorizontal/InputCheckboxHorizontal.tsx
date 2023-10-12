import styles from "./InputCheckboxHorizontal.module.scss"
import React from "react"
import {cc} from "../../utils/Classnames"

interface InputCheckboxHorizontalProps {
    field?: any
    value?: string
    title?: string | any
    id?: string
    variant?: "signin"
    className?: string
}

function InputCheckboxHorizontal(props: InputCheckboxHorizontalProps) {
    const {field, value, title, id, className} = props

    return (
        <div
            className={cc([
                styles.InputCheckBox,
                className && className
            ])}
            {...(id && {id: id})}
        >
            <input
                className = {styles["custom-checkbox"]}
                {...(field && {...field})}
                type="checkbox"
                id={value}
            />
            <label htmlFor={value}>
                {!!title && (
                    <span>{title}</span>
                )}
            </label>
        </div>
    )
}

export default InputCheckboxHorizontal
