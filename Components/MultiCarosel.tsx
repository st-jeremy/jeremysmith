import { 
  Box,
  Heading, 
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = (props:any) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3
    },
    miniTablet:{
      breakpoint: { max: 767, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 425 },
      items: 2
    },
    miniMobile: {
      breakpoint: { max: 424, min: 0 },
      items: 1
    }
  };

  return ( 
    <Box m={'auto'} mt={5} maxWidth={'1400px'} bgColor={'black.200'}  p={{md: '5', lg: '0'}}>

      <Box  bgColor={'black'} display={'flex'} color={'white'} p={2}>
        <Heading  fontSize={'24pt'} color={'white'} >{props.heading}</Heading>
      </Box>

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
          {props.content}
        </Carousel>
      </Box>
    </Box>
   );
}
 
export default MultiCarousel;
