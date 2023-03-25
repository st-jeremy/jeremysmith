import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return ( 
    <Box bgColor={'grey'} px={'1rem'} py={'2rem'} minH={'100vh'} gap={'1rem'}>
      <Heading>
        Educational Background
      </Heading>
      <Text>
        In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design. I’ve been freelancing since July 2020, and since 2021 I’ve been a judge at Awwwards.
        Currently I’m a parttime lecturer at the Associate Degree Frontend Development and Design at the University of Applied Sciences Amsterdam.
      </Text>

      <Heading>
        Custom websites built for you or your organisation
      </Heading>
      <Text>
        Every organisation is different, so every website should be too. I create custom websites with variable blocks and easy-to-use content management systems. I optimise websites for all screen sizes and all modern browsers.
        If you’re interested in working with me, don’t hesitate to contact me.
      </Text>
    </Box>
   );
}
 
export default About;