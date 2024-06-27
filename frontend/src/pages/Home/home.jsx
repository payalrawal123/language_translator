import { Box, Button , Flex, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
export const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <Box backgroundImage="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"
      width="100%" h="550px"
      backgroundPosition="center"
      backgroundSize="cover" 
      >
        <Text fontSize="45px" pt="150px" color="white" textAlign="center">Let's Translet The Language</Text> <br />
        <Button ml="45%" size='lg'colorScheme='red' p="20px" onClick={() => navigate("/signup")}>Get Started</Button>
      
      </Box>
      <Footer/>
    </>
  );
};
