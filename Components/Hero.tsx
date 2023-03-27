import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return ( 
    <Box px={'1rem'} py={'1rem'} height={'92vh'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={'1rem'} id={'hero'}>
      <Heading fontSize={'50px'}>
        JEREMY <br /> SMITH 
      </Heading>

      <Text>
        Front-End Developer
      </Text>

      <Text >
        ...a mission for turning designs into great user-experience with an encompassing user-centric approach
      </Text>
    </Box>
   );
}
 
export default Hero;