import { Box } from '@chakra-ui/react'
import { FcHome, FcWorkflow } from 'react-icons/fc'
import { VscProject, VscFileCode } from 'react-icons/vsc'
import { MdContacts } from 'react-icons/md'
import { BiDownload } from 'react-icons/bi';
import PrimaryBtn from './PrimaryBtn';
import { INavlink } from './types';


const Navlinks = ( { display, flexDir }: INavlink ) => {

  return ( 
    <Box display={display} flexDir={flexDir} gap={{base:'.5rem', md: 2, lg: '.15rem', xl:5}}>
      <PrimaryBtn 
        name='Home'
        href='#hero'
        leftIcon={<FcHome />} 
      />

      <PrimaryBtn 
        name='Tech'
        href='#tech'
        leftIcon={<VscFileCode/>}
      />

      <PrimaryBtn 
        name='Projects'
        href='#projects'
        leftIcon={<VscProject/>}
      />

      <PrimaryBtn 
        name='Experience'
        href='#experience'
        leftIcon={<FcWorkflow />}
      />

      <PrimaryBtn 
        name='Contact'
        href='#contact'
        leftIcon={<MdContacts />}
      />

      <PrimaryBtn 
        name='Download Resume'
        href='/Resume-Jeremy_Smith.pdf'
        leftIcon={<BiDownload />}
        bgColor='blue.400'
        color='white'
        download='Resume-Jeremy_Smith'
      />
    </Box>
   );
}
 
export default Navlinks;