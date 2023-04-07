import { Heading } from "@chakra-ui/react";

const SectionHeading = (props:any) => {
  return ( 
    <Heading textAlign={'center'} fontSize={{base:'35px', md:'40px', lg:'50px'}} fontFamily={'fantasy'} >
      {props.name}
    </Heading>
   );
}
 
export default SectionHeading;