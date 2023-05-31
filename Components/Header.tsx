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
      <Heading fontSize={{base:'35px', md:'40px', lg:'50px'}} >
        {heading}
      </Heading>
      <Text fontSize={{ md:'40px', lg:'50px'}}>
        {subHeading}
      </Text>
    </Box>
   );
}
 
export default Header;