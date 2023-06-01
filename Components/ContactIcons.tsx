import { BsGithub, BsLinkedin, BsPhone, BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si'
import { Button, Box, Tooltip } from '@chakra-ui/react';
import { IContactIcon, IContactIcons } from './types';

const ContactIcon = ( props:IContactIcon ) => {
  const { href, tooltip, icon} = props;
  return ( 
    <a href={href} >
      <Tooltip label={tooltip} aria-label='A tooltip'>
        <Button variant={'ghost'} color={'white'} _hover={{color:'black', backgroundColor:'white'}} fontSize={{lg:'24px' ,xl:'30px'}}>
         {icon}
        </Button>
      </Tooltip>
    </a>
   );
}
 
const ContactIcons = (props:IContactIcons) => {
  const { ml, mt, justifyContent } = props;
  return ( 
    <Box display={'flex'} flexDir={'row'} ml={ml} justifyContent={justifyContent} mt={mt}>
      <ContactIcon 
        tooltip='G-mail'
        href="mailto:st.jeremy1@gmail.com"
        icon={<SiGmail />}
      />
      <ContactIcon 
        tooltip='Whatsapp'
        href="http://wa.me/2349053292009"
        icon={<BsWhatsapp />}
      />
      <ContactIcon 
        tooltip='Phone: +234 905 329 2009'
        href="tel:+2349053292009"
        icon={<BsPhone />}
      />
      <ContactIcon 
        tooltip='LinkedIn'
        href='"https://linkedin.com/in/stjeremy1"'
        icon={<BsLinkedin />}
      />
      <ContactIcon 
        tooltip='GitHub'
        href="https://github.com/st-jeremy"
        icon={<BsGithub />}
      />
    </Box>
   );
}
 
export default ContactIcons;