import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
const Contact = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={'3rem'} textAlign={'center'} minHeight={'100vh'} id={'contact'}>

      <Heading>Contact</Heading>
      <Text>
        Available for select opportunities <br />

        Have an exciting project you need help with or collaboration on?
        <br />
      </Text>

      <Text>Contact me via </Text>
      
      <nav>
        <Link href={'http://wa.me/2349053292009'}>Whatsapp</Link>
        <a href="mailto:hello@tamal.dev">hello@tamal.dev</a> <br />
        <a href="http://wa.me/2349053292009">WhatsApp Messenger</a> <br />
        <a href="http://">LinkedIn</a> <br />
        <a href="http://">Github</a> <br />
        <a href="tel:+2349053292009">+234 905 329 2009</a>
      </nav>
    </Box>
   );
}
 
export default Contact;