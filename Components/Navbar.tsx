import { 
  Box, 
  Heading,
} from "@chakra-ui/react";
import Menu from "./Menu";
import Navlinks from "./Navlinks";



const Navbar = () => {
 
  return ( 
    <Box px={{base: '1rem', sm: '1.5rem', md: '2rem', lg: '5rem'}} py={{base: '.5rem', md:'1rem'}} borderBottom={'1px solid red'}>
 
      <Heading fontSize={'25px'} m={0}>Jeremy_Smith</Heading>

      <Menu />

      <Navlinks />
      
    </Box>
   );
}
 
export default Navbar;