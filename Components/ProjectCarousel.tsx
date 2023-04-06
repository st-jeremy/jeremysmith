import { 
  Box,
  Heading
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from './ProjectCard';

const ProjectCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 2
    },
    miniTablet:{
      breakpoint: { max: 767, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 425 },
      items: 1
    },
    miniMobile: {
      breakpoint: { max: 424, min: 0 },
      items: 1
    }
  };

  return ( 
    <Box m={'auto'} maxWidth={'1400px'} bgColor={'green.200'} display={'flex'} justifyItems={'center'} alignItems={'center'}>
      {/* <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlaySpeed={1000}
        // ssr={true}
        // renderDotsOutside={true}
        keyBoardControl={true}
        customTransition="all 1.5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
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
      </Carousel> */}
      dgjjdjfuycujdudcucjc
    </Box>
   );
}



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