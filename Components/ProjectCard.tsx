import { 
  Badge,
  Box,
  VStack,
  HStack,
  Text,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import AnimatedBtn from './AnimatedBtn';
 

const ProjectCard = (props:any) => {
  const { 
    src,
    alt, 
    heading,
    description,
    disable,
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
    badge6,
    badges
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

      <VStack spacing='2' width={'320px'} position={'absolute'} bottom={10}>
        <Heading size='md'>{heading}</Heading>
        <Text>{description}</Text>

        <HStack>
          {/* <Badge bgColor={'grey'}>{badge1}</Badge>
          <Badge bgColor={'blue.200'}>{badge2}</Badge>
          <Badge bgColor={'red.200'}>{badge3}</Badge> */}


          {badges.map((badge: string, index: number) =>
            <Badge key={index}>{badge}</Badge>
          )}
        </HStack>

        <HStack>
          {/* <Badge bgColor={'green.200'}>{badge4}</Badge>
          <Badge bgColor={'blue.300'}>{badge5}</Badge>
          <Badge bgColor={'blue.50'}>{badge6}</Badge> */}
        </HStack>

        <HStack _disabled={disable}>
          <AnimatedBtn name='View Repository' link='/' />
          <AnimatedBtn name='Visit' link='/' />
        </HStack>
      </VStack>
    </Box>
   );
}

export default ProjectCard;