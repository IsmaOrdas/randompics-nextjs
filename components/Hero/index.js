import styles from '../../styles/Hero.module.scss';
import Button from '../Button';

export default function Hero(props) {
    return (
        <div className={styles.hero}>
            <div className={styles["hero__wrap"]}>
                <div className={styles["hero--left"]}>
                    <h2 className={styles["hero__title"]}>Are you bored?</h2>
                    <p>RandomPics helps you to spend hours of your day scrolling down and sharing a big list of random images. </p>
                    <Button type="primary">Start here</Button>
                </div>
                <div className={styles["hero--right"]}>{props.right}</div>
            </div>
        </div>
    )
}