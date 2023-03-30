import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsMailbox, BsPhone, BsWhatsapp } from 'react-icons/bs';
import { MdLinkedCamera } from 'react-icons/md';

const Contact = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={'9rem'} textAlign={'center'} minHeight={'100vh'} id={'contact'}>

      <Heading fontFamily={'fantasy'}>Contact</Heading>
      <Text>
        Have an exciting project you need help with or collaboration on?
        <br />
        Let&apos;s work together on your next projects. 
      </Text>

      <Text>Contact me via </Text>
      
      <Box >
        <Button leftIcon={<BsMailbox />}>
          <a href="mailto:st.jeremy1@gmail.com">st.jeremy1@gmail.com</a>
        </Button>
        <Button leftIcon={<BsWhatsapp />}>
          <a href="http://wa.me/2349053292009">WhatsApp Messenger</a> 
        </Button>
        <Button leftIcon={<BsLinkedin />}>
          <a href="https://linkedin.com/in/stjeremy1">LinkedIn</a> 
        </Button>
        <Button leftIcon={<BsGithub />}>
          <a href="https://github.com/st-jeremy">Github</a>
        </Button>
        <Button leftIcon={<BsPhone />}>
          <a href="tel:+2349053292009">+234 905 329 2009</a>
        </Button>
        
      </Box>
    </Box>
   );
}
 
export default Contact;