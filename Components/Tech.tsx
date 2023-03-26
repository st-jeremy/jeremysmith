import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

const TechImage = (props: any) => {
  return ( 
    <Box position={'relative'} display={'block'}>
      <Image 
        src={props.src}
        alt={props.alt}
        loading={'lazy'}
        width={180}
        height={160}
      />
      </Box>
   );
}
 
const Tech = () => {
  return ( 
    <Box bgColor={'white'} py={'2rem'} px={'3rem'} height={'100vh'}>
      <Heading>Tech Stack</Heading>
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
        src='/TypeScript.png'
        alt='TypeScript'
      />
      <TechImage 
        src='/react.png'
        alt='React'
      />
      <TechImage 
        src='/Nextjs.png'
        alt='Next.JS'
      />

      <TechImage 
        src='/thirteen.svg'
        alt='Material UI'
      />
      <TechImage 
        src='/chakra.png.svg'
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