import { 
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '@/styles/Home.module.css';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';


const ProjectCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2 
    },
    tablet:{
      breakpoint: { max: 1024, min: 715 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 714, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  return ( 
    <Box m={'auto'} maxWidth={'1400px'} display={'flex'} justifyItems={'center'} alignItems={'center'}>
      <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        ssr={true}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className={styles.carousel}
        partialVisible={false}
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
      </Carousel>
     
    </Box>
   );
}


const Projects = () => {
  return ( 
    <Box py={{base:'4rem', sm:'5rem', md:'5rem' }}  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}}  height={'fit-content'} textAlign={'center'} maxW={'1500px'} id={'projects'} margin={'auto'} background={'linear-gradient( to bottom, white 5%, rgb(55,156,215) 90%)'}>

      <SectionHeading 
        name='Projects'
        position='left'
      />
      <SectionSubHeading 
        name='Some projects worked on'
        position='left'
      />

      <ProjectCarousel />
    </Box>
   );
}
 
export default Projects;