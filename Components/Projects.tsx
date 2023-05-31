import { Box } from '@chakra-ui/react';
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
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 
    },
    tablet:{
      breakpoint: { max: 1024, min: 715 },
      items: 2,
      slidesToSlide: 1 
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
        renderButtonGroupOutside={true}
      >
        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'fashion e-commerce website'
          category='e-commerce'
          badge1='Next.Js'
          badge2='TypeScript'
          badge3='Redux'
          badge4='Chakra UI'
          badge5='CSS'
          repoLink='https://github.com/st-jeremy/fashion-haven'
          link='https://fashionhaven.vercel.app'
        />

        <ProjectCard 
          src='/sonergy.png'
          alt='sonergy image'
          heading='Sonergy'
          description= 'data research landing page'
          category='landing page'
          badge1='Next.Js'
          badge2='TypeScript'
          badge3='Chakra UI'
          badge4='CSS'
          repoLink='https://github.com/st-jeremy/Sonergy'
          link='https://sonergy.vercel.app'
        />

        <ProjectCard 
          src='/dataVault.png'
          alt='data*** image'
          heading='Data***'
          description= 'data analysis & research blog'
          category='blog website'
          badge1='NextJS'
          badge2='TypeScript'
          badge3='React Query'
          badge4='Tailwind CSS'
          badge5='SCSS'
          repoLink='/'
          link='/'
          disable
        />

        <ProjectCard 
          src='/flyplux.png'
          alt='Fly plux'
          heading='Flyplux'
          description='airline landing page'
          category='landing page'
          badge1='React'
          badge2='Chakra UI'
          badge3='CSS'
          badge4='&nbsp;'
          badge5='&nbsp;'
          repoLink='https://github.com/st-jeremy/flyplux'
          link='https://flyplux.vercel.app'
        />

        <ProjectCard 
          src='/decx.png'
          alt='decx image'
          heading='Decx'
          description= 'agric. enquiries website'
          category='e-commerce'
          badge1='React'
          badge2='Chakra UI'
          badge3='CSS'
          badge4='&nbsp;'
          badge5='&nbsp;'
          repoLink='https://github.com/st-jeremy/decx'
          link='https://decx.vercel.app'
        />
      </Carousel>
    </Box>
   );
}


const Projects = () => {
  return ( 
    <Box py={{base:'4rem', sm:'5rem', md:'5rem' }}  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}}  height={'fit-content'} textAlign={'center'} maxW={'1500px'} id={'projects'} margin={'auto'} background={'linear-gradient( to bottom, rgb(247,252,255) 0%, rgb(55,156,215) 100%)'}>

      <SectionHeading 
        name='Projects'
        position='right'
      />
      <SectionSubHeading 
        name='Some of the projects worked on.'
        position='right'
      />

      <ProjectCarousel />
    </Box>
   );
}
 
export default Projects;