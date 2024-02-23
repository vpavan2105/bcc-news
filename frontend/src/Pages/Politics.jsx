import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
function Politics() {
  const [politicsNews, setPoliticsNews] = useState([]);
  useEffect(() => {
    const fetchPoliticsNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?category=politics&apiKey=2c8b641058b74a0e9be89b4ed7e79993"
      );
      const data = await response.json();
      setPoliticsNews(data.articles);
      console.log(data.articles);
    };
    fetchPoliticsNews();
  }, []);
  return (
    <>
      <Navbar />
      <Box as="section" py="5" bg="gray.100">
        <Heading as="h1" size="xl" textAlign="center" mb="5">
          Politics News
        </Heading>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing="20px"
          px={["10px", "50px", "150px"]}
        >
          {politicsNews.map((newsItem, index) => (
            <Box
              key={index}
              bg="white"
              shadow="md"
              borderRadius="md"
              overflow="hidden"
            >
              <Link href={newsItem.url} isExternal>
                <Image
                  src={newsItem.urlToImage}
                  alt={newsItem.title}
                  objectFit="cover"
                  width="100%"
                  height="200px"
                />
                <Box p="6">
                  <Heading as="h3" size="md" mb="2" noOfLines={2}>
                    {newsItem.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" noOfLines={3}>
                    {newsItem.description}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
export default Politics;
