import { 
  Box, 
  Heading,
} from "@chakra-ui/react";
import Menu from "./Menu";
import Navlinks from "./Navlinks";


const Navbar = () => {
 
  return (
    <Box position={'fixed'} width={{base: '100%'}}  zIndex={'1000'} px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={{base: '.65rem', sm: '1rem', md:'1rem', lg:'1.6rem'}} borderBottom={'2.5px solid rgb(26,54,93)'} bgColor={'white'} display={'flex'} maxWidth={'1500px'} >
 
      <Heading fontFamily={'fantasy'} fontSize={'25px'} width={'fit-content'} m={0} pt={'.2rem'}>Jeremy_Smith</Heading>

      <Menu />

      <Box display={{base: 'none', lg:'flex'}} position={{base: 'absolute'}} right={{md: '2.8rem', lg: '5rem'}} >
        <Navlinks 
          display='flex'
          flexDir='row'
        />
      </Box>
    </Box>
   );
}
 
export default Navbar;