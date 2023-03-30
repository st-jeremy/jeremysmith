import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text
  
} from '@chakra-ui/react'

const ExpAccordion = (props:any) => {
  return ( 
    <Box p={0} borderRadius={'20px'}>
          <AccordionItem bgColor={props.bgColor} p={'1rem'} display={{base:'block', lg:'flex'}} borderRadius={{base:0, lg:'20px 0 0 0 20px'}} borderTop={'1px solid black'} border={{ lg:'none'}} pb={{lg:'5rem'}} pt={{lg:'5rem'}}>
            <h2>
              <AccordionButton mt={{lg:'50%'}} pt={{lg:'0%'}} _hover={{bgColor:'blue'}} p={0}>
                <Box as="span" flex='1' textAlign={{base:'center', lg:'left'}} width={'100%'} pt={2}>
                  <Heading fontFamily={'fantasy'} fontSize={{base:'25px', md:'30px'}}>
                    {props.title}
                  </Heading>
                  <Text>{props.post}</Text>
                  <Text>{props.date}</Text>
                </Box>
              </AccordionButton>
            </h2>

            <AccordionPanel p={'1rem 0 0 0'} fontSize={'16px'} borderLeft={{lg:'2px solid black'}}>
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
      <Heading fontSize={{base:'30px', md:'40px'}} fontWeight={900} fontFamily={'fantasy'} mb={5}>Experience</Heading>
      <Text fontSize={{base:'16px', md:'18px'}}>Spaces where I have worked.</Text>

      <Box mt={'1rem'} p={0} borderRadius={'20px'}>
        <Accordion defaultIndex={[0]} reduceMotion display={'flex'} flexDirection={{base:'column', lg:'row'}} >
        <ExpAccordion 
          // bgColor='grey'
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
          // bgColor='grey'
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