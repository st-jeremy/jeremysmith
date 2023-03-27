import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return ( 
    <Box px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '5rem'}} py={'1rem'} height={'92vh'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={'1rem'} id={'hero'}>
      <Heading fontSize={{base:'50px', lg: '64px'}}>
        JEREMY <br /> SMITH 
      </Heading>

      <Heading fontSize={{base:'20px', lg:'30px'}}>
        FRONT-END DEVELOPER
      </Heading>

      <Text fontSize={{lg: '24px'}}>
        ...a mission for turning designs, with an encompassing user-centric approach to deliver a great experience.
      </Text>
    </Box>
   );
}
 
export default Hero;