import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { politicsURL } from '../apiRequest';
import CardComponent from '../components/CardComponent';
import TopCardComponent from '../components/MainHeaderComponent';
import MainHeaderComponent from '../components/MainHeaderComponent';


function HomePage() {

    const [topNews, setTopNews] = useState([]);
    // const [national, setNationaNews] = useState([]);
    // const [international, setInternationalNews] = useState([]);
    // const [morePolitics, setMorePoliticsNews] = useState([]);
    // const [relatedNews, setRelatedNews] = useState([]);
  
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchPoliticsNews = async () => {
        // setLoading(true);
        try{
          const response = await fetch(`${politicsURL}`);
          const data = await response.json();
          setTopNews(data.filter( item => item.category === "top-news" ? true:false ) )
        //   setNationaNews(data.filter( item => item.category === "national" ? true:false ) )
        //   setInternationalNews(data.filter( item => item.category === "international" ? true:false ) )
        //   setMorePoliticsNews(data.filter( item => item.category === "more-politics" ? true:false ) )
        //   setRelatedNews(data.filter( item => item.category === "related-news" ? true:false ) )
          console.log(data);
        //   setLoading(false);
        } catch (error) {
          console.log(error) ;
        //   setLoading(false);
        //   setError(true);
        }
      };
      fetchPoliticsNews();
    }, []);
    return (<>
        <Navbar />

        {/* <Box px={4}>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                >
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid>
        </Box>
        <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {topNews?.map((newsItem, index) => {
                    return <TopCardComponent newsItem={newsItem} key={index} />
                  })}
        </SimpleGrid> */}
        <MainHeaderComponent/>
        
        <Footer/>
        </>
    )
}

export default HomePage