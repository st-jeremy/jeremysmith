import { Box, Heading, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { motion, spring } from "framer-motion";

const TechImage = (props: any) => {
  return ( 
    <Box width={'fit-content'} objectFit={'contain'}>
      <Tooltip label={props.tooltip} aria-label='A tooltip' fontFamily={'fantasy'}>
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
      initial={{marginTop: '-3rem'}}
      whileInView={{marginTop: '0'}}
      viewport={{ once: true }}
      transition={spring}
    >
      <Box py={{base:'2.5rem', }}  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} textAlign={'center'}height={{base:'100vh', '2xl':'fit-content'}} id={'tech'}  maxWidth={'1500px'} fontFamily={'fantasy'}>

        <Heading textAlign={'center'} fontFamily={'fantasy'}>Tech Stack</Heading>
        <Text pb={'3rem'}>Tech worked with over time. Skilled at using the following software</Text>

        <Box 
          display={{base:'grid'}} 
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
            tooltip='Cascading Style Sheet'
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
          src='/tailwind.png'
          alt='Tailwind'
          tooltip='Tailwind'
          />
          <TechImage 
            src='/mui.png'
            alt='Material UI'
            tooltip='Material UI'
          />
          <TechImage 
            src='/chakra.png'
            alt='Chakra UI'
            tooltip='Chakra UI'
          />
          <TechImage 
            src='/bootstrap.png'
            alt='Bootstrap'
          />
          <TechImage 
            src='/SCSS.png'
            alt='SCSS'
          />
          <TechImage 
            src='/git.jpeg'
            alt='git'
          />
          <TechImage 
            src='/jira.png'
            alt='Jira'
          />
          

        </Box>

      </Box>
    </motion.div>
   );
}
 
export default Tech;