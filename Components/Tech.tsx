import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

const TechImage = (props: any) => {
  return ( 
    <Box position={'relative'} display={'flex'} justifyItems={'center'} alignItems={'center'} bgColor={'white'} p={'.8rem'}>
      <Image 
        src={props.src}
        alt={props.alt}
        loading={'lazy'}
        width={180}
        height={140}
      />
      </Box>
   );
}
 
const Tech = () => {
  return ( 
    <Box bgColor={'black'} py={'2rem'} px={'1rem'} minHeight={'100vh'} color={'whatsapp.700'}>
      <Heading>Tech Stack</Heading>

      <Box display={{md:'grid'}} gap={'1rem'} gridTemplateColumns={{md:'auto auto auto'}} justifyItems={'center'} alignItems={'center'} m={'auto'}>
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

        <TechImage 
          src='/thirteen.svg'
          alt='HTML'
        />
      </Box>

    </Box>
   );
}
 
export default Tech;