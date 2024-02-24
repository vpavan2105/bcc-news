import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardComponent from "../components/CardComponent";
import { sportsURL } from "../apiRequest";
import Footer from "../components/Footer";

export default function Sports(){
  const [topNews, setTopNews] = useState([]);
  const [cricket, setCricket ] = useState([]);
  const [football, setFootball] = useState([]);
  const [basketball, setBasketball] = useState([]);
  const [extraSports, setExtraSports] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchrenderData = async () => {
    setLoading(true);
    try {
      let res = await fetch(`${sportsURL}`);
      let data = await res.json();
      console.log(data);
      setTopNews(data.filter( item => item.category === "top-news" ? true:false ) )
      setCricket(data.filter( item => item.category === "cricket" ? true:false ) )
      setFootball(data.filter( item => item.category === "football" ? true:false ) )
      setBasketball(data.filter( item => item.category === "basketball" ? true:false ) )
      setExtraSports(data.filter( item => item.category === "extra-sports" ? true:false ) )
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchrenderData();
  }, []);


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
                  Top News
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {topNews?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Cricket
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {cricket?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Football
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {football?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Basketball
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {basketball?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Extra Sports
                </Heading>
              
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {extraSports?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>
            </>
        )
      }
      <Footer />
    </>
  );
}
