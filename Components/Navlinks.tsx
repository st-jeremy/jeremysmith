import { Box } from '@chakra-ui/react'
import { FcHome, FcWorkflow } from 'react-icons/fc'
import { VscProject, VscFileCode } from 'react-icons/vsc'
import { MdContacts } from 'react-icons/md'
import { BiDownload } from 'react-icons/bi'
import CustomBtn from './buttons/CustomBtn'
import styles from '../styles/Home.module.css'

const Navlinks = ({ display, flexDir }:any) => {

  return ( 
    <Box display={display} flexDir={flexDir} gap={{base:'.5rem', md: 2, lg: '.15rem', xl:2}}>
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
        icon={<BiDownload />}
        bgColor='rgb(26,54,93)'
        color='white'
        download='Jeremy_Smith-Resume'
      />

    </Box>
   );
}
 
export default Navlinks;