import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Divider,
  Button
} from '@chakra-ui/react'
import React from 'react';
import { BsMenuApp } from 'react-icons/bs'
import Navlinks from "./Navlinks";
import styles from '@/styles/Home.module.css'

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

        <DrawerContent bgColor={'blackAlpha.900'} color={'white'}>
          <DrawerCloseButton onClick={onClose} border={'none'} />
          <DrawerHeader pl={'2rem'}>
            Dev_
          </DrawerHeader>

          <DrawerBody color={'white'}>
            <Navlinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
   );
}
 
export default Menu;