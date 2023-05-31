import { Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css'
import { IPrimaryBtn } from '../types';


const PrimaryBtn = (props: IPrimaryBtn) => {
  const { name, link, download, color, bgColor, rightIcon, leftIcon } = props;

  return ( 
    <a href={link} className={styles.customBtn} download={download}>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button 
          variant={'ghost'} 
          border={'none'} 
          width={{base: '11rem', md:'fit-content'}}
          height={'fit-content'}
          leftIcon={leftIcon} 
          p={{base:'1.5', xl:'2'}}
          justifyContent='left'
          alignItems={'left'} 
          _hover={{
            color:'white', 
            bgColor:'rgb(26,54,93)'
          }}
          _visited={{color: 'grey' }}
          bgColor={bgColor}
          color={color}
          rightIcon={rightIcon}
          fontSize={{xl: '21px'}}
        >
          {name}
        </Button>
      </motion.button>
    </a>
   );
}

export default PrimaryBtn;