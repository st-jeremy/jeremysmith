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
import MulltiCarousel from './MultiCarosel';

const ProjectCard = (props:any) => {
  return (
    <Card width='350px' height={'460px'} alignItems={'center'} mb={'1rem'} pb={'1rem'} className={styles.projectCard}>
      <Box width={{base:'100%'}} height={350}>
        <Image
          src={props.src}
          alt={props.alt}
          height={300}
          width={350}
        />
      </Box>

      <Box bgColor={'linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))'} mt={'-9rem'}>
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
    </Card>
   );
}
 

const Projects = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={{base:'3rem', md:'5rem', lg: '7rem'}} minH={'100vh'} textAlign={'center'} id={'projects'}>
      <Heading pb={'1rem'}>Projects</Heading>

      <Box gap={'3rem'} display={{base:'flex', md: 'grid'}} flexDir={'column'} alignItems={'center'} gridTemplateColumns={{md:'auto auto', lg: 'auto auto auto'}}>
        <MulltiCarousel
        content= {<ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'a fashion e-commerce website'
          category='e-commerce'
          badge1='Next.Js'
          badge2='TypeScript'
          badge3='Redux'
          badge4='Chakra UI'
          badge5='CSS'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />}/>

        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'a fashion e-commerce website'
          category='e-commerce'
          badge1='Next.Js'
          badge2='TypeScript'
          badge3='Redux'
          badge4='Chakra UI'
          badge5='CSS'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='Fly plux'
          heading='Flyplux'
          description='an airline landing page'
          category='landing page'
          badge1='React'
          badge2='Chakra UI'
          badge3='CSS'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'an e-commerce website for fashion products.'
          category='e-commerce'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'an e-commerce website for fashion products.'
          category='e-commerce'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />
      </Box>

      <Heading fontFamily={'fantasy'} p={'4rem'}>Still cooking in the pot...</Heading>
      <Box display={'grid'} gridTemplateColumns={'auto auto auto'}>
        <ProjectCard 
          src='/decx.png'
          alt='decx image'
          heading='*****'
          description= ''
          category='blog'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/datavault.png'
          alt='datavault image'
          heading='*****'
          description= 'a blog website for data science and analysis products.'
          category='e-commerce'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/datavault.png'
          alt='datavault image'
          heading='*****'
          description= 'a blog website for data science and analysis products.'
          category='e-commerce'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/datavault.png'
          alt='datavault image'
          heading='*****'
          description= 'a blog website for data science and analysis products.'
          category='e-commerce'
          // repoLink='https://github.com/fashion-haven'
          // link='https://github.com/fashion-haven'
        />

      </Box>

    </Box>
   );
}
 
export default Projects;