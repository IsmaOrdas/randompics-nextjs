import React, { useState, useEffect } from 'react';
import styles from '../../styles/SearchForm.module.scss';
import Image from 'next/image'
import Button from '../Button';

export default function SearchForm(props) {
    const [filterSelected, setFilterSelected] = useState('color');
    const [query, setQuery] = useState('');

    function selectFilter(ev) {
        const filterClicked = ev.currentTarget.dataset.filter;

        if (filterClicked === filterSelected) {
            return false;
        }
        
        setFilterSelected(filterClicked);
    }

    function submitForm(ev) {
        ev.preventDefault();
        props.parentCallback(query);
    }

    return (
        <form className={styles["search-form"]} onSubmit={submitForm}>
            <div className={styles["search-form__input-wrap"]}>
                <input
                    name="search-input"
                    aria-label="Search input"
                    aria-required="true"
                    id="search-input"
                    className={styles["search-form__input"]}
                    type="text"
                    placeholder="Search by author"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
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
            <div className={styles["search-form__btns-wrap"]}>
                <button data-filter="color" className="btn btn--primary btn--small" onClick={selectFilter}>color</button>
                <button data-filter="grayscale" className="btn btn--small" onClick={selectFilter}>grayscale</button>
                <button data-filter="blur" className="btn btn--small" onClick={selectFilter}>blur</button>
            </div>
        </form>
    )
}