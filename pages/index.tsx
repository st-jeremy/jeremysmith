import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import Contact from '@/Components/Contact'
import Experience from '@/Components/Experience'
import Projects from '@/Components/Projects'
import Tech from '@/Components/Tech'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremy Smith- FrontEnd Dev.</title>
        <meta name="description" content="Jeremy Smith Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Hero />

        <Tech />

        <About />

        <Projects />

        <Experience />

        <Contact />

        <Footer />
      </main>
    </>
  )
}
