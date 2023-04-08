import { 
  Badge,
  Box,
  Stack,
  Button,
  Text,
  ButtonGroup,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import styles from '@/styles/Home.module.css'
 

const ProjectCard = (props:any) => {
  return (
    <Box width='320px' height={'400px'} alignItems={'center'} pt={0} mb={'3rem'} pb={'1rem'} flexDir={'column'} 
    // className={styles.projectCard}  
    borderRadius={'0 0 30px 30px'}
    bgColor={'white'} color={'black'}
    >
      <Box p={0} m={0}>
        <Box height={180}>
          <Image
            src={props.src}
            alt={props.alt}
            height={300}
            width={320}
          />
        </Box>  

        <Stack spacing='.1' p={'1rem'} >
          <Heading size='md' pb={'1rem'}>{props.heading}</Heading>
          <Text>{props.description}</Text>
          <Text fontStyle={'italic'} fontWeight={'bold'} mb={'2rem'}>
            {props.category}
          </Text>

          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={'.3rem'} pb={'.3rem'}>
            <Badge bgColor={'grey'}>{props.badge1}</Badge>
            <Badge bgColor={'blue.200'}>{props.badge2}</Badge>
            <Badge bgColor={'red.200'}>{props.badge3}</Badge>
          </Box>
          <Box display={'flex'} justifyContent={'center'} textAlign={'center'} gap={'.3rem'}>
            <Badge bgColor={'green.200'}>{props.badge4}</Badge>
            <Badge bgColor={'blue.300'}>{props.badge5}</Badge>
          </Box>
        </Stack>

        <ButtonGroup position={'absolute'} bottom={'4.5rem'} left={'2.5rem'} gap={'40px'} borderRadius={'50%'}>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant='outline' colorScheme='black' onClick={props.repoLink}  _hover={{bgColor:'blue', color:'white'}} fontSize={'14px'} height={8}>
              View Repository
            </Button>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant='outline' colorScheme='black' onClick={props.link} _hover={{bgColor:'blue', color:'white'}} fontSize={'16px'} height={8}>
              Visit 
            </Button>
          </motion.button>
        </ButtonGroup>
      </Box>
    </Box>
   );
}

export default ProjectCard;