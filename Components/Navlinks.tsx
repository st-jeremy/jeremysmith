import { Box, Button } from '@chakra-ui/react'

const Navlinks = () => {
  return ( 
    <Box display={{base: 'none', md: 'flex'}} gap={'40px'}>
      <Button variant={'unstyled'} border={'none'} bgColor={'transparent'} _visited={{color: 'red', bgColor: 'green'}}>
        <a href="#hero">About</a>
      </Button>
      
      <Button variant={'unstyled'} border={'none'} bgColor={'transparent'} _visited={{color: 'red', bgColor: 'green'}}>
        <a href="#tech">Technology</a>
      </Button>

      <Button variant={'unstyled'} border={'none'} bgColor={'transparent'} _visited={{color: 'red', bgColor: 'green'}}>
        <a href="#projects">Projects</a>
      </Button>
      

      <Button variant={'unstyled'} border={'none'} bgColor={'transparent'} _visited={{color: 'red', bgColor: 'green'}}>
        <a href="#experience">Experience</a>
      </Button>

      <Button variant={'unstyled'} border={'none'} bgColor={'transparent'} _visited={{color: 'red', bgColor: 'green'}}>
        <a href="#contact">Contact</a>
      </Button>
    </Box>
   );
}
 
export default Navlinks;