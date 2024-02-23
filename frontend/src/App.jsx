import { Box, SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import Sport from "./components/Sport";

function App() {
  return (
    <>
      <SimpleGrid columns={[2, null, 4]} spacing="40px" px={"150px"}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </SimpleGrid>
      <Sport />
    </>
  );
}

export default App;
