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
    <Box width={{base:'320px', md: '90%'}} height={'400px'} alignItems={'center'} pt={0} pb={'1rem'} flexDir={'column'} 
    // className={styles.projectCard}  
    borderRadius={' 30px 30px'}
    bgColor={'white'} color={'black'}
    margin={'auto'}  mb={'3rem'}
    
    >
      <Box p={0} m={{base: 0, md: 'auto'}} alignItems={'center'} justifyItems={'center'} justifyContent={'center'}>
        <Box height={180} pt={5}>
          <Image
            src={props.src}
            alt={props.alt}
            height={300}
            width={320}
            style={{margin:'auto'}}
          />
        </Box>  

        <Stack spacing='.1' p={'1.2rem 1rem'} >
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

        <ButtonGroup position={'absolute'} bottom={'4.5rem'} left={{base:'3rem', sm:'6rem', md: '3.2rem', lg: '5rem', xl:'4.5rem'}} gap={'20px'} borderRadius={'50%'} isDisabled={props.disable}>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant='outline' colorScheme='black' _hover={{bgColor:'rgb(13,17,32)', color:'white'}} fontSize={'14px'} height={8}>
              <a href={props.repoLink}>View Repository</a>
            </Button>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant='outline' colorScheme='black' _hover={{bgColor:'rgb(13,17,32)', color:'white'}} fontSize={'16px'} height={8}>
              <a href={props.link}>Visit</a>
            </Button>
          </motion.button>
        </ButtonGroup>
      </Box>
    </Box>
   );
}

export default ProjectCard;