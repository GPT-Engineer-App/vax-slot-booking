import React, { useState } from "react";
import { ChakraProvider, Container, VStack, Heading, Button, Text, Input, Box, FormControl, FormLabel, Link, extendTheme } from "@chakra-ui/react";
import { FaUserCircle, FaLock, FaCalendarAlt, FaHome, FaInfoCircle, FaUserPlus, FaTools } from "react-icons/fa";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

const Index = () => {
  const [page, setPage] = useState("home");

  const navigate = (page) => {
    setPage(page);
  };

  return (
    <ChakraProvider theme={theme}>
      <Container centerContent p={4} bg="brand.700" color="white">
        <VStack spacing={4}>
          <Heading>Vaccination Slot Booking</Heading>
          <ButtonGroup navigate={navigate} />
          {page === "home" && <Home />}
          {page === "about" && <About />}
          {page === "login" && <Login />}
          {page === "signup" && <Signup />}
          {page === "admin" && <AdminDashboard />}
          {page === "booking" && <SlotBooking />}
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

const ButtonGroup = ({ navigate }) => (
  <VStack>
    <Button onClick={() => navigate("home")} leftIcon={<FaHome />}>
      Home
    </Button>
    <Button onClick={() => navigate("about")} leftIcon={<FaInfoCircle />}>
      About
    </Button>
    <Button onClick={() => navigate("login")} leftIcon={<FaUserCircle />}>
      Login
    </Button>
    <Button onClick={() => navigate("signup")} leftIcon={<FaUserPlus />}>
      Signup
    </Button>
    <Button onClick={() => navigate("admin")} leftIcon={<FaTools />}>
      Admin Dashboard
    </Button>
    <Button onClick={() => navigate("booking")} leftIcon={<FaCalendarAlt />}>
      Book Slot
    </Button>
  </VStack>
);

const Home = () => <Text>Welcome to the Vaccination Slot Booking System. Today's date is {new Date().toLocaleDateString()}.</Text>;

const About = () => <Text>This system helps users to book vaccination slots easily.</Text>;

const Login = () => (
  <Box>
    <FormControl>
      <FormLabel>Username</FormLabel>
      <Input placeholder="Enter your username" />
    </FormControl>
    <FormControl mt={4}>
      <FormLabel>Password</FormLabel>
      <Input placeholder="Enter your password" type="password" />
    </FormControl>
    <Button mt={4} leftIcon={<FaUserCircle />} _hover={{ bg: "brand.800" }}>
      Login
    </Button>
  </Box>
);

const Signup = () => (
  <Box>
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input placeholder="Enter your email" />
    </FormControl>
    <FormControl mt={4}>
      <FormLabel>Password</FormLabel>
      <Input placeholder="Enter your password" type="password" />
    </FormControl>
    <Button mt={4} leftIcon={<FaLock />}>
      Signup
    </Button>
  </Box>
);

const AdminDashboard = () => <Text>Admin Dashboard: Manage bookings and users here.</Text>;

const SlotBooking = () => (
  <Box>
    <FormControl>
      <FormLabel>Select Date</FormLabel>
      <Input type="date" />
    </FormControl>
    <Button mt={4} leftIcon={<FaCalendarAlt />}>
      Book Slot
    </Button>
  </Box>
);

export default Index;
