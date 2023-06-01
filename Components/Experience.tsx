import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Stack
} from '@chakra-ui/react';
import Image from 'next/image';
import { IAccordionCard } from './types';
import Header from './Header';

const AccordionCard = ( props: IAccordionCard) => {
  const { bgColor, title, post, logo, date, about, points } = props;

  return ( 
    <AccordionItem bgColor={bgColor} p={'1rem'} display={{base:'block', xl:'flex'}} borderRadius={{base:0, xl:'20px 0 0 0 20px'}} borderTop={'1px solid black'} border={{ xl:'none'}} py={{xl:'3rem'}} height={{xl:'25rem'}} _hover={{bgColor:'blue.50'}}>

      <AccordionButton border={{base:'.5px solid grey', xl:'none'}} _hover={{color:'blue.900'}}>
        <Stack flex={{base:1, md:'unset'}} direction={{base:'row', xl:'column'}} width={{base:'12rem', md:'100%', xl: '100%'}} height={{xl:'16rem'}} m={'auto'}>
          <Box width={{base:'30%', xl:'unset'}}>
            <Image src={logo} width={150} height={150} alt={'Logo'} loading={'lazy'} />
          </Box>

          <Box flex={{base:1, xl:'unset'}} height={{xl:'fit-content'}} textAlign={'left'}>
            <Text fontWeight={700} fontSize={{md:'20px'}}>{title}</Text>
            <Text>{post}</Text>
            <Text>{date}</Text>
          </Box>
        </Stack>
      </AccordionButton>

      <AccordionPanel height={{ xl:'19rem'}} borderLeft={{xl:'2px solid black'}} textAlign={'left'}>
        <Text textAlign={'center'} mb='1rem'>{about}</Text>
        {points.map((point: string, index: number) =>
          <li key={index}>
            {point}
          </li>
        )}
      </AccordionPanel>
    </AccordionItem>
   );
};
 

const Experience = () => {
  return ( 
    <Box textAlign={'center'} py={{base:'4rem', sm:'6.5rem', md:'10rem', lg:'6rem' }}  px={{base: '1.25rem', sm: '1.rem', md: '1.2rem', lg: '6rem'}} minHeight={{lg:'600px'}} id={'experience'} maxW={'1500px'} margin={'auto'}  background={'linear-gradient( to bottom, rgb(55,156,215)  0%, RGB(28 87 121) 100%)'} >
      <Header name='Experience' position='left' />

      <Box borderRadius={'20px'} margin={'auto'}>
        <Accordion defaultIndex={[0]} p={0} reduceMotion display={'flex'} flexDirection={{base:'column', xl:'row'}} >
          <AccordionCard 
            bgColor='blue.100'
            logo='/hightable.png'
            title='HighTable Inc.'
            post='Frontend Engineer'
            date='May 2023 – Present'
            about='HighTable is an early-stage VC-backed hospitality-tech startup headquartered in Delaware, US, with a mission to transform the African hospitality industry through a powerful and efficient Software as a Service (SaaS) application.'
            points={[
              'Develop and deploy responsive websites and web applications.',
              'Implement responsive design for seamless mobile experiences.',
              'Collaborate with cross-functional teams to implement design concepts into interactive web experiences.'
            ]}
          />

          <AccordionCard 
            bgColor='blue.200'
            logo='/datavault.png'
            title='DataVault Nigeria'
            post='Frontend Engineer'
            date='March 2023 – Present'
            about='DataVault bridges the global gap by connecting African research, data, and researchers through a distinctive system aiming at authenticating and promoting exceptional research and data, fostering advancements in Africa&apos;s creative and innovative landscape.'
            points={[
              'Create visually appealing and intuitive user interfaces with high-quality frontend code.',
              'Conduct thorough testing and debugging of websites and web applications to identify and resolve any issues or bugs, ensuring a smooth and error-free user experience.',
              'Peer Programming with other colleagues.'
            ]}
          />

          <AccordionCard 
            bgColor='blue.300'
            logo='/freelance.png'
            title='Freelance'
            post='Frontend Engineer'
            date='Nov 2022 – Present'
            about='Collaborate with other devs in building landing pages, ecommerce website, blog etc.'
            points={[
              'Develop and deploy responsive websites and web applications.',
              'Implement responsive design for seamless mobile experiences.',
              'Collaborate with cross-functional teams to implement design concepts into interactive web experiences.'
            ]}
          />
          
          <AccordionCard 
            bgColor='blue.400'
            logo='/sendme.png'
            title='Sendme.ng'
            post='Implementation Specialist'
            date='Jun 2022 – present'
            about='Sendme.ng (YC W22) is a startup with the goal of decentralizing the distribution of animal protein from production through to consumers using artificial intelligence and data analytics.'
            points={[
              'Collaborate with clients to understand their needs and requirements, provide recommendations for design and functionality, and support bug resolution on apps and software.',
              'Manage inventory on the software systems, increasing customer satisfaction by 70%.',
              'Install software systems, educate users on their functionalities, and ensure all necessary components are in place.'
            ]}
          />
        </Accordion>
      </Box>
    </Box>
   );
}
 
export default Experience;