import {  Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux'

export default function BookMarkedCard({newsItem}) {
  const navigate = useNavigate();
  const dispatch = useDispatch() ;
  console.log(newsItem)
  const handleNavigation = () => {
    navigate(`/${newsItem.category_section}/${newsItem.id}`);
  };
  const handleDeleteNews = () => {
    dispatch({type:"DELETE",payload:newsItem}) ;
  }
 
  return (
    <>
      <Box
        key={newsItem.id}
        bg="white"
        shadow="md"
        borderRadius="md"
        overflow="hidden"
        borderBottom={"2px solid blue"}
        cursor={"pointer"}
       
      >
        <Image
          src={newsItem.urlToImage}
          alt={newsItem.title}
          objectFit="cover"
          width="100%"
          height="200px"
          onClick={handleNavigation}
        />
        <Box p="6"  onClick={handleNavigation}>
          <Heading as="h3" size="md" mb="2" noOfLines={2}>
            {newsItem.title}
          </Heading>
          <Text fontSize="sm" color="gray.600" noOfLines={3}>
            {newsItem.description}
          </Text>
        </Box>
        <Button bgColor='black' color={"white"} size='xs' position={"relative"} left={"60%"} top={"-10px"} _hover={{opacity: 0.8}} onClick={handleDeleteNews}>
          Delete 
        </Button>
      </Box>
    </>
  );
}
