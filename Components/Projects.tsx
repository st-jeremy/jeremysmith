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
    <Card maxW='sm' alignItems={'center'}>
      <Box>
        <Image
          src={props.src}
          alt={props.alt}
          height={250}
          width={250}
        />
      </Box>

      <Box>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.heading}</Heading>
          <Text>{props.description}</Text>
          <Text bgColor={'grey'} color='blue.600' fontSize='2xl' p={5}>
            {props.category}
          </Text>
        </Stack>

        <ButtonGroup spacing='7'>
          <Button variant='solid' colorScheme='blue' onClick={props.repoLink}>
            View Repo
          </Button>
          <Button variant='ghost' colorScheme='blue' onClick={props.link}>
            Visit
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
   );
}
 

const Projects = () => {
  return ( 
    <Box bgColor={'bisque'} px={'1rem'} py={'3rem'} minH={'100vh'} textAlign={'center'}>
      <Heading>Projects</Heading>

      <Box>
        <ProjectCard 
          src='/thirteen.svg'
          alt='thirteen'
          heading='Fashion haven'
          description= 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
          category='e-commerce'
          repoLink='https://github.com/fashion-haven'
          link='https://github.com/fashion-haven'
        />

        <ProjectCard 
          src='/thirteen.svg'
          alt='thirteen'
          heading=''
          description=''
          category=''
          repoLink=''
          link=''
        />
      </Box>

    </Box>
   );
}
 
export default Projects;