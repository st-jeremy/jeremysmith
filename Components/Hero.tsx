import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return ( 
    <Box px={'1rem'} py={'1rem'} height={'92vh'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={'1rem'}>
      <Heading fontSize={'50px'}>
        JEREMY <br /> SMITH 
      </Heading>

      <Text>
        Front-End Developer
      </Text>

      <Text >
        ...a mission for good user-experience centric purpose, we are able to turn ideation to reality
      </Text>
    </Box>
   );
}
 
export default Hero;