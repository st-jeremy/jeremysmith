import { 
  Badge,
  Box,
  VStack,
  HStack,
  Text,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image';
import PrimaryBtn from './PrimaryBtn';
import { IProjectCard } from './types';
 

const ProjectCard = (props:IProjectCard) => {
  const { 
    src,
    alt, 
    heading,
    description,
    disable,
    badges,
    repoLink,
    link
  } = props;

  return (
    <Box width={'320px'} height={'385px'} borderBottomRadius={'30px 30px'} bgColor={'white'} margin={'auto'} >
      <Image
        src={src}
        alt={alt}
        height={180}
        width={320}
        style={{margin:'auto'}}
      />

      <VStack spacing='2' width={'320px'} position={'absolute'} bottom={8}>
        <Heading size='md'>{heading}</Heading>
        <Text>{description}</Text>

        <Box display={'flow'}>
          {badges.map((badge: string, index: number) =>
            <Badge mr={'.7rem'} key={index} bgColor={'blue.400'}>
              {badge}
            </Badge>
          )}
        </Box>

        <HStack _disabled={disable} pt={'1rem'}>
          <PrimaryBtn name='View Repository' href={repoLink} />
          <PrimaryBtn name='Visit' href={link} />
        </HStack>
      </VStack>
    </Box>
   );
}

export default ProjectCard;