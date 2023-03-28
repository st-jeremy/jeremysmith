import { Box, Heading, Text, Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Hero = () => {
  return ( 
    <Box px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} pt={'12rem'} height={{base:'93vh', lg:'95vh'}} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={'1rem'} id={'hero'}>
      
      <Heading fontSize={{base:'50px', lg: '64px'}}>
        JEREMY <br /> SMITH 
      </Heading>
      {/* <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}> */}

      <Heading fontSize={{base:'20px', lg:'30px'}}>
        FRONT-END DEVELOPER
      </Heading>
      {/* </motion.div> */}

      <Text fontSize={{lg: '24px'}}>
        ...a mission for turning designs, with an encompassing user-centric approach to deliver a great experience.
      </Text>
      <Progress colorScheme='white' value={10} />
    </Box>
   );
}
 
export default Hero;