import styles from '../../styles/Button.module.scss'

export default function Button(props) {
    return (
        <button className={`${styles.btn} ${styles["btn--" + props.type]} ${props.size ? styles["btn--" + props.size] : ''}`} onClick={props.onClick}>{props.children}</button>
    )
}