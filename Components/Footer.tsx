import { 
  Box, 
  Text, 
  Tooltip, 
  Divider } from "@chakra-ui/react";
import { BsFillFileArrowUpFill } from 'react-icons/bs'
import ContactIcons from "./ContactIcons";
import Image from "next/image";

const Footer = () => {
  return ( 
    <Box padding={{base:'2rem 1rem', md:'6rem 4rem 4rem', lg:'6rem 6rem 4rem'}} background={'rgb(6,31,43)'} maxWidth={'1500px'} margin={'auto'}>
      <Box position={'fixed'} bottom={7} right={{base: 3, md:'2rem', lg:'3rem'}} border={'1px solid black'}>
        <Tooltip label="Return to top" aria-label='A tooltip'>
          <a href="#hero">
            <BsFillFileArrowUpFill style={{color:'white', backgroundColor:'black', fontSize: '30px'}}/>
          </a>
        </Tooltip>
      </Box>

      <Box margin={'auto'} justifyContent={'center'} display={{base:'flex', lg:'none'}} alignItems='center' justifyItems={'center'} mb={5} >
        <Image
          src='/heroBackground.png'
          width={300}
          height={300}
          alt='contact image'
        />
      </Box>

      <ContactIcons justifyContent='center' />

      <Divider color={'black'} height={'2px'} w={'90%'} m={'auto'} pb={'4'}/>

      <Text fontSize={{base:'14px', lg: '20px'}} color={'white'} textAlign={'center'} pt={'4'} >
        All rights reserved. <br />
        Copyright © {new Date().getFullYear()}
      </Text>
    </Box>
   );
}
 
export default Footer;