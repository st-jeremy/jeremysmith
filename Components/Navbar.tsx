import { 
  Box, 
  Heading,
} from "@chakra-ui/react";
import Menu from "./Menu";
import Navlinks from "./Navlinks";


const Navbar = () => {
 
  return (
    <Box position={'fixed'} width={{base: '100%'}} zIndex={'1000'} px={{base: '1.5rem', sm: '1.7rem', md: '3rem', lg: '6rem'}} py={{base: '.65rem', sm: '.7rem', md:'1rem', xl:'1.5rem'}} borderBottom={'2.5px solid rgb(26,54,93)'} bgColor={'white'} display={'flex'} maxWidth={'1500px'} ml={{'2xl':'20%'}} background={'conic-gradient( from 360deg, white, rgb(184,227,253))'}>
 
      <Heading fontFamily={'fantasy'} fontWeight={900} fontSize={{base:'25px', lg: '30px'}} width={'fit-content'} m={0} pt={{base:'.2rem', lg:'-2rem', xl:'1rem'}}>Jeremy_Smith</Heading>

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