import { Box, Button } from '@chakra-ui/react'
import { FcHome, FcCalendar, FcWorkflow } from 'react-icons/fc'
import { VscProject, VscFileCode } from 'react-icons/vsc'
import { MdContacts } from 'react-icons/md'



const NavlinksBtn = (props: any) => {

  return ( 
    <Box>
      <Button 
        variant={'ghost'} 
        border={'none'} 
        height={'fit-content'}
        leftIcon={props.icon} 
        _hover={{color: 'white', border: '1px solid red', scale: 5 }} 
        // _visited={{color: 'red', bgColor: 'green'}}
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
        name='Home'
        link='#hero'
        icon={<FcHome />} 
      />

      <NavlinksBtn 
        name='Tech'
        link='#tech'
        icon={<VscFileCode/>}
      />

      <NavlinksBtn 
        name='Projects'
        link='#projects'
        icon={<VscProject/>}
      />

      <NavlinksBtn 
        name='Experience'
        link='#experience'
        icon={<FcWorkflow />}
      />

      <NavlinksBtn 
        name='Contact'
        link='#contact'
        icon={<MdContacts />}
      />

    </Box>
   );
}
 
export default Navlinks;