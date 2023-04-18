import { Button } from "@chakra-ui/react";

const ContactButton = (props:any) => {
  return ( 
    <Button leftIcon={props.icon} fontSize={{base:'20px', sm:'23px', md:'23px'}} width={props.width} p={6}>
      <a href={props.href}>{props.name}</a>
    </Button>
   );
}
 
export default ContactButton;