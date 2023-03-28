import { 
  Box, 
  Text, 
  Tooltip, 
  Divider } from "@chakra-ui/react";
import { BsFillFileArrowUpFill } from 'react-icons/bs'

const Footer = () => {
  return ( 
    <Box>
      <Box position={'fixed'} bottom={5} right={4} border={'1px solid black'}>
        <Tooltip label="Return to top" aria-label='A tooltip'>
          <a href="#hero">
            <BsFillFileArrowUpFill style={{color:'white', backgroundColor:'black'}}/>
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