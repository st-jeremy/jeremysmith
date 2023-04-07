import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
  Text
} from '@chakra-ui/react'

const ExpAccordion = (props:any) => {
  return ( 
    <Box p={0} borderRadius={'20px'}>
          <AccordionItem bgColor={props.bgColor} p={'1rem'} display={{base:'block', lg:'flex'}} borderRadius={{base:0, lg:'20px 0 0 0 20px'}} borderTop={'1px solid black'} border={{ lg:'none'}} pb={{lg:'3rem'}} pt={{lg:'3rem'}} height={{lg: '24rem'}} _hover={{bgColor:'blue.400'}}>
            <h2>
              <AccordionButton p={{base:0, lg:'.5rem'}} height={{lg:'20rem'}} border={{base:'.5px solid grey', lg:'none'}}>
                <Box as="span" flex='1' textAlign={{base:'center', lg:'left'}} minW={'4rem'} pt={{base: 3, lg:'unset'}}>
                  <Heading fontFamily={'fantasy'} fontSize={{base:'25px', md:'30px'}}>
                    {props.title}
                  </Heading>
                  <Text>{props.post}</Text>
                  <Text>{props.date}</Text>
                </Box>
              </AccordionButton>
            </h2>

            <AccordionPanel p={{base:'1rem 0 0 0', lg: '1rem'}} fontSize={'16px'} height={{lg:'18.5rem'}} borderLeft={{lg:'2px solid black'}} textAlign={{lg: 'left'}}>
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
    <Box textAlign={'center'} padding={{base:'2rem 1rem 3rem', md:'5rem 4rem 4rem', lg:'10rem 6rem 4rem'}} minHeight={{lg:'800px'}} id={'experience'} >
       <SectionHeading 
          name='Experience'
        />
        <SectionSubHeading 
          name='Spaces where I have worked.'
        />
      <Heading fontSize={{base:'30px', md:'40px'}} fontWeight={900} fontFamily={'fantasy'} mb={5}>Experience</Heading>
      <Text fontSize={{base:'16px', md:'18px'}}>Spaces where I have worked.</Text>

      <Box mt={'1rem'} p={0} borderRadius={'20px'}>
        <Accordion defaultIndex={[0]} reduceMotion display={'flex'} flexDirection={{base:'column', lg:'row'}} >
        <ExpAccordion 
          bgColor='blue.500'
          title='Frontend Developer'
          post='Freelance'
          date='Nov 2022 – Present'
          about='Collaborated with other devs in building landing pages, ecommerce website, blog etc'
          line1='Implement several websites, and web applications: ecommerce and landing pages from concept to deployment'
          line2='Implement responsive design techniques to ensure websites were optimized for mobile devices.'
          line3=' Convert product designs into high-quality code and responsive interfaces for a great user experience.'
          line4='Collaborate with product team members to implement new feature developments'
        />
        
        <ExpAccordion 
          bgColor='blue.600'
          title='Implementation Specialist'
          post='Sendme.ng'
          date='Jun 2022 – present'
          about='Sendme.ng (YC W22) is a startup backed by Y Combinators and Voltron Capital, with the goal of decentralizing the distribution of animal protein from production through to consumers using artificial intelligence and data analytics'
          line1='Collaborate with clients to understand their needs and requirements, and provided recommendations for design         and functionality'
          line2='Test software, debugged issues, and supported bug resolution on apps and software'
          line3='Manage inventory on the software systems which helped increase customer satisfaction by 70%.'
          line4='Installed and educated on software systems and all necessary components'
        />
        </Accordion>
      </Box>
    </Box>
   );
}
 
export default Experience;