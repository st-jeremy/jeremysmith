import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

const TechImage = (props: any) => {
  return ( 
    <Box position={'relative'} display={'block'}>
      <Image 
        src={props.src}
        alt={props.alt}
        loading={'lazy'}
        fill
        
      />
      </Box>
   );
}
 
const Tech = () => {
  return ( 
    <Box bgColor={'red'} py={'2rem'} px={'3rem'} height={'100vh'}>
      <Heading>Tech Stack</Heading>
      <TechImage 
        src='/thirteen.svg'
        alt='HTML'
      />
      <TechImage 
        src='/thirteen.svg'
        alt='CSS'
      />
      <TechImage 
        src='/thirteen.svg'
        alt='JavaScript'
      />
      <TechImage 
        src='/thirteen.svg'
        alt='TypeScript'
      />
      <TechImage 
        src='/thirteen.svg'
        alt='React'
      />
      <TechImage 
        src='/thirteen.svg'
        alt='Next.JS'
      />


      <TechImage 
        src='/thirteen.svg'
        alt='Material UI'
      />
      <TechImage 
        src='/thirteen.svg'
        alt='Chakra UI'
      />
      <TechImage 
        src='/thirteen.svg'
        alt='Tailwind'
      />

      <TechImage 
        src='/thirteen.svg'
        alt='HTML'
      />

    </Box>
   );
}
 
export default Tech;