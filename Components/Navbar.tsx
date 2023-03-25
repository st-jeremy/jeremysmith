import { 
  Box, 
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

      <Box display={'none'}>
        <a href="#about">About</a>
        <br />

        <a href="#expertise">Technology</a>
        <br />

        <a href="#projects">Projects</a>
        <br />

        <a href="#experience">Experience</a>
        <br />

        <a href="#contact">Contact</a>
        <br />
      </Box>
    </Box>
   );
}
 
export default Navbar;