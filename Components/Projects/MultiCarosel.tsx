import { 
  Box,
  Heading, 
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from './ProjectCard';

const MultiCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
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
      items: 1
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
    <Box m={'auto'} mt={5} maxWidth={'1400px'} bgColor={'green.200'}  p={{md: '5', lg: '0'}}>

      <Box width={{base: '100vw', md: '95vw', lg: '1400px'}} mt={5}>
        <Carousel 
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlaySpeed={1000}
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
        </Carousel>
      </Box>
    </Box>
   );
}
 
export default MultiCarousel;
