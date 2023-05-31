import { Box, Heading, Text } from "@chakra-ui/react";

interface IHeader{
  name: string;
  color?: string;
  position: 'left' | 'center' | 'right';
}
const Header = ({ name, color, position }: IHeader) => {

  return ( 
    <Box fontFamily={'MuseoModerno'} color={color} textAlign={position} mb={'3rem'}>
      <Heading fontSize={{base:'35px', lg:'45px'}} >
        {name}
      </Heading>
    </Box>
   );
}
 
export default Header;