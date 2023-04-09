import { Text } from "@chakra-ui/react";

const SectionSubHeading = (props:any) => {
  return ( 
    <Text pb={'2rem'} fontSize={{base:'20px', lg:'30px'}} textAlign={props.position} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'}>
      {props.name}
    </Text>
   );
}
 
export default SectionSubHeading;