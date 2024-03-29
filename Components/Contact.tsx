import { Box, Text } from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsMailbox, BsPhone, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import PrimaryBtn from './PrimaryBtn';
import Header from './Header';

const Contact = () => {
  return ( 
    <Box px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} pt={'5rem'}  textAlign={'center'} background={'linear-gradient( to bottom, RGB(28 87 121) 0%, rgb(6,31,43) 90%)'} margin={'auto'} maxW={'1500px'} id={'contact'}>

      <Header name='Contact' position='center' color='white' />
      
      <Box display={{base:'flex', md: 'grid'}} gridTemplateColumns={{md:'auto auto', lg: 'auto auto auto'}} flexDir={{ base:'column'}} gap={'15px'} justifyContent={{base:'left', md:'center'}} width={{base:'13.5rem', md: '100%'}} margin={'auto'} alignItems={'center'}>
        
        <PrimaryBtn 
          href='mailto:st.jeremy1@gmail.com'
          leftIcon={<BsMailbox />}
          name='st.jeremy1@gmail.com'
          bgColor='white'
          width='18rem'
        />
        <PrimaryBtn 
          href='https://linkedin.com/in/stjeremy1'
          leftIcon={<BsLinkedin />}
          name='LinkedIn'
          bgColor='white'
          width='18rem'
        />
        <PrimaryBtn 
          href='https://github.com/st-jeremy'
          leftIcon={<BsGithub />}
          name='Github'
          bgColor='white'
          width='18rem'
        />
        <PrimaryBtn 
          href='https://twitter.com/St_Jeremy1'
          leftIcon={<BsTwitter />}
          name='Twitter'
          bgColor='white'
          width='18rem'
        />
        <PrimaryBtn 
          href='http://wa.me/2349053292009'
          leftIcon={<BsWhatsapp />}
          name='WhatsApp Messenger'
          bgColor='white'
          width='18rem'
        />
        <PrimaryBtn 
          href='tel:+2349053292009'
          leftIcon={<BsPhone />}
          name='+234 905 329 2009'
          bgColor='white'
          width='18rem'
        />
      </Box>

      <Text mt={'2rem'} fontSize={{lg:'30px'}} fontWeight={600} fontStyle={'italic'} color={'white'}>
        Let&apos;s work together.
         {/* on your next projects.  */}
      </Text>
    </Box>
   );
}
 
export default Contact;