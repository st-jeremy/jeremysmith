import { Box, Button } from '@chakra-ui/react'
import { CSSProperties } from 'react';

const NavlinksBtn = (props: any) => {
  return ( 
    <Box display={{base: 'none', md: 'flex'}} gap={'40px'}>

      <Button 
        variant={'unstyled'} 
        border={'none'} 
        // color={'w'}
        // bgColor={'transparent'} 
        _hover={{color: 'teal', textDecor:'underline' }} 
        _visited={{color: 'red', bgColor: 'green'}}
      >
        <a href={props.link}>
          {props.name}
        </a>
      </Button>
    </Box>
   );
}

const Navlinks = () => {
  return ( 
    <Box gap={'40px'}>

      <NavlinksBtn 
        name='About'
        link='#about'
      />

      <NavlinksBtn 
        name='Tech'
        link='#tech'
      />

      <NavlinksBtn 
        name='Projects'
        link='#projects'
      />

      <NavlinksBtn 
        name='Experience'
        link='#experience'
      />

      <NavlinksBtn 
        name='Contact'
        link='#contact'
      />

    </Box>
   );
}
 
export default Navlinks;