import { Box, HStack } from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '@/styles/Home.module.css';
import ProjectCard from './ProjectCard';
import Header from './Header';


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
    <HStack maxWidth={'1400px'}>
      <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        // showDots={true}
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
          src='/farmily.png'
          alt='farmily image'
          heading='Farmily'
          description= 'Agric. e-commerce website'
          badges={[ 'Next.JS', 'TypeScript', 'Apollo Client', 'Tailwind']}
          repoLink='https://github.com/st-jeremy/decx'
          link='https://farmily.africa'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'E-commerce website'
          badges={[ 'Next.Js', 'TypeScript', 'Redux', 'Chakra UI' ]}
          repoLink='https://github.com/st-jeremy/fashion-haven'
          link='https://fashionhaven.vercel.app'
        />

        <ProjectCard 
          src='/sonergy.png'
          alt='sonergy image'
          heading='Sonergy'
          description= 'Data research landing page'
          badges={[ 'Next.Js', 'TypeScript', 'Chakra UI' ]}
          repoLink='https://github.com/st-jeremy/Sonergy'
          link='https://sonergy.vercel.app'
        />

        <ProjectCard 
          src='/datavaultpage.png'
          alt='dataVault image'
          heading='DataVault'
          description= 'Data analysis & research blog'
          badges={[ 'Next.Js', 'TypeScript', 'React-Query', 'Chakra UI', 'Tailwind', 'Jest', 'Axios' ]}
          repoLink='/'
          link='https://data-vault-neon.vercel.app'
          disable
        />

        <ProjectCard 
          src='/flyplux.png'
          alt='Fly plux'
          heading='Flyplux'
          description='Airline landing page'
          badges={[ 'React', 'Chakra UI', 'CSS' ]}
          repoLink='https://github.com/st-jeremy/flyplux'
          link='https://flyplux.vercel.app'
        />

        {/* <ProjectCard 
          src='/decx.png'
          alt='decx image'
          heading='Decx'
          description= 'Agric. enquiries website'
          badges={[ 'React', 'Chakra UI', 'CSS' ]}
          repoLink='https://github.com/st-jeremy/decx'
          link='https://decx.vercel.app'
        /> */}
      </Carousel>
    </HStack>
   );
}


const Projects = () => {
  return ( 
    <Box pt={'5rem'} px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} textAlign={'center'} maxW={'1500px'} id={'projects'} margin={'auto'} background={'linear-gradient( to bottom, rgb(91 181 229) 0%, rgb(55,156,215) 100%)'}>
      <Header name={'Some Projects...'} position={'left'} />
      <ProjectCarousel />
    </Box>
   );
}
 
export default Projects;