import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import { technologyURL } from "../apiRequest";
import Footer from "../components/Footer";
import MainSmallerCards from "../components/MainSmallerCards";
function Technology() {
  const [firstTopNews, setFirstTopNews] = useState({});
  const [otherTopNews, setOtherTopNews] = useState([]);
  const [techWorld, setTechWorld] = useState([]);
  const [modrenTech, setModrenTech] = useState([]);
  const [techWay, setTechWay] = useState([]);
  const [relatedNews, setRelatedNews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPoliticsNews = async () => {
      setLoading(true);
      try{
        const response = await fetch(`${technologyURL}`);
        const data = await response.json();
        const mainSectionDataArr = data.filter((item) =>
        item.category === "top-news" ? true : false
      );
      setFirstTopNews(mainSectionDataArr[0]);
      setOtherTopNews(mainSectionDataArr.slice(1, 5));
        setTechWorld(data.filter( item => item.category === "tech-world" ? true:false ) )
        setModrenTech(data.filter( item => item.category === "modren-tech" ? true:false ) )
        setTechWay(data.filter( item => item.category === "tech-way" ? true:false ) )
        setRelatedNews(data.filter( item => item.category === "related-news" ? true:false ) )
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
            templateRows={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]} // Adjusting row count for responsiveness
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ]} // Adjusting column count for responsiveness
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
              // backgroundImage={"url(https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg)"}
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

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Tech World Headlines
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {techWorld?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Modern Tech Headlines
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {modrenTech?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Tech Way Headlines
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {techWay?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Related News
                </Heading>
              
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {relatedNews?.map((newsItem, index) => {
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
export default Technology;
