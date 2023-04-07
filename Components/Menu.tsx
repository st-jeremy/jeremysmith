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
import ContactIcons from './ContactIcons';

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return ( 
    <Box display={{xl: 'none'}}>
      <Box position={'absolute'} right={{base:'1.25rem', sm: '1.5rem', md: '2.8rem', lg: '5rem'}} top={{base: '1rem', sm:'1.2rem'}} className={styles.btn} fontSize={'20px'} fontWeight={900}>
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
          <DrawerHeader pl={'2rem'} fontSize={'22px'} fontFamily={'fantasy'}>
            Jeremy_Smith 
          </DrawerHeader>

          <DrawerBody color={'white'} alignItems={'left'}  onClick={onClose}>
            <Navlinks 
              display='flex'
              flexDir='column'
            />

            <ContactIcons 
              justifyContent='left'
              mt='3rem'
            />

            <Text fontSize={'16px'} position={'absolute'} bottom={5} fontFamily={'fantasy'}>
              Made with passion by <span style={{fontWeight: 900}}>Jeremy Smith.</span> <br />
              <br />

              All rights reserved. <br />
              Copyright © {new Date().getFullYear()}- <span style={{fontWeight: 900}}>jeremysmith.dev</span>
            </Text>
          </DrawerBody>
         
        </DrawerContent>

      </Drawer>
    </Box>
   );
}
 
export default Menu;