import styles from '../../styles/SearchForm.module.scss';
import Image from 'next/image'

export default function SearchForm() {
    return (
        <form className={styles["search-form"]}>
            <div className={styles["search-form__input-wrap"]}>
                <input
                    name="search-input"
                    aria-label="Search input"
                    aria-required="true"
                    id="search-input"
                    className={styles["search-form__input"]}
                    type="text"
                    placeholder="Search by author"
                    tabIndex="0"/>
                <button className={styles["search-form__btn"]} aria-label="Click to search" title="Search">
                    <Image
                        src="/search-icon.svg"
                        alt="search icon"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </form>
    )
}