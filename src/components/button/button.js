import styles from "./button.module.css"

const Button = (props) => {
    return (
        <button type="submit"
                styles={styles.button}
                onClick={props.onClick}
                title={props.title}
                disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button