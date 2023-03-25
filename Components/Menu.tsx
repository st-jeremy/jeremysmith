import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  useDisclosure,
  Stack
} from '@chakra-ui/react'
import React from 'react';
import { BsMenuApp } from 'react-icons/bs'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return ( 
    <Box display={{md: 'none'}}>
      {/* <Button colorScheme='teal' onClick={onOpen}>
        Create user
      </Button> */}
      <BsMenuApp onClick={onOpen}/>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton onClick={onClose}/>
          <DrawerHeader borderBottomWidth='1px'>
            Jeremy.dev
          </DrawerHeader>

          <DrawerBody>
            <a href="#about"> About </a>
            <br />

            <a href="#solutions"> Solutions </a>
            <br />

            <a href="#howItWorks"> How it works </a>
            <br />

            <a href="#roadmap"> Roadmap </a>
            <br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
   );
}
 
export default Menu;