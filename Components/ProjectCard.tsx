import { 
  Badge,
  Box,
  VStack,
  HStack,
  Button,
  Text,
  ButtonGroup,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import AnimatedBtn from './AnimatedBtn';
// import styles from '@/styles/Home.module.css'
 

const ProjectCard = (props:any) => {
  const { 
    src,
    alt, 
    heading,
    description,
    category,
    disable,
    repoLink,
    link,
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
    badge6
  } = props;

  return (
    <Box width={'320px'} height={'385px'} alignItems={'center'} pt={0} flexDir={'column'} borderRadius={' 30px 30px'} bgColor={'white'} margin={'auto'} mb={'3rem'}>

      <Box p={0} m={{base: 0, md: 'auto'}}>
        <Image
          src={src}
          alt={alt}
          height={180}
          width={320}
          style={{margin:'auto'}}
        />

        <VStack spacing='2' p={'1.2rem 1rem'} >
          <Heading size='md' pb={'.3rem'}>{heading}</Heading>
          <Text>{description}</Text>
          <HStack>
            <Badge bgColor={'grey'}>{badge1}</Badge>
            <Badge bgColor={'blue.200'}>{badge2}</Badge>
            <Badge bgColor={'red.200'}>{badge3}</Badge>
          </HStack>

          <HStack>
            <Badge bgColor={'green.200'}>{badge4}</Badge>
            <Badge bgColor={'blue.300'}>{badge5}</Badge>
            <Badge bgColor={'blue.50'}>{badge6}</Badge>
          </HStack>
        </VStack>

        <ButtonGroup position={{base:'relative'}} gap={'20px'} borderRadius={'50%'} isDisabled={disable}>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant='outline' colorScheme='black' _hover={{bgColor:'rgb(13,17,32)', color:'white'}} fontSize={'14px'} height={8}>
              <a href={repoLink}>
                View Repository
              </a>
            </Button>
          </motion.button>
          <AnimatedBtn name='View Repository' />

          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant='outline' colorScheme='black' _hover={{bgColor:'rgb(13,17,32)', color:'white'}} fontSize={'16px'} height={8}>
              <a href={link}>
                Visit
              </a>
            </Button>
          </motion.button>
        </ButtonGroup>
      </Box>
    </Box>
   );
}

export default ProjectCard;