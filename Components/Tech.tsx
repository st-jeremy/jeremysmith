import { Box, Heading, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { motion, spring } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";

const TechImage = (props: any) => {
  return ( 
    <Box width={'fit-content'} objectFit={'contain'}>
      <Tooltip label={props.tooltip} aria-label='A tooltip' fontWeight={900} fontFamily={'fantasy'} bgColor={'rgb(26,54,93)'}>
        <Image 
          src={props.src}
          alt={props.alt}
          loading={'lazy'}
          width={100}
          height={60}
        />
      </Tooltip>
      </Box>
   );
}
 
const Tech = () => {
  return ( 
    <motion.div
      initial={{marginTop: '-5rem'}}
      whileInView={{marginTop: '0'}}
      viewport={{ once: false }}
      transition={spring}
    >
      <Box py={{base:'5rem', md:'6rem' }} background={'linear-gradient( to bottom, rgb(184,227,253) 0%, rgb(247,252,255) 80%)'} px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} textAlign={'center'} minHeight={{base:'60vh', '2xl':'fit-content'}} id={'tech'} maxWidth={'1500px'} m={'auto'}>

        <SectionHeading 
          name='Tech'
          position='left'
        />
        <SectionSubHeading 
          name='Skilled at the following software.'
          position='left'
        />

        <Box 
          display={'grid'} 
          gap={'1rem'} 
          gridTemplateColumns={{base:'repeat(3, minmax(0, 1fr))', sm: 'repeat(4, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))'}} 
          margin={'auto'}
          justifyItems={'center'}
          alignItems={'center'}
        >
          <TechImage 
            src='/HTML5.png'
            alt='HTML'
            tooltip='HyperText Markup Language'
          />

          <TechImage 
            src='/CSS.png'
            alt='CSS'
            tooltip='Cascading Style Sheets'
          />

          <TechImage 
            src='/JavaScript.png'
            alt='JavaScript'
            tooltip='JavaScript'
          />

          <TechImage 
          src='/react.png'
          alt='React'
          tooltip='React'
          />

          <TechImage 
            src='/TypeScript.png'
            alt='TypeScript'
            tooltip='TypeScript'
          />

          <TechImage 
            src='/Nextjs.png'
            alt='Next.JS'
            tooltip='Next.JS'
          />

          <TechImage 
            src='/redux.png'
            alt='Redux'
            tooltip='Redux'
          />

          <TechImage 
            src='/reactQuery.png'
            alt='React Query'
            tooltip='React Query'
          />

          <TechImage 
            src='/reactHookForm.png'
            alt='React Hook Form'
            tooltip='React Hook Form'
          />
          
          <TechImage 
          src='/axios.png'
          alt='Axios'
          tooltip='Axios'
        />

          <TechImage 
          src='/tailwindcss.png'
          alt='Tailwind CSS'
          tooltip='Tailwind CSS'
          />

          <TechImage 
            src='/bootstrap.png'
            alt='Bootstrap'
            tooltip='Bootstrap'
          />

          <TechImage 
            src='/mui.png'
            alt='Material UI'
            tooltip='Material UI'
          />

          <TechImage 
            src='/chakraui.png'
            alt='Chakra UI'
            tooltip='Chakra UI'
          />

          <TechImage 
            src='/sass.png'
            alt='SASS'
            tooltip='Syntactically Awesome Style Sheets'
          />

          <TechImage 
            src='/git.png'
            alt='git'
            tooltip='git'
          />

          <TechImage 
            src='/jira.png'
            alt='Jira'
            tooltip='Jira'
          />
        </Box>
      </Box>
    </motion.div>
  );
}
 
export default Tech;