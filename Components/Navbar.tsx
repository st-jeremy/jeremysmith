import { 
  Box, 
  Button,
  Heading, 
  Text 
} from "@chakra-ui/react";
import Menu from "./Menu";



const Navbar = () => {
 
  return ( 
    <Box px={'1rem'} py={'.5rem'} borderBottom={'1px solid red'}>
      
      <Box _hover={{color: 'red', textDecor: 'underline'}}>
        <h3>Jeremy_Smith</h3>
      </Box>

      <Menu />

      
    </Box>
   );
}
 
export default Navbar;