import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { Divider, SimpleGrid } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import { entertainmentURL } from "../apiRequest";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import BookMarkedCard from "../components/BookMarkedCard";
function DashBoard() {

  const bookmark  = useSelector( state => state.bookmark ) ;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

  }, [bookmark]);

  return (
    <>
      <Navbar />
      {loading ? (
          <Heading>Loading...</Heading>
        ) : error ? (
          <Heading>Error...</Heading>
        ) : ( <>
              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Saved News
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {bookmark?.map((newsItem, index) => {
                    return <BookMarkedCard newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>
              </>
        )
      }
      <Footer/>
    </>
  );
}
export default DashBoard;
