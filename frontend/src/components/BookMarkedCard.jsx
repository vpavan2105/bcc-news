import {  Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { deleteNewsFromBookmark,dashBoardURL } from "../apiRequest";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookMarkedCard({bookmarkData}) {
  const navigate = useNavigate();
  const dispatch = useDispatch() ;
  const [addnewsItems,setAddNewsItems]=useState(bookmarkData)
  const handleNavigation = () => {
    navigate(`/${newsItem.category_section}/${newsItem.id}`);
  };
  useEffect(()=>{
   
  })

  const handleDeleteNews = async(id) => {
    let  user=JSON.parse(localStorage.getItem('user')) ;

  
    const bookmarkItem = bookmarkData.filter(bookmark => bookmark.id !== id);

     deleteNewsFromBookmark(bookmarkItem,user).then((res)=>res.data).then((data)=>setAddNewsItems(data)).catch((err)=>console.log(err));

    console.log(bookmarkItem);

  }
 
  return (

    <>
     {addnewsItems?.map((newsItem, index) => {
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
        <Box height={'160px'}>
          <Box p="6"  onClick={handleNavigation}>
            <Heading as="h3" size="md" mb="2" noOfLines={2}>
              {newsItem.title}
            </Heading>
            <Text fontSize="sm" color="gray.600" noOfLines={3}>
              {newsItem.description}
            </Text>
          </Box>
        </Box>
        <Button bgColor='red' color={"white"} size='sm' position={"relative"} left={"70%"} top={"-10px"} _hover={{opacity: 0.8}} onClick={()=>handleDeleteNews(newsItem.id)}>
          Delete 
        </Button>
      </Box>
       })}
    </>
  );
}
