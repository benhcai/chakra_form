import {
  Center,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  GridItem,
  Grid,
  Box,
  Flex,
  Stack,
  Button,
  Divider,
  HStack,
  Image,
  AspectRatio,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading>Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme
          </Button>
        </Text>
      </VStack>

      <HStack width="full" spacing={6} alignItems="center">
        <AspectRatio ratio={1} width={24}>
          <Image
            src="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg"
            alt="img"
          />
        </AspectRatio>
        <Stack
          spacing={0}
          justifyContent="space-between"
          width="full"
          direction="row"
          alignItems="center"
        >
          <VStack spacing={0} alignItems="flex-start" width="full">
            <Heading size="md">Penny board</Heading>
            <Text>RSTRS29128</Text>
          </VStack>
          <Heading size="sm" textAlign={"end"}>
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack alignItems="stretch" width="full" spacing={4}>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <Divider></Divider>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$119.00</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
