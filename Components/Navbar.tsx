import { 
  Box, 
  Heading,
} from "@chakra-ui/react";
import Menu from "./Menu";
import Navlinks from "./Navlinks";



const Navbar = () => {
 
  return (
    <Box position={'fixed'} width={{base: '100%'}}  zIndex={'1000'} px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={{base: '.6rem', sm: '1rem', md:'1rem', lg:'1.6rem'}} borderBottom={'1px solid red'} bgColor={'black'} display={'flex'} maxWidth={'1500px'} >
 
      <Heading fontSize={'25px'} width={'fit-content'} m={0}>Jeremy_Smith</Heading>

      <Menu />

      <Box display={{base: 'none', md:'flex'}} position={{base: 'absolute'}} right={{md: '2.8rem', lg: '5rem'}} >
        <Navlinks 
          display='flex'
        />
      </Box>
    </Box>
   );
}
 
export default Navbar;