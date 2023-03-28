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
  
  return ( 
    
    <Box display={{md: 'none'}}>
      <Box position={'absolute'} right={{base:'1.25rem', sm: '1.5rem', md: '2rem', lg: '5rem'}} top={{base: '1rem', sm:'1.2rem'}} className={styles.btn}>
        <BsMenuApp onClick={onOpen}/>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay/>
        <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
        <DrawerContent bgColor={'blackAlpha.900'} color={'white'}>
          <DrawerCloseButton onClick={onClose} border={'none'} />
          <DrawerHeader pl={'2rem'}>
            Dev_ Jeremy Smith
          </DrawerHeader>

          <DrawerBody color={'white'}>
            <Navlinks />
            <Text fontSize={'16px'} position={'absolute'} bottom={5}>
              © 2023 <br />
              Made with passion by Jeremy Smith. <br />
              All right reserved.
            </Text>
          </DrawerBody>
         
        </DrawerContent>

    </motion.div>
      </Drawer>
    </Box>
   );
}
 
export default Menu;