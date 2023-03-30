import { BsGithub, BsLinkedin, BsMailbox, BsPhone, BsWhatsapp } from 'react-icons/bs';
import { Button, Box, Tooltip } from '@chakra-ui/react';

const ContactIcon = (props:any) => {
  return ( 
    <Box>
      <Tooltip label={props.tooltip} aria-label='A tooltip'>
        <Button variant={'ghost'}>
          <a href={props.link}>{props.icon}</a>
        </Button>
      </Tooltip>
    </Box>
   );
}
 
const ContactIcons = (props:any) => {
  return ( 
    <Box display={'flex'} flexDir={'row'} justifyContent={props.justifyContent} mt={props.mt}>
      <ContactIcon 
        tooltip='G-mail'
        link="mailto:st.jeremy1@gmail.com"
        icon={<BsMailbox />}
      />
      <ContactIcon 
        tooltip='Whatsapp'
        link="http://wa.me/2349053292009"
        icon={<BsWhatsapp />}
      />
      <ContactIcon 
        tooltip='LinkedIn'
        link='"https://linkedin.com/in/stjeremy1"'
        icon={<BsLinkedin />}
      />
      <ContactIcon 
        tooltip='Phone- +234 905 329 2009'
        link="tel:+2349053292009"
        icon={<BsPhone />}
      />
      <ContactIcon 
        tooltip='GitHub'
        link="https://github.com/st-jeremy"
        icon={<BsGithub />}
      />
    </Box>
   );
}
 
export default ContactIcons;