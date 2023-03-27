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
} from '@chakra-ui/react'
import React from 'react';
import { BsMenuApp } from 'react-icons/bs'
import Navlinks from './Navlinks';

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return ( 
    <Box display={{md: 'none'}}>
      <Box position={'absolute'} right={{base:'1.25rem', sm: '1.5rem', md: '2rem', lg: '5rem'}} top={{base: '.7rem', sm:'1rem'}}>
        <BsMenuApp onClick={onOpen}/>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay/>

        <DrawerContent bgColor={'blackAlpha.900'}>
          <DrawerCloseButton onClick={onClose} border={'none'} />
          <DrawerHeader borderBottomWidth='1px'>
            Jeremy.dev
          </DrawerHeader>

          {/* <Divider /> */}

          <DrawerBody>
            <Navlinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
   );
}
 
export default Menu;