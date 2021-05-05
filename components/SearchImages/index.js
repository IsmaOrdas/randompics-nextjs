import SearchForm from '../SearchForm'
import styles from '../../styles/SearchImages.module.scss';

export default function SearchImages() {
    return (
        <div className={styles["search-images"]}>
            <h2 className={styles["search-images__title"]}>Random Images</h2>
            <SearchForm/>
        </div>
    )
}