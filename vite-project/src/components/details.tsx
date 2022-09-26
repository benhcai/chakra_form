import {
  Heading,
  VStack,
  Text,
  Grid,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, sm: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Your details</Heading>
        <Text>If you already have an account, click here</Text>
      </VStack>
      <Grid>
        <SimpleGrid columns={2} columnGap={3} rowGap={6}>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="John" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Snow" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="123 Abc Street" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="Bondi" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value="usa">United States of America</option>
                <option value="uae">United Arabs</option>
                <option value="cn">China</option>
                <option value="au">Austaila</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to billing</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button variant="primary" size="lg" width="full">
              Place order
            </Button>
          </GridItem>
        </SimpleGrid>
      </Grid>
    </VStack>
  );
};

export default Details;
