import { Box, Heading, Text, Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '@/styles/Home.module.css'
import CustomBtn from "./CustomBtn";
import { MdContacts, MdArrowForward } from "react-icons/md";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i:any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 3.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

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
      <Box px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '4rem'}} pt={'5rem'} height={{base:'fit-content', lg:'95vh'}} position={'sticky'}  top={'12rem'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={'1rem'}  width={{base: '100%', md: '60%'}}  id={'hero'}>

        <Heading fontSize={{base:'40px', lg: '64px'}} textAlign={'left'}>Hello, I am <br /></Heading>

        <Heading color={'red'} textShadow={'2px solid white'}>JEREMY SMITH </Heading>
        
        <Heading fontSize={{base:'40px', lg: '54px'}} textAlign={'left'}>a Front-End Developer</Heading>

        <Text fontSize={{lg: '24px'}} textAlign={'left'}>
          ...a mission for turning designs, with an encompassing user-centric approach to deliver a great experience.
        </Text>

        <br />
        <CustomBtn 
          name='Contact me'
          link='#contact'
          rightIcon={<MdArrowForward />}
          bgColor='red'
        />

      <Box position={'absolute'} left={1}>
        <Text textDecorationStyle={'revert'}>Scroll down</Text>
      </Box>
    </Box>

    </motion.div>
   );
}
 
export default Hero;