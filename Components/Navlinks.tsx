import { Box } from '@chakra-ui/react'
import { FcHome, FcWorkflow } from 'react-icons/fc'
import { VscProject, VscFileCode } from 'react-icons/vsc'
import { MdContacts } from 'react-icons/md'
import CustomBtn from './CustomBtn'



const Navlinks = (props:any) => {
  return ( 
    <Box display={props.display} flexDir={props.flexDir} gap={{base:'.5rem', md: 2, lg: 5}}>
      <CustomBtn 
        name='Home'
        link='#hero'
        icon={<FcHome />} 
      />

      <CustomBtn 
        name='Tech'
        link='#tech'
        icon={<VscFileCode/>}
      />

      <CustomBtn 
        name='Projects'
        link='#projects'
        icon={<VscProject/>}
      />

      <CustomBtn 
        name='Experience'
        link='#experience'
        icon={<FcWorkflow />}
      />

      <CustomBtn 
        name='Contact'
        link='#contact'
        icon={<MdContacts />}
      />

      <CustomBtn 
        name='Download Resume'
        link='/Jeremy_Smith-Resume.pdf'
        icon={<MdContacts />}
        bgColor='rgb(125,179,213)'
        color='white'
        download='Jeremy_Smith-Resume'
      />

    </Box>
   );
}
 
export default Navlinks;