import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CardComponent({newsItem}) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/news/${newsItem.id}`);
  }
  // {
  //   "id": 4,
  //   "username": "Saurabh",
  //   "email": "saurabh@123",
  //   "password": "2222"
  // },
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
        onClick={handleNavigation}
      >
        <Image
          src={newsItem.urlToImage}
          alt={newsItem.title}
          objectFit="cover"
          width="100%"
          height="200px"
        />
        <Box p="6">
          <Heading as="h3" size="md" mb="2" noOfLines={2}>
            {newsItem.title}
          </Heading>
          <Text fontSize="sm" color="gray.600" noOfLines={3}>
            {newsItem.description}
          </Text>
        </Box>
        <Button colorScheme='blue' size='xs' position={"relative"} left={"60%"} top={"-10px"}>
          Book Mark
        </Button>
      </Box>
    </>
  );
}
