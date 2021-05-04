import styles from '../../styles/Button.module.scss'

export default function Button(props) {
    return (
        <button className={`${styles.btn} ${styles["btn--" + props.type]}`} onClick={props.onClick}>{props.children}</button>
    )
}