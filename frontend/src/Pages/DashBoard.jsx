import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import BookMarkedCard from "../components/BookMarkedCard";
import { usersURL } from "../apiRequest";

export default function DashBoard() {
  const [ bookmark, setBookmark ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let user;
  try {
      user = JSON.parse(localStorage.getItem('user')) || { bookmark: [] }; // Ensure user is an object with a bookmark property
  } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      user = { bookmark: [] }; // Fallback value in case of parsing error
  }

  function deleteNewsItem(){
    
  }
  useEffect(() => {
    console.log(bookmark);
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${usersURL}/${user.id}`);
        const data = await response.json();
        console.log(data);
        setBookmark(data.bookmark); 
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Heading>Loading...</Heading>
      ) : error ? (
        <Heading>Error...</Heading>
      ) : (
        <>
          <Box as="section" py="5" bg="gray.100">
            <Heading
              as="h1"
              size="xl"
              ml={["10px", "50px", "100px"]}
              mb="5"
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
                return <BookMarkedCard newsItem={newsItem} key={index} />;
              })}
            </SimpleGrid>
          </Box>
        </>
      )}
      <Footer />
    </>
  );
}
