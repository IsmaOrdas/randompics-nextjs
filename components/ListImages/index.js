import React, { useState, useEffect } from 'react';
import styles from '../../styles/ListImages.module.scss';
import Image from 'next/image'

export default function ListImages(props) {
    const photos = props.list;
    const imgWidth = "387";
    const imgHeight = "343";
    let photoUrl = "";
    let content = ""

    if (photos) {
        content = photos.map((photo, index) => {
            formatUrl(photo.download_url);
            return (
                <li className={styles["list-images__item"]} key={index}>
                    <div className={styles["list-images__img-wrap"]}>
                        <span className={styles["list-images__number"]}>#{photo.id}</span>
                        <Image
                            src={photoUrl}
                            alt={`Photo by ${photo.author}`}
                            width={imgWidth}
                            height={imgHeight}
                        />
                        <span className={styles["list-images__author"]}>{photo.author}</span>
                    </div>
                </li>
            )
        });
    } else {
        content = <span>No data available.</span>
    }

    function formatUrl(url) {
        let newUrl = url;
        newUrl = newUrl.split("/");
        newUrl.splice(-2,2)
        newUrl= newUrl.join("/") + `/${imgWidth}/${imgHeight}`;
        if (props.filter) {
            newUrl = `${newUrl}?${props.filter}`;
        }
        photoUrl = newUrl;
    }
    
    return (
        <section className="list-images__wrap">
            <ul className={styles["list-images"]}>{content}</ul>
        </section>
    )
}