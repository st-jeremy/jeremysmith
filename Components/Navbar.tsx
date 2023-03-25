import { 
  Box, 
  Heading, 
  Text 
} from "@chakra-ui/react";
import Menu from "./Menu";

const Navlinks = () => {
  return ( 
    <>
     <a href="#about"> About </a>
      <br />

      <a href="#solutions"> Solutions </a>
      <br />

      <a href="#howItWorks"> How it works </a>
      <br />

      <a href="#roadmap"> Roadmap </a>
      <br />
    </>
   );
}

const Navbar = () => {
 
  return ( 
    <Box display='flex' flex-direction='row' padding={{ base:'1rem', lg:'5rem'}} gap={{base:'2px', md:'20px'}} maxWidth='1440px' position={'fixed'} zIndex={'1000'} width={'100%'} color={'white'}>
      
      <Box _hover={{bgColor: 'red', textDecor: 'underline'}}>
        {/* <Heading>Jeremy_Smith</Heading> */}
      </Box>

      <Menu />

     
    </Box>
   );
}
 
export default Navbar;