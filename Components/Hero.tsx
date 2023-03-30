import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '@/styles/Home.module.css'
import { MdContacts, MdArrowForward } from "react-icons/md";


const Hero = () => {
  return ( 
    <motion.div 
      whileTap={{ scale: 0.8 }} 
      drag 
      dragConstraints={{ left: 0, right: 300 }} 
      dragSnapToOrigin={true} 
      dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }} 
      dragPropagation
    >
      <Box px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} pt={'7rem'} height={{base:'fit-content', lg:'fit-content'}} position={'sticky'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} textAlign={{base:'center', md: 'left'}} gap={'1rem'} width={{base: '100%', md: '60%'}} id={'hero'}>

        <Box textAlign={{base:'center', md: 'left'}}>
          <Heading fontFamily={'fantasy'} fontSize={{base:'24px', lg: '64px'}}>Hello, I am</Heading>

          <Heading fontFamily={'fantasy'} fontSize={{base:'50px', lg: '64px'}} color={'blue.900'} textShadow={'2px solid white'}>JEREMY SMITH </Heading>
          
          <Heading fontFamily={'fantasy'} fontSize={{base:'20px', lg: '54px'}}>a Front-End Developer</Heading>

          <Text fontSize={{base:'16px', lg: '24px'}} mb={'1rem'}>
            ...with a mission of turning designs delivering great experience, through user-centric approach.
          </Text>

          <Button rightIcon={<MdArrowForward />} color={'blue.900'}>
            <a href="#contact">
              Contact me
            </a>
          </Button>
        </Box>
      </Box>

      {/* <Box position={'absolute'} left={0} top={'12rem'}>
        <Text className={styles.scrollDown} bgColor={'beige'}>Scroll down</Text>
      </Box> */}
    </motion.div>
  );
}

export default Hero;