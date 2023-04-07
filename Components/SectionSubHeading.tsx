import { Text } from "@chakra-ui/react";

const SectionSubHeading = (props:any) => {
  return ( 
    <Text pb={'3rem'} fontSize={{base:'20px', lg:'30px'}}>
      {props.name}
    </Text>
   );
}
 
export default SectionSubHeading;