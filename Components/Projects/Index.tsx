import { 
  Box,
  Heading
} from '@chakra-ui/react'
import ProjectCarousel from './ProjectCarousel';

 

const Projects = () => {
  return ( 
    <Box  
    px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}}
     py={{base:'3rem', md:'5rem', lg: '7rem'}}
      textAlign={'center'} bgColor={'blue.100'} id={'projects'}>

      <Heading fontFamily={'fantasy'}>Projects</Heading>

      <ProjectCarousel />
    </Box>
   );
}
 
export default Projects;