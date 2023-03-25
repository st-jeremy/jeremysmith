import { Box, Text, Button, Input, Divider } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return ( 
    <Box bgColor={'#0D101C'} color={'white'}>
    
      <Divider color={'#0C37AA'} w={'90%'} m={'auto'} />

      <Text fontSize={'14px'} textAlign={'center'} p={'10px 0'}>
        Copyright © {new Date().getFullYear()}- sonergy.io
      </Text>
    </Box>
   );
}
 
export default Footer;