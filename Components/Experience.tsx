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

const ExpAccordion = (props:any) => {
  return ( 
    <Box p={0} borderRadius={'20px'}>
          <AccordionItem bgColor={props.bgColor} p={'1rem'} display={{base:'block', xl:'flex'}} borderRadius={{base:0, xl:'20px 0 0 0 20px'}} borderTop={'1px solid black'} border={{ xl:'none'}} pb={{xl:'3rem'}} pt={{xl:'3rem'}} height={{xl:'22rem'}} _hover={{bgColor:'blue.400'}}>
            <h2>
              <AccordionButton p={{base:0, xl:'.5rem'}} height={{ xl:'16rem'}} border={{base:'.5px solid grey', xl:'none'}}>
                <Box as="span" flex='1' textAlign={{base:'center', xl:'left'}} width={{base:'12rem', xl: 'fit-content'}} pt={{base: 3, xl:'unset'}}>
                  <Heading fontFamily={'Dyna Puff'} fontSize={{base:'25px', md:'28px'}}>
                    {props.title}
                  </Heading>
                  <Text>{props.post}</Text>
                  <Text>{props.date}</Text>
                </Box>
              </AccordionButton>
            </h2>

            <AccordionPanel p={{base:'1rem 0 0 0', xl: '1rem'}} fontSize={'16px'} height={{ xl:'16rem'}} borderLeft={{xl:'2px solid black'}} textAlign={{xl: 'left'}} width={{base:'fit-content', xl:'fit-content'}}>
              {props.about}
              <ul>&nbsp;</ul>
              <li>{props.line1}</li>
              <li>{props.line2}</li>
              <li>{props.line3}</li>
              <li>{props.line4}</li>
            </AccordionPanel>
          </AccordionItem>
    </Box>
   );
};
 

const Experience = () => {
  return ( 
    <Box textAlign={'center'} py={{base:'4rem', sm:'6.5rem', md:'10rem', lg:'6rem' }}  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} minHeight={{lg:'600px'}} id={'experience'} maxW={'1500px'} margin={'auto'}  background={'linear-gradient( to bottom, rgb(55,156,215)  10%, white 90%)'} >
       <SectionHeading 
          name='Experience'
          position='right'
        />
        <SectionSubHeading 
          name='Spaces where I have worked.'
          position='right'
        />

      <Box  p={0} borderRadius={'20px'} margin={'auto'}>
        <Accordion defaultIndex={[0]} reduceMotion display={'flex'} flexDirection={{base:'column', xl:'row'}} >
        <ExpAccordion 
          bgColor='blue.500'
          title='Frontend Developer'
          post='Freelance'
          date='Nov 2022 – Present'
          about='Collaborate with other devs in building landing pages, ecommerce website, blog etc.'
          line1='Implement several websites, and web applications: ecommerce and landing pages from concept to deployment.'
          line2='Implement responsive design techniques to ensure websites were optimized for mobile devices.'
          line3='Convert product designs into high-quality code and responsive interfaces for a great user experience.'
          line4='Collaborate with product team members to implement new feature developments.'
        />
        
        <ExpAccordion 
          bgColor='blue.600'
          title='Implementation Specialist'
          post='Sendme.ng'
          date='Jun 2022 – present'
          about='Sendme.ng (YC W22) is a startup backed by Y Combinators and Voltron Capital, with the goal of decentralizing the distribution of animal protein from production through to consumers using artificial intelligence and data analytics.'
          line1='Collaborate with clients to understand their needs and requirements, and provided recommendations for design         and functionality.'
          line2='Test software, and supported bug resolution on apps and software.'
          line3='Manage inventory on the software systems which helped increase customer satisfaction by 70%.'
          line4='Installed and educated on software systems and all necessary components.'
        />
        </Accordion>
      </Box>
    </Box>
   );
}
 
export default Experience;