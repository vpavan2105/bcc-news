import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

import React from "react";

const Sport = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", gap: "16px", width: "30%" }}>
        <Card style={{ flex: "1" }}>
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "16px", width: "50%" }}
      >
        <Card style={{ flexBasis: "calc(45.333% - 2px)" }}>
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card style={{ flexBasis: "calc(45.333% - 2px)" }}>
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card style={{ flexBasis: "calc(45.333% - 2px)" }}>
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card style={{ flexBasis: "calc(45.333% - 2px)" }}>
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <div>
        ADVERTISEMENT
        <br></br>
        <Image
          objectFit="cover"
          src="https://tpc.googlesyndication.com/simgad/3097565753563870602"
          alt="Chakra UI"
        />
      </div>
    </div>
  );
};

export default Sport;
