import { Box, Image, Flex, Center, Spacer, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

const listOfLinks = [
  {
    to: "/",
    displayText: "Home",
    isVisible: true,
  },
  {
    to: "/translate",
    displayText: "Translate",
    isVisible: true,
  },
  {
    to: "/about",
    displayText: "About",
    isVisible: true,
  },
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex className="navflex" height="80px" width="100%" alignItems="center" px="100px">
      <Box>
        <Image width={90} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KynnbolZpBjAEEgNMvwMY4zcp2RSzlKIag&s" />
      </Box>
      <Spacer />
      <Center gap="60px">
        {listOfLinks.map((link) => (
          <NavLink
            className="nav"
            key={link.to}
            to={link.to}
            style={({ isActive }) => (isActive ? {  color:'blue' } : { color: "black" })}
          >
            {link.displayText}
          </NavLink>
        ))}
      </Center>
      <Spacer />
      <Box>
        <Button  colorScheme='blue'  onClick={() => navigate("/login")}>Login</Button>
        <Button colorScheme='blue' ml="30px" onClick={() => navigate("/signup")}>Register</Button>
      </Box>
    </Flex>
  );
}


export default Navbar;
