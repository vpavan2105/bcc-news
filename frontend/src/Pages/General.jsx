import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { Divider, SimpleGrid } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import { generalURL } from "../apiRequest";
import Footer from "../components/Footer";
function General() {
  const [topNews, setTopNews] = useState([]);
  const [national, setNationaNews] = useState([]);
  const [international, setInternationalNews] = useState([]);
  const [IsraelGazaWar, setIsraelGazaWarNews] = useState([]);
  const [UkraineWar, setUkraineWarNews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPoliticsNews = async () => {
      setLoading(true);
      try{
        const response = await fetch(`${generalURL}`);
        const data = await response.json();
        setTopNews(data.filter( item => item.category === "top-news" ? true:false ) )
        setNationaNews(data.filter( item => item.category === "national" ? true:false ) )
        setInternationalNews(data.filter( item => item.category === "international" ? true:false ) )
        setIsraelGazaWarNews(data.filter( item => item.category === "Israel-Gaza-war" ? true:false ) )
        setUkraineWarNews(data.filter( item => item.category === "Ukraine-war" ? true:false ) )
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error) ;
        setLoading(false);
        setError(true);
      }
      
    };
    fetchPoliticsNews();
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
                  National Headlines
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {national?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
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
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Israel Gaza War
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {IsraelGazaWar?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Ukraine War
                </Heading>
              
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {UkraineWar?.map((newsItem, index) => {
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
export default General;
