import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter, MuseoModerno } from 'next/font/google'

const inter = MuseoModerno({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <ChakraProvider>
      <main className={inter.className}>
      <Component {...pageProps} />
      </main>
    </ChakraProvider>
    
  )
}
