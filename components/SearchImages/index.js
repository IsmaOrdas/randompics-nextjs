import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm'
import ListImages from '../ListImages'
import styles from '../../styles/SearchImages.module.scss';

export default function SearchImages() {
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [filter, setFilter] = useState("color");
    const limit = 9;
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

    function fetchImages() {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPhotos(data);
        }).catch(error => {
            console.error(error);
        });
    }

    function getFilter(filterSelected) {
        setFilter(filterSelected);
    }

    useEffect(() => {
        fetchImages();
    }, [page]);

    return (
        <div className={styles["search-images"]}>
            <h2 className={styles["search-images__title"]}>Random Images</h2>
            <SearchForm parentCallback={fetchImages} updateFilter={getFilter}/>
            <ListImages filter={filter} list={photos}/>
        </div>
    )
}