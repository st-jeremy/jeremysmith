import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'


export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen} display={{base:'flex', lg:'none'}} variant='ghost' position={'absolute'} right={'1'} >
        <HiMenuAlt2 fontSize={'28px'}/>
      </Button>

      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        
        <DrawerContent >
          <DrawerCloseButton bgColor={'white'} mt={'5px'}/>
          <DrawerHeader borderBottomWidth='1px' background= 'rgb(14,18,32)' height={'65px'}>
            <Logo 
              position='relative'
              left={{base:'0', md: '5'}}
              top='-1'
            />
          </DrawerHeader>

          <DrawerBody bgColor={'rgb(22,29,51)'} color={'white'}>
            <Navlinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}