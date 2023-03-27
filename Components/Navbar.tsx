import { 
  Box, 
  Button,
  Heading, 
  Text 
} from "@chakra-ui/react";
import Menu from "./Menu";
import Navlinks from "./Navlinks";



const Navbar = () => {
 
  return ( 
    <Box px={{base: '1rem', sm: '1.5rem'}} py={{base: '.5rem'}} borderBottom={'1px solid red'}>
      
      <Box _hover={{color: 'red', textDecor: 'underline'}}>
        <h3>Jeremy_Smith</h3>
      </Box>

      <Menu />

      <Navlinks />
      
    </Box>
   );
}
 
export default Navbar;