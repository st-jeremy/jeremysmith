import { Heading } from "@chakra-ui/react";

const SectionHeading = (props:any) => {
  return ( 
    <Heading textAlign={props.position} fontSize={{base:'35px', md:'40px', lg:'50px'}} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} >
      {props.name}
    </Heading>
   );
}
 
export default SectionHeading;