import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion, spring } from "framer-motion";

const TechImage = (props: any) => {
  return ( 
    <Box width={'fit-content'} objectFit={'contain'}>
      <Image 
        src={props.src}
        alt={props.alt}
        loading={'lazy'}
        width={70}
        height={60}
      />
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
      <Box py={{base:'2.5rem', }}  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} textAlign={'center'} minHeight={'50vh'} id={'tech'} fontFamily={'fantasy'}>
        <Heading textAlign={'center'} fontFamily={'fantasy'}>Tech Stack</Heading>
        <Text pb={'1rem'}>Tech worked with over time. Skilled at using the following software</Text>

        <Box 
          display={{base:'grid'}} 
          gap={'1rem'} 
          gridTemplateColumns={{base:'repeat(3, minmax(0, 1fr));'}} 
        >
          <TechImage 
            src='/HTML5.png'
            alt='HTML'
          />
          <TechImage 
            src='/CSS.png'
            alt='CSS'
          />
          <TechImage 
            src='/JavaScript.png'
            alt='JavaScript'
          />
          <TechImage 
          src='/react.png'
          alt='React'
          />
          <TechImage 
            src='/TypeScript.png'
            alt='TypeScript'
          />
          
          <TechImage 
            src='/Nextjs.png'
            alt='Next.JS'
          />
          <TechImage 
            src=''
            alt='Redux'
          />
          <TechImage 
          src='/tailwind.png'
          alt='Tailwind'
          />
          <TechImage 
            src='/mui.png'
            alt='Material UI'
          />
          <TechImage 
            src='/chakra.png'
            alt='Chakra UI'
          />
          <TechImage 
            src=''
            alt='Bootstrap'
          />
          <TechImage 
            src='/SCSS.png'
            alt='SCSS'
          />
          <TechImage 
            src=''
            alt='git'
          />
          <TechImage 
            src=''
            alt='Jira'
          />
          

        </Box>

      </Box>
    </motion.div>
   );
}
 
export default Tech;