import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../components/Hero'
import PhotosStack from '../components/PhotosStack';
import SearchImages from '../components/SearchImages'

export default function Home() {
  return (
    <>
      <Hero right={<PhotosStack/>}></Hero>
      <div className={styles.container}>
        <SearchImages/>
      </div>
    </>
  )
}
