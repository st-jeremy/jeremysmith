import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '@/styles/Home.module.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";


const Hero = () => {

  return ( 
    <motion.div>
      <Box px={{base: '1.25rem', sm: '1.7rem', md: '3rem', lg: '6rem'}} pt={{base:'7rem', md:'7rem', lg:'10rem'}} height={{base:'90vh', sm:'fit-content',  '2xl':'fit-content'}} position={'sticky'} display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} textAlign={{base:'center', lg: 'left'}} gap={'1rem'} maxWidth={'1500px'} background={'linear-gradient( to bottom, white 0%, rgb(184,227,253) 100%)'} margin={'auto'}  id={'hero'}>
        <Box textAlign={{base:'center', lg: 'left'}} width={{base: '100%', lg: '60%'}} >
         
          <Text fontSize={{base:'24px', md: '40px', lg:'30px'}} pb={5}>
            Hello, I am
          </Text>

          <Heading fontSize={{base:'68px', md: '80px', xl: '90px'}} color={'blue.900'} fontWeight={900} pb={5}>
            JEREMY SMITH
          </Heading>
          
          <Text fontSize={{base:'20px', md: '40px', lg: '40px'}} pb={5}>
            a Front-End Engineer
          </Text>

          <Text fontSize={{base:'16px', md:'22px', lg: '18px', xl:'24px'}} textShadow={'outline'} maxW={530} m={'auto'} mb={'2rem'} >
            ...with a mission of turning designs into great experiences, through user-centric approach.
          </Text>

          <PrimaryBtn name='Contact me' href='#contact' bgColor='rgb(26,54,93)' color="white" rightIcon={<HiOutlineArrowNarrowRight />} />
        </Box>

        <Box display={{base:'none', lg:'flex'}} width={{ lg: '40%'}} transform={'rotateY(180deg)'} p={'2rem'}>
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

      <Box position={'absolute'} left={{base: 0, sm: 1.5, md:'2', lg: '5'}} top={{base:'70vh'}} display={{'2xl':'none'}}>
        <Text className={styles.scrollDown} fontSize={{base:'10.5px', lg: '14px'}} fontWeight={900} padding={1}>
          SCROLL&nbsp; DOWN
        </Text>
      </Box>
    </motion.div>
  );
}

export default Hero;