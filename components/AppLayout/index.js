import React, { useState, useEffect } from 'react';
import styles from '../../styles/AppLayout.module.scss';
import Header from '../Header'

export default function AppLayout({children}) {
    const [scrollTop, setScrollTop] = useState(0); 

    const handleScroll = () => {
        setTimeout(() => {
            setScrollTop(window.scrollY)
        }, 250);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <div className={styles.app}>
                <Header scrollTop={scrollTop}></Header>
                <main className={styles["app-content"]}>
                    {children}
                </main>
            </div>
        </>
    )
}