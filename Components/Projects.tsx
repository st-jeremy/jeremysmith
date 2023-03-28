import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Box,
  Stack,
  Button,
  Divider,
  Text,
  ButtonGroup,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image';

const ProjectCard = (props:any) => {
  return ( 
    <Card width='350px' height={'400px'} alignItems={'center'} mb={'1rem'} pb={'1rem'}>
      <Box width={{base:'100%'}}>
        <Image
          src={props.src}
          alt={props.alt}
          height={250}
          width={350}
        />
      </Box>

      <Box bgColor={'linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))'}>
        <Stack spacing='.1' mb={'1rem'} p={'1rem'} >
          <Heading size='md'>{props.heading}</Heading>
          <Text>{props.description}</Text>
          <Text fontStyle={'italic'} fontWeight={'bold'}>
            {props.category}
          </Text>
        </Stack>

        <ButtonGroup>
          <Button variant='outline' colorScheme='black' onClick={props.repoLink} fontSize={'16px'}>
            View Repository
          </Button>
          <Button variant='outline' colorScheme='black' onClick={props.link} fontSize={'16px'}>
            Visit 
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
   );
}
 

const Projects = () => {
  return ( 
    <Box  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} py={'3rem'} minH={'100vh'} textAlign={'center'}>
      <Heading pb={'1rem'}>Projects</Heading>

      <Box gap={'3rem'} display={{base:'flex', md: 'grid'}} flexDir={'column'} alignItems={'center'} gridTemplateColumns={{md:'auto auto', lg: 'auto auto auto'}}>
        <ProjectCard 
          src='/fashion-haven.png'
          alt='fashion haven image'
          heading='Fashion haven'
          description= 'an e-commerce website for fashion...'
          category='e-commerce'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/fashion-haven.png'
          alt='Fly plux'
          heading='Flyplux'
          description='an airline landing page'
          category='landing page'
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

    </Box>
   );
}
 
export default Projects;