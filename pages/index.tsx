import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import Contact from '@/Components/Contact'
import Experience from '@/Components/Experience'
import Projects from '@/Components/Projects'
import Tech from '@/Components/Tech'
import Footer from '@/Components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremy Smith</title>
        <meta name="description" content="Jeremy Smith Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/heroImage.png" />
      </Head>

      <main className={styles.main}>
      
        <Navbar />

        <Hero />

        <Tech />

        {/* <Projects /> */}

        <Experience />

        <Contact />

        <Footer />
      </main>
    </>
  )
}
