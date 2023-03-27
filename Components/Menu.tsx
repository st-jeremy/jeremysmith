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
      <Box position={'absolute'} right={'1rem'} top={'.7rem'}>
        <BsMenuApp onClick={onOpen}/>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay bgColor={'grey'} height={'10rem'} />

        <DrawerContent p={'1rem'}>
          <DrawerCloseButton onClick={onClose} position={'absolute'} right={'1rem'} />
          <DrawerHeader borderBottomWidth='1px'>
            Jeremy.dev
          </DrawerHeader>
          
          <Divider />

          <DrawerBody>
            <Navlinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
   );
}
 
export default Menu;