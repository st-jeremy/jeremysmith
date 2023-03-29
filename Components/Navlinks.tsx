import { Box, Button } from '@chakra-ui/react'
import { FcHome, FcCalendar, FcWorkflow } from 'react-icons/fc'
import { VscProject, VscFileCode } from 'react-icons/vsc'
import { MdContacts } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'



const NavlinksBtn = (props: any) => {
  
  return ( 
    <Box width={{md:'fit-content'}}>
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button 
        variant={'ghost'} 
        border={'none'} 
        width={{base: '10rem', md:'fit-content'}}
        height={'fit-content'}
        leftIcon={props.icon} 
        p={'1.5'}
        justifyContent='left'
        _hover={{color:'black', bgColor:'white'}}
        _visited={{color: 'grey', }}
      >
        <a href={props.link}>
          {props.name}
        </a>
      </Button>
    </motion.button>
    </Box>
   );
}

const Navlinks = (props:any) => {
  return ( 
    <Box display={props.display} flexDir={props.flexDir} gap={{base:'.5rem', md: 2, lg: 5}}>
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