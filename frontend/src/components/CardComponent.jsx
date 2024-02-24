import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch,useSelector } from 'react-redux'
import { addNewsToBookmark } from "../apiRequest";

export default function CardComponent({newsItem}) {
  const bookmark  = useSelector( state => state.bookmark ) ;
  const navigate = useNavigate();
  const dispatch = useDispatch() ;
 const [userData,setUserData] =useState([]);
  const handleNavigation = () => {
    navigate(`/${newsItem.category_section}/${newsItem.id}`);
  };
  useEffect(()=>{
    async function fetchUser(){
      try{
        let res = await fetch(`https://testing-arqw.onrender.com/users/${1}`);
        let data = await res.json();
        localStorage.setItem('user',data);
        setUserData(data.bookmark);
      }catch(e){
        console.log(e) ;
      }
    }
    fetchUser();
  },[]);

  const handleAddBookMark = () => {
    dispatch({type:"ADD",payload:newsItem}) ;
    addNewsToBookmark([...userData,newsItem]) ;
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
        <Button bgColor='black' color={"white"} size='xs' position={"relative"} left={"60%"} top={"-10px"} _hover={{opacity: 0.8}} onClick={handleAddBookMark}>
          Book Mark
        </Button>
      </Box>
    </>
  );
}
