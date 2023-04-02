import { 
  Card, 
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
import MultiCarousel from './ProjectCarousel';

 

const ProjectCard = (props:any) => {
  return (
    <Box width='350px' height={'460px'} alignItems={'center'} pt={0} mb={'1rem'} pb={'1rem'} flexDir={'column'} className={styles.projectCard}>
      <Box width={{base:'100%'}} height={'fit-content'} p={0} m={0}>
        
      </Box>

      <Box bgColor={'linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))'} p={0} m={0}>
      <Image
          src={props.src}
          alt={props.alt}
          height={300}
          width={350}
        />
        <Stack spacing='.1' p={'1rem'} >
          <Heading size='md'>{props.heading}</Heading>
          <Text>{props.description}</Text>
          <Text fontStyle={'italic'} fontWeight={'bold'}>
            {props.category}
          </Text>

          <Box display={'flex'} textAlign={'center'} gap={'.3rem'} pb={'.3rem'}>
            <Badge bgColor={'grey'}>{props.badge1}</Badge>
            <Badge bgColor={'blue'}>{props.badge2}</Badge>
            <Badge bgColor={'red.800'}>{props.badge3}</Badge>
          </Box>
          <Box display={'flex'} textAlign={'center'} gap={'.3rem'}>
            <Badge bgColor={'green'}>{props.badge4}</Badge>
            <Badge bgColor={'blue.300'}>{props.badge5}</Badge>
          </Box>
        </Stack>

        <ButtonGroup position={'absolute'} bottom={'1rem'} left={'2.4rem'} gap={'40px'}>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant='outline' colorScheme='black' onClick={props.repoLink} fontSize={'14px'} height={8}>
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
            <Button variant='outline' colorScheme='black' onClick={props.link} fontSize={'16px'} height={8}>
              Visit 
            </Button>
          </motion.button>
        </ButtonGroup>
      </Box>
    </Box>
   );
}

export default ProjectCard;