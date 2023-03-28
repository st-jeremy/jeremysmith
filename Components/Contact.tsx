import { Box, Heading, Text } from '@chakra-ui/react';
const Contact = () => {
  return ( 
    <Box px={'1rem'} py={'3rem'} minHeight={'100vh'}>

      <Heading>Contact</Heading>
      <Text>
        Available for select opportunities <br />

        Have an exciting project you need help with or collaboration on?
        <br />

        Contact me via 
        <a href="mailto:hello@tamal.dev">hello@tamal.dev</a> <br />
        <a href="http://wa.me/2349053292009">WhatsApp Messenger</a> <br />
        <a href="http://">LinkedIn</a> <br />
        <a href="http://">Github</a> <br />
        <a href="tel:+2349053292009">+234 905 329 2009</a>

      </Text>
    </Box>
   );
}
 
export default Contact;