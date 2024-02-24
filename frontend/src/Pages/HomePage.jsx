import React, { Fragment, useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Grid, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import {   fetchBusinessNews, fetchEntertainmentNews, fetchSportsNews, fetchTechnologyNews, generalURL } from "../apiRequest";
import MainSmallerCards from "../components/MainSmallerCards";
import CardComponent from "../components/CardComponent";

function HomePage() {
  const [firstTopNews, setFirstTopNews] = useState({});
  const [otherTopNews, setOtherTopNews] = useState([]);

  const [firstTechnologyNews, setFirstTechnologyNews] = useState({});
  const [otherTechnologyNews, setOtherTechnologyNews] = useState([]);

  const [firstBusinessNews, setFirstBusinessNews] = useState({});
  const [otherBusinessNews, setOtherBusinessNews] = useState([]);

  const [firstEntertainmentNews, setFirstEntertainmentNews] = useState({});
  const [otherEntertainmentNews, setOtherEntertainmentNews] = useState([]);

  const [national, setNationaNews] = useState([]);
  const [international, setInternationalNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
 
    fetchSportsNews()
    .then((data) => {
      console.log(data);
      setFirstTopNews(data[0]);
      setOtherTopNews(data.slice(1, 5));
    })
    
    fetchTechnologyNews()
    .then((data) => {
      console.log(data);
      setFirstTechnologyNews(data[0]);
      setOtherTechnologyNews(data.slice(1, 5));
    })

    fetchBusinessNews()
    .then((data) => {
      console.log(data);
      setFirstBusinessNews(data[0]);
      setOtherBusinessNews(data.slice(1, 5));
    })

    fetchEntertainmentNews()
    .then((data) => {
      console.log(data);
      setFirstEntertainmentNews(data[0]);
      setOtherEntertainmentNews(data.slice(1, 5));
    })

    const fetchPoliticsNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${generalURL}`);
        const data = await response.json();
        setNationaNews(
          data.filter((item) => (item.category === "national" ? true : false))
        );
        setInternationalNews(
          data.filter((item) =>
            item.category === "international" ? true : false
          )
        );
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchPoliticsNews();
  }, []);
  return (
    <div>
      <Navbar />
      <Heading
        as="h1"
        size="xl"
        ml={["10px", "50px", "100px"]}
        textDecoration="underline"
      >
        Morning Headlines
      </Heading>
      <Grid
        h={["auto", "auto", "400px"]}
        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} // Adjusting row count for responsiveness
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} // Adjusting column count for responsiveness
        gap={4}
        px={["10px", "50px", "100px"]}
        py={["10px", "20px", "30px"]}
      >
        <GridItem
          rowSpan={[1, 1, 2]}
          colSpan={[1, 1, 2]}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"10px"}
          backgroundImage={`url(${firstTopNews.urlToImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text
            position={"relative"}
            top={"70%"}
            noOfLines={3}
            maxW="calc(100% - 40px)"
            p={"10px"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={["12px", "16px", "18px"]}
          >
            {firstTopNews?.title}
          </Text>
        </GridItem>

        {otherTopNews?.map((item, index) => {
          return <MainSmallerCards item={item} key={index} />;
        })}
      </Grid>

      <Heading
        as="h1"
        size="xl"
        ml={["10px", "50px", "100px"]}
        textDecoration="underline"
      >
        Breaking News For You - Space
      </Heading>
      <Grid
        h={["auto", "auto", "400px"]}
        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} // Adjusting row count for responsiveness
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} // Adjusting column count for responsiveness
        gap={4}
        px={["10px", "50px", "100px"]}
        py={["10px", "20px", "30px"]}
      >
        <GridItem
          rowSpan={[1, 1, 2]}
          colSpan={[1, 1, 2]}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"10px"}
          backgroundImage={`url(${firstTechnologyNews.urlToImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text
            position={"relative"}
            top={"70%"}
            noOfLines={3}
            maxW="calc(100% - 40px)"
            p={"10px"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={["12px", "16px", "18px"]}
          >
            {firstTechnologyNews?.title}
          </Text>
        </GridItem>

        {otherTechnologyNews?.map((item, index) => {
          return <MainSmallerCards item={item} key={index} />;
        })}
      </Grid>


      <Heading
        as="h1"
        size="xl"
        ml={["10px", "50px", "100px"]}
        textDecoration="underline"
      >
        Breaking News For You - Business
      </Heading>
      <Grid
        h={["auto", "auto", "400px"]}
        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} // Adjusting row count for responsiveness
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} // Adjusting column count for responsiveness
        gap={4}
        px={["10px", "50px", "100px"]}
        py={["10px", "20px", "30px"]}
      >
        <GridItem
          rowSpan={[1, 1, 2]}
          colSpan={[1, 1, 2]}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"10px"}
          backgroundImage={`url(${firstBusinessNews.urlToImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text
            position={"relative"}
            top={"70%"}
            noOfLines={3}
            maxW="calc(100% - 40px)"
            p={"10px"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={["12px", "16px", "18px"]}
          >
            {firstBusinessNews?.title}
          </Text>
        </GridItem>

        {otherBusinessNews?.map((item, index) => {
          return <MainSmallerCards item={item} key={index} />;
        })}
      </Grid>

      <Heading
        as="h1"
        size="xl"
        ml={["10px", "50px", "100px"]}
        textDecoration="underline"
      >
        Breaking News For You - Entertainment
      </Heading>
      <Grid
        h={["auto", "auto", "400px"]}
        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} // Adjusting row count for responsiveness
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} // Adjusting column count for responsiveness
        gap={4}
        px={["10px", "50px", "100px"]}
        py={["10px", "20px", "30px"]}
      >
        <GridItem
          rowSpan={[1, 1, 2]}
          colSpan={[1, 1, 2]}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"10px"}
          backgroundImage={`url(${firstEntertainmentNews.urlToImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text
            position={"relative"}
            top={"70%"}
            noOfLines={3}
            maxW="calc(100% - 40px)"
            p={"10px"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={["12px", "16px", "18px"]}
          >
            {firstEntertainmentNews?.title}
          </Text>
        </GridItem>

        {otherEntertainmentNews?.map((item, index) => {
          return <MainSmallerCards item={item} key={index} />;
        })}
      </Grid>


      <Box as="section" py="5" bg="gray.100">
            <Heading
              as="h1"
              size="xl"
              ml={["10px", "50px", "100px"]}
              mb="5"
              textDecoration="underline"
            >
              National Headlines
            </Heading>
            <SimpleGrid
              columns={[1, 2, 4]}
              spacing="20px"
              px={["10px", "50px", "100px"]}
            >
              {national?.map((newsItem, index) => {
                return <CardComponent newsItem={newsItem} key={index} />;
              })}
            </SimpleGrid>
          </Box>

          <Box as="section" py="5" bg="gray.100">
            <Heading
              as="h1"
              size="xl"
              ml={["10px", "50px", "100px"]}
              mb="5"
              textDecoration="underline"
            >
              International Headlines
            </Heading>
            <SimpleGrid
              columns={[1, 2, 4]}
              spacing="20px"
              px={["10px", "50px", "100px"]}
            >
              {international?.map((newsItem, index) => {
                return <CardComponent newsItem={newsItem} key={index} />;
              })}
            </SimpleGrid>
          </Box>

      <Footer />
    </div>
  );
}

export default HomePage;
