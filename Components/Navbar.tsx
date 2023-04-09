import { 
  Box, 
  Heading,
} from "@chakra-ui/react";
import Menu from "./Menu";
import Navlinks from "./Navlinks";
import Image from "next/image";

const Navbar = () => {
 
  return (
    <Box position={'fixed'} width={{base: '100%'}} zIndex={'1000'} px={{base: '1.5rem', sm: '1.7rem', md: '3rem', lg: '6rem'}} py={{base: '.65rem', sm: '.7rem', md:'1rem', xl:'1.5rem'}} borderBottom={'2.5px solid rgb(26,54,93)'} bgColor={'white'} display={'flex'} maxWidth={'1500px'} ml={{'2xl':'20%'}}>
 
      <Box display={'flex'} gap={'10px'}>
        <Image src='/heroImage.png' alt='logo' width={27} height={40} />
        <Heading  fontFamily={'Dyna Puff'} fontWeight={900} fontSize={{base:'25px'}} width={'fit-content'} m={0} pt={{base:'.2rem', lg:'-2rem', xl:'0.5rem'}}>Jeremy_Smith</Heading>
      </Box>

      <Menu />

      <Box display={{base: 'none', xl:'flex'}} position={{base: 'absolute'}} right={{md: '2.8rem', lg: '5rem'}} >
        <Navlinks 
          display='flex'
          flexDir='row'
        />
      </Box>
    </Box>
   );
}
 
export default Navbar;