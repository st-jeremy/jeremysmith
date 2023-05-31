import { Box } from '@chakra-ui/react'
import { FcHome, FcWorkflow } from 'react-icons/fc'
import { VscProject, VscFileCode } from 'react-icons/vsc'
import { MdContacts } from 'react-icons/md'
import { BiDownload } from 'react-icons/bi';
import PrimaryBtn from './buttons/PrimaryBtn';
import { INavlink } from './types';


const Navlinks = ( { display, flexDir }: INavlink ) => {

  return ( 
    <Box display={display} flexDir={flexDir} gap={{base:'.5rem', md: 2, lg: '.15rem', xl:2}}>
      <PrimaryBtn 
        name='Home'
        link='#hero'
        leftIcon={<FcHome />} 
      />

      <PrimaryBtn 
        name='Tech'
        link='#tech'
        leftIcon={<VscFileCode/>}
      />

      <PrimaryBtn 
        name='Projects'
        link='#projects'
        leftIcon={<VscProject/>}
      />

      <PrimaryBtn 
        name='Experience'
        link='#experience'
        leftIcon={<FcWorkflow />}
      />

      <PrimaryBtn 
        name='Contact'
        link='#contact'
        leftIcon={<MdContacts />}
      />

      <PrimaryBtn 
        name='Download Resume'
        link='/Jeremy_Smith-Resume.pdf'
        leftIcon={<BiDownload />}
        bgColor='rgb(26,54,93)'
        color='white'
        download='Jeremy_Smith-Resume'
      />
    </Box>
   );
}
 
export default Navlinks;