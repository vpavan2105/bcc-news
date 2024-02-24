import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addNewsToBookmark } from "../apiRequest";

export default function CardComponent({newsItem,isAuth}) {
  const bookmark  = useSelector( state => state.bookmark ) ;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dispatch = useDispatch() ;
  const handleNavigation = () => {
    navigate(`/${newsItem.category_section}/${newsItem.id}`);
  };
  let user;
  try {
    user = JSON.parse(localStorage.getItem('user')) || { bookmark: [] }; // Ensure user is an object with a bookmark property
  } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      user = { bookmark: [] }; 
  }
  const handleAddBookMark = () => {
    if(isAuth){
      dispatch({type:"ADD_TO_BOOKMARK",payload:newsItem}) ;
      if (user.bookmark.some(item => item.id === newsItem.id && item.category_section === newsItem.category_section)) {
        alert("Already bookmarked")
      } else{
        user.bookmark = [...user.bookmark,newsItem] ;
        localStorage.setItem('user', JSON.stringify(user)) ;
        addNewsToBookmark([...user.bookmark],user) ;
      }
      
    }else{
      navigate("/login");
    }
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
        <Box p="6" onClick={handleNavigation}>
          <Heading as="h3" size="md" mb="2" noOfLines={2}>
            {newsItem.title}
          </Heading>
          <Text fontSize="sm" color="gray.600" noOfLines={3}>
            {newsItem.description}
          </Text>
        </Box>
        <Button bgColor='black' color={"white"} size={"sm"} position={"relative"} left={"60%"} top={"-10px"} _hover={{transform: "scale(1.05)"}} onClick={handleAddBookMark}>
          Book Mark
        </Button>
      </Box>
    </>
  );
}
