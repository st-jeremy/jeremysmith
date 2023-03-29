import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react';
import { BsMenuApp } from 'react-icons/bs'
import Navlinks from "./Navlinks";
import styles from '@/styles/Home.module.css'
import { motion } from "framer-motion"

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  
  return ( 
    
    <Box display={{md: 'none'}}>
      <Box position={'absolute'} right={{base:'1.25rem', sm: '1.5rem', md: '2rem', lg: '5rem'}} top={{base: '1rem', sm:'1.2rem'}} className={styles.btn}>
        <BsMenuApp onClick={onOpen}/>
      </Box>
    
    <motion.nav variants={variants} animate={isOpen ? "open" : "closed"}>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay/>
        
        <DrawerContent bgColor={'blackAlpha.900'} color={'white'}>
          <DrawerCloseButton onClick={onClose} border={'none'} />
          <DrawerHeader pl={'2rem'}>
            Dev_ 
          </DrawerHeader>

          <DrawerBody color={'white'} alignItems={'left'}  onClick={onClose}>
            <Navlinks 
              display='flex'
              flexDir='column'
              
            />
            <Text fontSize={'16px'} position={'absolute'} bottom={5}>
              © 2023 <br />
              Made with passion by Jeremy Smith. <br />
              All right reserved.
            </Text>
          </DrawerBody>
         
        </DrawerContent>

      </Drawer>
    </motion.nav>
    </Box>
   );
}
 
export default Menu;