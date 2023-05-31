import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const PrimaryBtn = ({ name, link, size, rightIcon }: { name: string, link: string, size?: string, rightIcon: any }) => {

  return ( 
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
    > 
      <a href={link}>
        <Button bgColor='rgb(6,31,43)' colorScheme='black' _hover={{bgColor:'rgb(26,54,93)', color:'white'}} fontSize={size} rightIcon={rightIcon}>
          {name}
        </Button>
      </a>
    </motion.button>
   );
}
 
export default PrimaryBtn;