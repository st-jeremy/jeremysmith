import { Box } from "@chakra-ui/react";
import MultiCarousel from "../MultiCarosel";
import ProjectCard from "./ProjectCard";

const LiveProjects = () => {
  return ( 
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
   );
}
 
export default LiveProjects;