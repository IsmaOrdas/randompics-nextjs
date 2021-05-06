import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm'
import styles from '../../styles/SearchImages.module.scss';

export default function SearchImages() {
    const [page, setPage] = useState(1);
    const limit = 9;
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

    function fetchImages(data) {
        console.log('fetchImages', data);
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));

    }

    return (
        <div className={styles["search-images"]}>
            <h2 className={styles["search-images__title"]}>Random Images</h2>
            <SearchForm parentCallback={fetchImages}/>
        </div>
    )
}