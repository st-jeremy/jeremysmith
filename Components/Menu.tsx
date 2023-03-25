import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react';
import { BsMenuApp } from 'react-icons/bs'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return ( 
    <Box display={{md: 'none'}}>
      <BsMenuApp onClick={onOpen}/>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />

        {/* <DrawerContent>
          <DrawerCloseButton onClick={onClose}/>
          <DrawerHeader borderBottomWidth='1px'>
            Jeremy.dev
          </DrawerHeader>

          <DrawerBody>
           
          </DrawerBody>
        </DrawerContent> */}
      </Drawer>
    </Box>
   );
}
 
export default Menu;