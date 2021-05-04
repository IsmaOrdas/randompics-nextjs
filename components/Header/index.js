import styles from '../../styles/Header.module.scss';

export default function Header(props) {
    return (
        <header className={`${styles["o-header"]} ${props.scrollTop ? styles["o-header--smaller"] : ''}`}>
            <h1 className={styles["o-header__title"]}>CoolPics</h1>
        </header>
    )
}