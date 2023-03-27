import { Box, Button } from '@chakra-ui/react'

const Navlinks = () => {
  return ( 
    <Box display={{sm: 'none', md: 'flex'}} gap={'40px'}>
      <Button variant={'unstyled'} border={'none'} bgColor={'transparent'} _visited={{color: 'red', bgColor: 'green'}}>
        <a href="#hero">About</a>
      </Button>
      

      <a href="#expertise">Technology</a>

      <a href="#projects">Projects</a>

      <a href="#experience">Experience</a>

      <a href="#contact">Contact</a>
    </Box>
   );
}
 
export default Navlinks;