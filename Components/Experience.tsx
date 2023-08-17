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
import { MdOutlineArrowDropDownCircle  } from 'react-icons/md';

const AccordionCard = ( props: IAccordionCard) => {
  const { bgColor, title, post, logo, date, about, points, color } = props;

  return ( 
    <AccordionItem bgColor={bgColor} color={color} p={'1rem'} display={{base:'block', xl:'flex'}} borderRadius={{base:0, xl:'20px 0 0 0 20px'}} borderTop={'1px solid black'} border={{ xl:'none'}} py={{xl:'3rem'}} height={{xl:'27rem'}} _hover={{bgColor:'blue.50', color: 'blue.900'}}>

      <AccordionButton border={{base:'.5px solid grey', xl:'none'}} _hover={{color:'blue.900'}} minW={{xl:'12rem', '2xl':'13rem'}} >
        <Stack flex={{base:1, md:'unset'}} direction={{base:'row', xl:'column'}} width={{base:'12rem', md:'100%', xl: '100%'}} m={'auto'}>
          <Box width={{base:'30%', xl:'unset'}} m="auto">
            <Image src={logo} width={150} height={75} alt={'Logo'} loading={'lazy'} />
          </Box>

          <Box flex={{base:1, xl:'unset'}} height={{xl:'fit-content'}} textAlign={{base:'left', xl:'center'}}>
            <Text fontWeight={700} fontSize={{md:'20px'}}>{title}</Text>
            <Text>{post}</Text>
            <Text>{date}</Text>
          </Box>

          <Box pt={{base:'3.5rem', sm:'2rem'}} display={{xl:'none'}}>
            <MdOutlineArrowDropDownCircle />
          </Box>
        </Stack>
      </AccordionButton>

      <AccordionPanel display={'flex'} flexDir={'column'} alignItems={{base:'left', xl:'center'}} justifyContent={'center'} height={{ xl:'22rem'}} borderLeft={{xl:'2px solid black'}} textAlign={'left'}>
        <Text textAlign={'center'} mb='1rem'>{about}</Text>
        {points && points.map((point: string, index: number) =>
          <li key={index} style={{textAlign:'left'}}>
            {point}
          </li>
        )}
      </AccordionPanel>
    </AccordionItem>
   );
};
 

const Experience = () => {
  return ( 
    <Box textAlign={'center'} pt={{base:'4rem', sm:'6.5rem', md:'10rem', lg:'6rem' }} px={{base: '1.25rem', sm: '1.rem', md: '1.2rem', lg: '6rem', xl:'3rem', '2xl':'6rem'}} minHeight={{lg:'600px'}} id={'experience'} maxW={'1500px'} margin={'auto'} background={'linear-gradient( to bottom, rgb(91 181 229) 0%, RGB(28 87 121) 100%)'}>
      <Box pl={{xl:'3rem'}}>
        <Header name='Experience' position='left' />
      </Box>

      <Box margin={'auto'}>
        <Accordion defaultIndex={[0]} p={0} reduceMotion display={'flex'} flexDirection={{base:'column', xl:'row'}}>
          <AccordionCard 
            bgColor='blue.100'
            logo='/hightable.png'
            title='HighTable Inc.'
            post='Frontend Engineer'
            date='May 2023 – Present'
            about='HighTable is an early-stage VC-backed hospitality-tech startup headquartered in Delaware, US, with a mission to transform the African hospitality industry through efficient Software as a Service apps.'
            points={[
              'Worked closely with cross-functional teams to integrate frontend components with server-side logic and APIs, ensuring a smooth operation of the platform.',
              'Utilized technologies to develop a consistent and engaging user interface.',
              'Implemented various code optimizations, leading to a 30% improvement in page load times and an enhanced user experience.'
              // 'Develop and deploy responsive websites and web applications.',
              // 'Implement responsive design for seamless mobile experiences.',
              // 'Collaborate with cross-functional teams to implement design concepts into interactive web experiences.'

            ]}
          />

          <AccordionCard 
            bgColor='blue.300'
            logo='/dataVault.png'
            title='DataVault Nig.'
            post='Frontend Engineer'
            date='Mar 2023 – Present'
            about='Datavault Nigeria is a data research platform that automates data analysis and publish data-driven market research.'
            //  for MSMEs fostering advancements in Africa&apos;s creative and innovative landscape.'
            points={[
              'Utilize technologies to translate design mockups into high-quality code, delivering a consistent and engaging user interface.',
              // 'Create visually appealing and intuitive user interfaces with high-quality frontend code.',
              'Conduct thorough testing and debugging of websites and web apps, ensuring a smooth and error-free user experience.',
              'Peer Programming with cross-functional teams to integrate frontend components with server-side logic and APIs.'
            ]}
          />

          <AccordionCard 
            bgColor='blue.500'
            // color='whiteAlpha.800'
            logo='/freelance.png'
            title='Freelance'
            post='Frontend Engineer'
            date='Nov. 2022 – Mar. 2023'
            about='Built webapps with intuitive user interfaces and great user experience.'
            points={[
              // 'Create visually appealing and intuitive user interfaces with high-quality frontend code.',
              'Worked with cross-functional teams to develop and implement scalable, and user-friendly frontend solutions for various platforms.',
              'Translated design mockups into high-quality code, with visually appealing interface.',
              ' Implemented code optimizations techniques, resulting in an enhanced user experience.'
              // 'Implemented responsive design for seamless mobile experiences.',
              // 'Collaborate with cross-functional teams to implement design concepts into interactive web experiences.'
            ]}
          />
          
          <AccordionCard 
            bgColor='blue.600'
            // color='whiteAlpha.800'
            logo='/sendme.png'
            title='Sendme.ng'
            post='Implementation Specialist'
            date='Jun. 2022 – May 2023'
            about='Sendme.ng (YC W22) is a startup with the goal of decentralizing the distribution of animal protein from production via to consumers using AI and data analytics.'
            points={[
              'Collaborate with clients, provide recommendations for design and functionality, and support bug resolution on apps and software.',
              'Manage inventory on the software systems, increasing customer satisfaction by 70%.',
              'Install software systems, integrate users, and ensure smooth processes.'
            ]}
          />
        </Accordion>
      </Box>
    </Box>
   );
}
 
export default Experience;