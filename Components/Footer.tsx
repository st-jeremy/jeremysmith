import { 
  Box, 
  Text, 
  Tooltip, 
  Divider } from "@chakra-ui/react";
import { BsFillFileArrowUpFill } from 'react-icons/bs'

const Footer = () => {
  return ( 
    <Box>
    
      <Box>
        
        <Tooltip label="Return to top" aria-label='A tooltip'>
          <a href="#hero">
            <BsFillFileArrowUpFill />
          </a>
        </Tooltip>
      </Box>

      <Divider color={'#0C37AA'} w={'90%'} m={'auto'} />

      <Text fontSize={'14px'} textAlign={'center'} p={'10px 0'}>
        Copyright © {new Date().getFullYear()}- jeremysmith.dev
      </Text>
    </Box>
   );
}
 
export default Footer;