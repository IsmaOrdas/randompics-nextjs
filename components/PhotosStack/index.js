import styles from '../../styles/PhotosStack.module.scss';
import Image from 'next/image'

export default function PhotosStack(props) {
    return (
        <div className={styles["photos-stack--wrap"]}>
            <div className={styles["photos-stack"]}>
                <div className={styles["photos-stack--main"]}>
                    <div className={styles["photos-stack--img"]}>
                        <Image
                            src="/perrete.svg"
                            alt="Picture of the author"
                            width={190}
                            height={190}
                        />
                    </div>
                </div>
            </div>
            <div className={styles["photos-stack"]}></div>
            <div className={styles["photos-stack"]}></div>
        </div>
    )
}