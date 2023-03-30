import { 
  Box, 
  Text, 
  Tooltip, 
  Divider } from "@chakra-ui/react";
import { BsFillFileArrowUpFill } from 'react-icons/bs'
import ContactIcons from "./ContactIcons";

const Footer = () => {
  return ( 
    <Box padding={{base:'2rem 1rem', md:'10rem 4rem 4rem', lg:'10rem 6rem 4rem'}}>
      <Box position={'fixed'} bottom={5} right={4} border={'1px solid black'}>
        <Tooltip label="Return to top" aria-label='A tooltip'>
          <a href="#hero">
            <BsFillFileArrowUpFill style={{color:'white', backgroundColor:'black'}}/>
          </a>
        </Tooltip>
      </Box>

      <ContactIcons 
        justifyContent='center'
      />

      <Divider color={'grey'} w={'90%'} m={'auto'} />

      <Text fontSize={'14px'} textAlign={'center'} >
        Copyright © {new Date().getFullYear()}- jeremysmith.dev
      </Text>
    </Box>
   );
}
 
export default Footer;