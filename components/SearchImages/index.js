import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm'
import ListImages from '../ListImages'
import styles from '../../styles/SearchImages.module.scss';
import Button from '../Button';

export default function SearchImages() {
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [filter, setFilter] = useState("color");
    const [backup, setBackup] = useState([]);
    const limit = 9;
    let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

    function fetchImages() {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let photosList = photos;
            photosList = photosList.concat(data);
            setPhotos(photosList);
            setBackup([...photosList]);
        }).catch(error => {
            console.error(error);
        });
    }

    function loadMore() {
        let pageCount = page;
        setPage(pageCount += 1);
    }

    function getFilter(filterSelected) {
        setFilter(filterSelected);
    }

    function filterByAuthor(query) {
        if (!query) {
            setPhotos(backup);
            return false;
        }
        let list = photos;
        list = list.filter(photo => photo.author.toLowerCase().includes(query));
        setPhotos(list);
    }

    useEffect(() => {
        fetchImages();
    }, [page]);

    return (
        <div className={styles["search-images"]}>
            <h2 className={styles["search-images__title"]}>Random Images</h2>
            <SearchForm parentCallback={filterByAuthor} updateFilter={getFilter}/>
            <ListImages filter={filter} list={photos}/>
            <div className={styles["search-images__btn-wrap"]}>
                <Button type="border" size="big" onClick={loadMore}>Load more</Button>
            </div>
        </div>
    )
}