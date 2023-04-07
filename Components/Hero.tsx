import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '@/styles/Home.module.css';
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";


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
      <Box px={{base: '1.25rem', sm: '1.7rem', md: '3rem', lg: '6rem'}} pt={{base:'5rem', md:'7rem'}} height={{base:'100vh', lg:'fit-content'}} position={'sticky'} display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} textAlign={{base:'center', lg: 'left'}} gap={'1rem'} maxWidth={'1500px'} id={'hero'}>

        <Box textAlign={{base:'center', md: 'left'}} width={{base: '100%', lg: '60%'}} >
          <Heading fontFamily={'fantasy'} fontSize={{base:'24px', md: '40px', lg:'30px'}} pb={5}>Hello, I am</Heading>

          <Heading fontFamily={'fantasy'} fontSize={{base:'57px', md: '79px', lg: '64px'}} color={'blue.900'} textShadow={'-3px -3px blue'} pb={5}>JEREMY SMITH</Heading>
          
          <Heading fontFamily={'fantasy'} fontSize={{base:'20px', md: '40px', lg: '40px'}} pb={5}>a Front-End Developer</Heading>

          <Text fontSize={{base:'16px', md:'24px', lg: '24px'}} mb={'3rem'} textShadow={'outline'}>
            ...with a mission of turning designs into great experiences, through user-centric approach.
          </Text>

          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button rightIcon={<MdArrowForward />} color={'blue.900'} fontSize={'22px'} border={'1px solid black'} _hover={{ color:'white', bgColor:'rgb(26,54,93)' }}>
              <a href="#contact" style={{paddingTop:'.3rem'}}>
                Contact me
              </a>
            </Button>
          </motion.button>
        </Box>

        <Box display={{base:'none', lg:'flex'}} width={{ lg: '40%'}}>
          <Image 
            src='/heroImage.png'
            height={300}
            width={500}
            alt='hero image'
          />
        </Box>
        
      </Box>

      <Box position={'absolute'} left={0} top={{base:'29rem'}}>
        <Text className={styles.scrollDown} fontSize={'10.5px'}  textShadow={'-1.5px -1px blue'} fontWeight={900} padding={1}>SCROLL DOWN</Text>
      </Box>
    </motion.div>
  );
}

export default Hero;