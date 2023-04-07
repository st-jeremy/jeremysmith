import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsMailbox, BsPhone, BsWhatsapp } from 'react-icons/bs';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';

const Contact = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={{base:'4rem', sm:'5rem', md:'5rem' }} textAlign={'center'} id={'contact'}>

      <SectionHeading
        name='Contact'
      />
      <SectionSubHeading
        name='Have an exciting project you need help with or collaboration on?'
      />
      <SectionSubHeading
        name='Contact me via'
      />
      
      <Box display={{base:'flex', md: 'grid'}} gridTemplateColumns={'auto auto auto'} flexDir={{ base:'column'}} gap={'10px'} justifyContent={{base:'left', md:'center'}} width={{base:'13.5rem', md: '100%'}} margin={'auto'} alignItems={'center'}>
        <Button leftIcon={<BsMailbox />}>
          <a href="mailto:st.jeremy1@gmail.com">st.jeremy1@gmail.com</a>
        </Button>
        <Button leftIcon={<BsWhatsapp />}>
          <a href="http://wa.me/2349053292009">WhatsApp Messenger</a> 
        </Button>
        <Button leftIcon={<BsPhone />}>
          <a href="tel:+2349053292009">+234 905 329 2009</a>
        </Button>
        <Button leftIcon={<BsLinkedin />}>
          <a href="https://linkedin.com/in/stjeremy1">LinkedIn</a> 
        </Button>
        <Button leftIcon={<BsGithub />}>
          <a href="https://github.com/st-jeremy">Github</a>
        </Button>
        
      </Box>

      <Text mt={'2rem'} fontWeight={800} fontStyle={'italic'}>
        Let&apos;s work together on your next projects. 
      </Text>
    </Box>
   );
}
 
export default Contact;