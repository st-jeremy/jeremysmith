import { Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const CustomBtn = (props: any) => {
  
  return ( 
    <Box width={{md:'fit-content'}}>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button 
          variant={'ghost'} 
          border={'none'} 
          width={{base: '11rem', md:'fit-content'}}
          height={'fit-content'}
          leftIcon={props.icon} 
          p={'1.5'}
          justifyContent='left'
          _hover={{color:'black', bgColor:'white'}}
          _visited={{color: 'grey', }}
          bgColor={props.bgColor}
          rightIcon={props.rightIcon}
          fontSize={{xl: '25px'}}
        >
          <a href={props.link}>
            {props.name}
          </a>
        </Button>
      </motion.button>
    </Box>
   );
}

export default CustomBtn;