import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const AnimatedBtn = ({ name, link }: { name: string, link: string}) => {
  const router = useRouter();

  function handleClick () {
    router.push({
      pathname: link
    })
  }
  return ( 
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button variant='outline' colorScheme='black' _hover={{bgColor:'rgb(13,17,32)', color:'white'}} fontSize={'14px'} height={8} onClick={handleClick}>
        {name}
      </Button>
    </motion.button>
   );
}
 
export default AnimatedBtn;