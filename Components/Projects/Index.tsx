import { 
  Box,
  Heading
} from '@chakra-ui/react'
import ProjectCarousel from './ProjectCarousel';

 

const Projects = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={{base:'3rem', md:'5rem', lg: '7rem'}} minH={'100vh'} textAlign={'center'} bgColor={'blue.100'} id={'projects'}>

      <Heading fontFamily={'fantasy'}>Projects</Heading>

      <ProjectCarousel />

      {/* <Heading fontFamily={'fantasy'} p={'4rem'}>Still cooking in the pot...</Heading>
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

      </Box> */}

    </Box>
   );
}
 
export default Projects;