import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import BookMarkedCard from "../components/BookMarkedCard";
import { dashBoardURL, usersURL } from "../apiRequest";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
export default function DashBoard() {
  const [ bookmark, setBookmark ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false)
  // let user;
  // try {
  //     user = JSON.parse(localStorage.getItem('user')) || { bookmark: [] }; // Ensure user is an object with a bookmark property
  // } catch (error) {
  //     console.error("Error parsing user data from localStorage:", error);
  //     user = { bookmark: [] }; // Fallback value in case of parsing error
  // }
  let  user=JSON.parse(localStorage.getItem('user')) ;

  useEffect(() => {
    console.log(bookmark);
    const fetchBookmark = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${dashBoardURL}/${user}`);
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
    fetchBookmark();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <>
        <Stack padding={4} spacing={1}>
      <Skeleton height='40px' isLoaded={isLoaded}>
        <Box>Hello {user}</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        isLoaded={isLoaded}
        bg='green.500'
        color='white'
        fadeDuration={1}
      >
        <Box>few sesaconds please</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        isLoaded={isLoaded}
        fadeDuration={4}
        bg='blue.500'
        color='white'
      >
        <Box>Please wait its Loading</Box>
      </Skeleton>

      <Box textAlign='center'>
        <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
      </Box>
    </Stack>
        <Heading>Loading...</Heading>
        </>
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
            >
             { `HI, ${user.username} your BookMarked News`}
            </Heading>
            <SimpleGrid
              columns={[1, 2, 4]}
              spacing="20px"
              px={["10px", "50px", "100px"]}
            >
             
            <BookMarkedCard bookmark={bookmark}  />
             
            </SimpleGrid>
          </Box>
        </>
      )}
      <Footer />
    </>
  );
}
