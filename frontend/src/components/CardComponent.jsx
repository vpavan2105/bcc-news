import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function CardComponent() {
  return (
    <>
      <Card maxW={["100%", "sm", "md", "lg"]} borderRadius={"5px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius={"5px 5px 0 0"}
            maxW={["100%", "sm", "md", "lg"]}
          />
          <Stack mt={["4", "6"]} spacing={["-2", "1"]}>
            <Heading fontSize={["14px", "14px", "16px", "18px"]}>Living room Sofa</Heading>
            <Text fontSize={["12px", "12px", "12px", "12px"]}>
              This sofa is perfect for modern tropical spaces, baroque inspired
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex justify="space-around"> 
            {/* <ButtonGroup spacing="2"> */}
              <Button variant="ghost" fontSize={["12px", "12px", "12px", "12px"]} colorScheme="blue" >
                  Save For Later
              </Button>
            {/* </ButtonGroup> */}
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
}
