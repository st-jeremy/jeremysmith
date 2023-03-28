import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

const TechImage = (props: any) => {
  return ( 
    <Box width={'fit-content'}>
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
    <Box bgColor={'black'} py={'8rem'}  px={{base: '1.25rem', sm: '1.5rem', md: '3rem', lg: '6rem'}} textAlign={'center'} minHeight={'50vh'}>
      <Heading textAlign={'center'} pb={'1rem'}>Tech Stack</Heading>

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
          src='/chakra.png'
          alt='Chakra UI'
        />
        <TechImage 
          src='/tailwind.png'
          alt='Tailwind'
        />

      </Box>

    </Box>
   );
}
 
export default Tech;