import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "./cart";
import Details from "./details";
const Home = () => {
  return (
    <Container maxWidth={"container.xl"} padding={0}>
      <Flex
        h={["auto", "auto", "100vh"]}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details></Details>
        <Cart></Cart>
      </Flex>
    </Container>
  );
};

export default Home;
