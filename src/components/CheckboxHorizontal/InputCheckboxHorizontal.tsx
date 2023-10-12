import styles from "./InputCheckboxHorizontal.module.scss"
import {cc} from "../../utils/Classnames"
import React, {useCallback} from "react"

interface InputCheckboxHorizontalProps {
    field?: any
    value?: string
    title?: string
    id?: string
    disabled?: boolean
}

function InputCheckboxHorizontal(props: InputCheckboxHorizontalProps) {
    const {field, value, title, id, disabled} = props

    const active = useCallback(() => {
        if (!field) return false
        return field.value
    }, [field])

    return (
        <div
            className={cc([styles.InputCheckBoxHorizontal])}
            {...(id && {id: id})}
            style={{opacity: disabled ? 0.45 : 1}}
        >
            <div className={styles.Switch}>
                <div className={styles.Input}>
                    <input
                        {...(field && {...field})}
                        type="checkbox"
                        id={value}
                        {...(active() ? {checked: true} : {checked: false})}
                        disabled={disabled ? disabled : false}
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
            <label htmlFor={value}/>
        </div>
    )
}

export default InputCheckboxHorizontal
