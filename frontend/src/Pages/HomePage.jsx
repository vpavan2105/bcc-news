import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import {  sportsURL } from "../apiRequest";
import MainSmallerCards from "../components/MainSmallerCards";

function HomePage() {
  const [firstTopNews, setFirstTopNews] = useState({});
  const [otherTopNews, setOtherTopNews] = useState([]);
  useEffect(() => {
    const fetchPoliticsNews = async () => {
      try {
        const response = await fetch(`${sportsURL}`);
        let data = await response.json();

        data = data.filter((item) =>
          item.category === "top-news" ? true : false
        );
        console.log(data);
        setFirstTopNews(data[0]);
        setOtherTopNews(data.slice(1, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPoliticsNews();
  }, []);
  return (
    <>
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
      <Footer />
    </>
  );
}

export default HomePage;
