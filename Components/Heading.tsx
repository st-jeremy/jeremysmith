import { Heading } from "@chakra-ui/react";

const SectionHeading = (props:any) => {
  return ( 
    <Heading fontFamily={'fantasy'} fontSize={{base:'24px', md: '40px', lg:'30px'}} pb={5}>
      {props.sectionHeading}
    </Heading>
   );
}
 
export default SectionHeading;