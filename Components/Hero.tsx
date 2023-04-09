import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '@/styles/Home.module.css';
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";


const Hero = () => {
  return ( 
    <motion.div>
      <Box px={{base: '1.25rem', sm: '1.7rem', md: '3rem', lg: '6rem'}} pt={{base:'7rem', md:'7rem', lg:'10rem'}} height={{base:'90vh', '2xl':'fit-content'}} position={'sticky'} display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} textAlign={{base:'center', lg: 'left'}} gap={'1rem'} maxWidth={'1500px'} background={'linear-gradient( to bottom, white 0%, rgb(184,227,253) 100%)'} margin={'auto'}  id={'hero'}>
        <Box textAlign={{base:'center', lg: 'left'}} width={{base: '100%', lg: '60%'}} >
         
          <Heading fontFamily={'Dyna Puff'} fontSize={{base:'24px', md: '40px', lg:'30px'}} pb={5}>Hello, I am</Heading>

          <Heading fontFamily={'Dyna Puff'} fontSize={{base:'68px', md: '80px', lg: '84px'}} color={'blue.900'} fontWeight={900} pb={5}>JEREMY SMITH</Heading>
          
          <Heading  fontFamily={'Dyna Puff'} fontSize={{base:'20px', md: '40px', lg: '40px'}} pb={5}>a Front-End Developer</Heading>

          <Text fontSize={{base:'16px', md:'24px', lg: '24px'}} mb={'2rem'} textShadow={'outline'}>
            ...with a mission of turning designs into great experiences, through user-centric approach.
          </Text>

          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button rightIcon={<MdArrowForward />} color={'white'} fontWeight={900} bgColor={'rgb(125,179,213)'} fontSize={'22px'} _hover={{ color:'white', bgColor:'rgb(26,54,93)' }}>
              <a href="#contact" style={{paddingTop:'.1rem'}}>
                Contact me
              </a>
            </Button>
          </motion.button>
        </Box>

        <Box display={{base:'none', lg:'flex'}} width={{ lg: '40%'}} transform={'rotateY(180deg)'}>
          <motion.div 
            whileTap={{ scale: 1.4 }} 
            drag 
            dragConstraints={{ left: 0, right: 300 }} 
            dragSnapToOrigin={true} 
            dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }} 
            dragPropagation
          >
            <Image 
              src='/heroImage.png'
              height={300}
              width={500}
              alt='hero image'
            />
          </motion.div>
        </Box>
      </Box>

      <Box position={'absolute'} left={{base: 0, xl: 5}} top={{base:'32rem', xl: '36rem'}}>
        <Text className={styles.scrollDown} fontSize={{base:'10.5px', lg: '14px'}} fontStyle={'italic'} fontWeight={900} padding={1}>SCROLL&nbsp; DOWN</Text>
      </Box>
    </motion.div>
  );
}

export default Hero;