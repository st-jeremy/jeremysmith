import { Box } from "@chakra-ui/react";
import MultiCarousel from "./MultiCarosel";
import ProjectCard from "./ProjectCard";

const LiveProjects = () => {
  return ( 
    <Box gap={'3rem'} display={{base:'flex', md: 'grid'}} flexDir={'column'} alignItems={'center'} gridTemplateColumns={{md:'auto auto', lg: 'auto auto auto'}}>
        <MultiCarousel
          content= {
            <>
            
        </>
      }
    />
      </Box>
   );
}
 
export default LiveProjects;