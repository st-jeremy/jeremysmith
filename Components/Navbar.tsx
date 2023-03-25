import { Box } from "@chakra-ui/react";


const Navbar = () => {
 
  return ( 
    <Box display='flex' flex-direction='row' justify-content='space-between' padding={{ base:'10px', lg:'20px 5rem'}} gap={{base:'2px', md:'20px'}} maxWidth='1440px' background= 'rgb(14,18,32)' position={'fixed'} zIndex={'1000'} width={'100%'} margin={'auto'} color={'white'}>

      <a href="#about"> About </a>
      <br />

      <a href="#solutions"> Solutions </a>
      <br />

      <a href="#howItWorks"> How it works </a>
      <br />

      <a href="#roadmap"> Roadmap </a>
      <br />

    </Box>
   );
}
 
export default Navbar;