import { 
  Card, 
  Badge,
  Box,
  Stack,
  Button,
  Text,
  ButtonGroup,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import styles from '@/styles/Home.module.css'
import MultiCarousel from '../MultiCarosel';
import ProjectCard from './ProjectCard';

 

const Projects = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={{base:'3rem', md:'5rem', lg: '7rem'}} minH={'100vh'} textAlign={'center'} id={'projects'}>
      <Heading pb={'1rem'}>Projects</Heading>

      <Box gap={'3rem'} display={{base:'flex', md: 'grid'}} flexDir={'column'} alignItems={'center'} gridTemplateColumns={{md:'auto auto', lg: 'auto auto auto'}}>
        <MultiCarousel
          content= {
            <>
            <ProjectCard 
              src='/fashion-haven.png'
              alt='fashion haven image'
              heading='Fashion haven'
              description= 'a fashion e-commerce website'
              category='e-commerce'
              badge1='Next.Js'
              badge2='TypeScript'
              badge3='Redux'
              badge4='Chakra UI'
              badge5='CSS'
              repoLink='https://github.com/fashion-haven'
              link='https://github.com/fashion-haven'
            />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'a fashion e-commerce website'
          category='e-commerce'
          badge1='Next.Js'
          badge2='TypeScript'
          badge3='Redux'
          badge4='Chakra UI'
          badge5='CSS'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='Fly plux'
          heading='Flyplux'
          description='an airline landing page'
          category='landing page'
          badge1='React'
          badge2='Chakra UI'
          badge3='CSS'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'an e-commerce website for fashion products.'
          category='e-commerce'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'an e-commerce website for fashion products.'
          category='e-commerce'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />
        </>
      }
    />
      </Box>

      <Heading fontFamily={'fantasy'} p={'4rem'}>Still cooking in the pot...</Heading>
      <Box display={'grid'} gridTemplateColumns={'auto auto auto'}>
        <ProjectCard 
          src='/decx.png'
          alt='decx image'
          heading='*****'
          description= ''
          category='blog'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/datavault.png'
          alt='datavault image'
          heading='*****'
          description= 'a blog website for data science and analysis products.'
          category='e-commerce'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/datavault.png'
          alt='datavault image'
          heading='*****'
          description= 'a blog website for data science and analysis products.'
          category='e-commerce'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/datavault.png'
          alt='datavault image'
          heading='*****'
          description= 'a blog website for data science and analysis products.'
          category='e-commerce'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

      </Box>

    </Box>
   );
}
 
export default Projects;