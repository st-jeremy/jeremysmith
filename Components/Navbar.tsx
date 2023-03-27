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

      <Box display={{base: 'none', md: 'flex'}} gap={'40px'}>
        <Button variant={'ghost'}>
          <a href="#about">About</a>
        </Button>
        

        <a href="#expertise">Technology</a>

        <a href="#projects">Projects</a>

        <a href="#experience">Experience</a>

        <a href="#contact">Contact</a>
      </Box>
    </Box>
   );
}
 
export default Navbar;