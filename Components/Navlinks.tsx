import { Box, Button } from '@chakra-ui/react'

const NavlinksBtn = (props: any) => {
  return ( 
    <Box>
      <Button 
        variant={'ghost'} 
        border={'none'} 
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

const Navlinks = (props:any) => {
  return ( 
    <Box display={props.display} flexDir={props.flexDirection}>
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