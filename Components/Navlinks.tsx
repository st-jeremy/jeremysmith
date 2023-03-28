import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';


const NavlinksBtn = (props: any) => {

  return ( 
    <Box>
      <Button 
        variant={'ghost'} 
        border={'none'} 
        height={'fit-content'}
        _hover={{color: 'teal', textDecor:'underline' }} 
        _visited={{color: 'red', bgColor: 'green'}}
        transitionProperty={"box-shadow"}
        transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
        transitionDuration={'150ms'}
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
    <Box display={props.display}>
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