import Image from 'next/image'
import styles from '../../styles/ListImages.module.scss';

export default function ListImages(props) {
    const photos = props.list;
    const listItems = photos.map((photo) => {
    return <li className={styles["list-images__item"]} key={photo.id}>
        <div>
            <Image
                src={photo.download_url}
                alt="Picture of the author"
                width={387}
                height={343}
            />
        </div>
        </li>
    });
    console.log(photos)
    return (
        <div>
            <ul className={styles["list-images"]}>{listItems}</ul>
        </div>
    )
}