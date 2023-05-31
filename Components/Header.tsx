import { Box, Heading, Text } from "@chakra-ui/react";

interface IHeader{
  heading: string;
  subHeading?: string;
  color?: string;
  position: 'left' | 'center' | 'right';
}
const Header = ({ heading, subHeading, color, position }: IHeader) => {

  return ( 
    <Box fontFamily={'MuseoModerno'} color={color} textAlign={position} mb={'3rem'}>
      <Heading fontSize={{base:'35px', lg:'45px'}} >
        {heading}
      </Heading>
      <Text fontSize={{ md:'30px'}}>
        {subHeading}
      </Text>
    </Box>
   );
}
 
export default Header;