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
          p={{base:'1.5', xl:'2'}}
          justifyContent='left'
          alignItems={'left'} 
          _hover={{
            color:'white', 
            bgColor:'rgb(26,54,93)'
          }}
          _visited={{color: 'grey' }}
          bgColor={props.bgColor}
          color={props.color}
          rightIcon={props.rightIcon}
          fontSize={{xl: '21px'}}
        >
          <a href={props.link} style={{paddingTop:'.25rem'}} download={props.download}>
            {props.name}
          </a>
        </Button>
      </motion.button>
    </Box>
   );
}

export default CustomBtn;