import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
  Text
} from '@chakra-ui/react'
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';
import Image from 'next/image';

const ExpAccordion = (props:any) => {
  const { bgColor, title, post, logo, date, about, line1, line2, line3} = props
  return ( 
    <Box p={0} borderRadius={'20px'}>
          <AccordionItem bgColor={bgColor} p={'1rem'} display={{base:'block', lg:'flex'}} borderRadius={{base:0, xl:'20px 0 0 0 20px'}} borderTop={'1px solid black'} border={{ xl:'none'}} pb={{lg:'3rem'}} pt={{lg:'3rem'}} height={{lg:'22rem'}} _hover={{bgColor:'blue.400'}}>
            <h2>
              <AccordionButton p={{base:0, lg:'.5rem'}} height={{ lg:'16rem'}} border={{base:'.5px solid grey', lg:'none'}}>
                <Box as="span" flex='1' textAlign={{base:'center', lg:'left'}} width={{base:'12rem', lg: 'fit-content'}} pt={{base: 3, lg:'unset'}}>
                  <Image src={logo} width={200} height={200} alt={'Logo'} loading={'lazy'} />
                  <Heading fontFamily={'Dyna Puff'} fontSize={{base:'25px', md:'28px'}}>
                    {title}
                  </Heading>
                  <Text>{post}</Text>
                  <Text>{date}</Text>
                </Box>
              </AccordionButton>
            </h2>

            <AccordionPanel p={{base:'1rem 0 0 0', lg: '1rem'}} fontSize={'16px'} height={{ lg:'16rem'}} borderLeft={{lg:'2px solid black'}} textAlign={{lg: 'left'}} width={{base:'fit-content', lg:'fit-content'}}>
              {about}
              <ul>&nbsp;</ul>
              <li>{line1}</li>
              <li>{line2}</li>
              <li>{line3}</li>
            </AccordionPanel>
          </AccordionItem>
    </Box>
   );
};
 

const Experience = () => {
  return ( 
    <Box textAlign={'center'} py={{base:'4rem', sm:'6.5rem', md:'10rem', lg:'6rem' }}  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} minHeight={{lg:'600px'}} id={'experience'} maxW={'1500px'} margin={'auto'}  background={'linear-gradient( to bottom, rgb(55,156,215)  0%, rgb(247,252,255) 100%)'} >
       <SectionHeading 
          name='Experience'
          position='left'
        />
        <SectionSubHeading 
          name='Sphere where I have put skills into work.'
          position='left'
        />

      <Box  p={0} borderRadius={'20px'} margin={'auto'}>
        <Accordion defaultIndex={[0]} reduceMotion display={'flex'} flexDirection={{base:'column', lg:'row'}} >
          <ExpAccordion 
            bgColor='blue.50'
            logo='/hightable.png'
            title='HighTable Inc.'
            post='Frontend Engineer'
            date='Nov 2022 – Present'
            about='HighTable is an early-stage VC-backed hospitality-tech startup headquartered in Delaware, US, with a mission to transform the African hospitality industry through a powerful and efficient Software as a Service (SaaS) application.'
           
            line1='Develop and deploy responsive websites and web applications.'
            line2='Implement responsive design for seamless mobile experiences.'
            line3='Collaborate with cross-functional teams to implement design concepts into interactive web experiences.'
          />

          <ExpAccordion 
            bgColor='blue.100'
            logo='/datavault.png'
            title='DataVault Nigeria'
            post='Frontend Engineer'
            date='March 2023 – Present'
            about='DataVault bridges the global gap by connecting African research, data, and researchers through a distinctive system. Our aim is to authenticate and promote exceptional research and data, fostering advancements in Africa&apos;s creative and innovative landscape.'

            line1='Create visually appealing and intuitive user interfaces with high-quality frontend code.'
            line2='Conduct thorough testing and debugging of websites and web applications to identify and resolve any issues or bugs, ensuring a smooth and error-free user experience.'
            line3='Peer Programming with other colleagues.'
          />

          <ExpAccordion 
            bgColor='blue.200'
            logo='/freelance.png'
            title='Freelance'
            post='Frontend Engineer'
            date='Nov 2022 – Present'
            about='Collaborate with other devs in building landing pages, ecommerce website, blog etc.'

            line1='Develop and deploy responsive websites and web applications.'
            line2='Implement responsive design for seamless mobile experiences.'
            line3='Collaborate with cross-functional teams to implement design concepts into interactive web experiences.'
          />
          
          <ExpAccordion 
            bgColor='blue.300'
            logo='/sendme.png'
            title='Sendme.ng'
            post='Implementation Specialist'
            date='Jun 2022 – present'
            about='Sendme.ng (YC W22) is a startup with the goal of decentralizing the distribution of animal protein from production through to consumers using artificial intelligence and data analytics.'

            line1='Collaborate with clients to understand their needs and requirements, provide recommendations for design and functionality, and support bug resolution on apps and software.'
            line2='Manage inventory on the software systems, increasing customer satisfaction by 70%.'
            line3='Install software systems, educate users on their functionalities, and ensure all necessary components are in place.'
          />
        </Accordion>
      </Box>
    </Box>
   );
}
 
export default Experience;