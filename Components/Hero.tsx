import { Box, Heading, Text, Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '@/styles/Home.module.css'

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
    <Box id={'hero'}>
    <motion.svg
      width='300'
      height="400"
      viewBox="0 10 600 600"
      initial="hidden"
      animate="visible"
    >
      
      <motion.circle className={styles.circle}
        cx="200"
        cy="300"
        r="120"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />
       <motion.rect className={styles.circle}
        width="90"
        height="170"
        x="410"
        y="430"
        rx="20"
        stroke="#ff0055"
        variants={draw}
        custom={2}
      />
       </motion.svg>

      <Box mt={'-8rem'} px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} pt={'.1rem'} height={{base:'fit-content', lg:'95vh'}} position={'sticky'}  top={'12rem'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={'1rem'} >

        <motion.div whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.8 }} drag dragConstraints={{ left: 0, right: 300 }} dragSnapToOrigin={true} 
  dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }} dragPropagation>

        <Heading fontSize={{base:'50px', lg: '64px'}}>
          JEREMY <br /> SMITH 
        </Heading>
      

        <Heading fontSize={{base:'18px', lg:'30px'}}>
          FRONT-END DEVELOPER
        </Heading>

        <Text fontSize={{lg: '24px'}} p={{base:'1rem'}}>
          ...a mission for turning designs, with an encompassing user-centric approach to deliver a great experience.
        </Text>
        </motion.div>
      </Box>
      </Box>
   );
}
 
export default Hero;