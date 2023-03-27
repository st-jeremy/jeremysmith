import { 
  Box, 
  Heading,
} from "@chakra-ui/react";
import Menu from "./Menu";
import Navlinks from "./Navlinks";



const Navbar = () => {
 
  return ( 
    <Box position={'fixed'} width={{base: '100%'}}  zIndex={'1000'} px={{base: '1.25rem', sm: '1.5rem', md: '2rem', lg: '5rem'}} py={{base: '.6rem', sm: '1rem', md:'1rem'}} borderBottom={'1px solid red'} bgColor={'black'} >
 
      <Heading fontSize={'25px'} width={'fit-content'} m={0}>Jeremy_Smith</Heading>

      <Menu />

      <Navlinks />
      
    </Box>
   );
}
 
export default Navbar;