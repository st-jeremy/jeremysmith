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
          p={{base:'1.5', xl:'2.5'}}
          justifyContent='left'
          _hover={{color:'black', bgColor:'white'}}
          _visited={{color: 'grey', }}
          bgColor={props.bgColor}
          rightIcon={props.rightIcon}
          fontSize={{xl: '21px'}}
        >
          <a href={props.link} style={{paddingTop:'.5rem'}}>
            {props.name}
          </a>
        </Button>
      </motion.button>
    </Box>
   );
}

export default CustomBtn;