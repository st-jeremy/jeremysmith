import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsMailbox, BsPhone, BsWhatsapp } from 'react-icons/bs';
import ContactButton from './ContactButton';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';

const Contact = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={{base:'6.5rem', sm:'5rem', md:'5rem' }} textAlign={'center'} background={'linear-gradient( to bottom, white 10%, rgb(55,156,215) 50%, rgb(6,31,43) 90%)'} id={'contact'}>

      <SectionHeading
        name='Contact'
        position='left'
      />
      <SectionSubHeading
        name='Have an exciting project you need help with or collaboration on?'
        position='left'
      />
      <SectionSubHeading
        name='Contact me via...'
      />
      
      <Box display={{base:'flex', md: 'grid'}} gridTemplateColumns={{md:'auto auto', xl: 'auto auto auto'}} flexDir={{ base:'column'}} gap={'10px'} justifyContent={{base:'left', md:'center'}} width={{base:'13.5rem', md: '100%'}} margin={'auto'} alignItems={'center'}>
        
        <ContactButton 
          href='mailto:st.jeremy1@gmail.com'
          icon={<BsMailbox />}
          name='st.jeremy1@gmail.com'
        />
        <ContactButton 
          href='http://wa.me/2349053292009'
          icon={<BsWhatsapp />}
          name='WhatsApp Messenger'
        />
        <ContactButton 
          href='tel:+2349053292009'
          icon={<BsPhone />}
          name='+234 905 329 2009'
        />
        <ContactButton 
          href='https://linkedin.com/in/stjeremy1'
          icon={<BsLinkedin />}
          name='LinkedIn'
        />
        <ContactButton 
          href='https://github.com/st-jeremy'
          icon={<BsGithub />}
          name='Github'
        />
      </Box>

      <Text mt={'2rem'} fontSize={{lg:'30px'}} fontWeight={600} fontStyle={'italic'} color={'white'}>
        Let&apos;s work together on your next projects. 
      </Text>
    </Box>
   );
}
 
export default Contact;