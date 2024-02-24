import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CardComponent({newsItem}) {

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/${newsItem.category_section}/${newsItem.id}`);
  };

  const handleAddBookMark = () => {
    axios.get('https://testing-arqw.onrender.com/users/1')
      .then((res) => res.data)
      .then((data) => {
        const isItemInBookmark = data.bookmark.some(item => item.id === newsItem.id); 
        if(!isItemInBookmark){
              const updatedBookmark = [...data.bookmark, { ...newsItem }];
              axios.patch('https://testing-arqw.onrender.com/users/1', { bookmark: updatedBookmark })
                .then(response => {
                  // Check if status code is in the range 200-299
                  if (response.status >= 200 && response.status < 300) {
                    console.log('User bookmark updated successfully');
                  } else {
                    throw new Error('Failed to update user bookmark');
                  }
                })
                .catch(error => {
                  console.error('Error updating user bookmark:', error);
                });
              }else{
                alert("User bookmark already updated");
              }
        })
      .catch((err) => {
        console.error(err);
      });
     
    
  };
  
 
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
        <Button bgColor='black' color={"white"} size='xs' position={"relative"} left={"60%"} top={"-10px"} _hover={{opacity: 0.8}}>
          Book Mark
        </Button>
      </Box>
    </>
  );
}
