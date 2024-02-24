import { Box, Button, Grid, GridItem, Heading, Image, SimpleGrid, Text, calc } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MainHeaderComponent() {
  const mainSectionNews = useSelector( state => state.mainSectionNews)

  const navigate = useNavigate();
  const handleNavigation = () => {
    // navigate(`/${newsItem.id}`)
  }

  return (
    <>
      <Grid
         h={['auto', 'auto', '400px']}
        templateRows={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} // Adjusting row count for responsiveness
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} // Adjusting column count for responsiveness
        gap={4}
        px={["10px", "50px", "100px"]}
        py={["10px", "20px", "30px"]}
      >
        <GridItem
          rowSpan={[1, 1, 2]} colSpan={[1, 1, 2]}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"10px"}
          backgroundImage={`url(${mainSectionNews[0].urlToImage})`}
          // backgroundImage={"url(https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg)"}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text position={"relative"} top={"70%"} noOfLines={3} maxW="calc(100% - 40px)" p={"10px"} color={"white"} fontWeight={"bold"} fontSize={["12px", "16px", "18px"]} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, incidunt. Lorem ipsum dolor sit amet. </Text>
        </GridItem>

        <GridItem
          rowSpan={1} colSpan={1}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"5px"}
          backgroundImage={`url(${mainSectionNews[1].urlToImage})`}
          // backgroundImage={"url(https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg)"}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text position={"relative"} top={"60%"} noOfLines={3} maxW="calc(100% - 40px)" p={"10px"} color={"white"} fontWeight={"bold"} fontSize={["8px", "10px", "12px"]} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, incidunt. </Text>
        </GridItem>

        <GridItem
          rowSpan={1} colSpan={1}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"5px"}
          backgroundImage={`url(${mainSectionNews[2].urlToImage})`}
          // backgroundImage={"url(https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg)"}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text position={"relative"} top={"60%"} noOfLines={3} maxW="calc(100% - 40px)" p={"10px"} color={"white"} fontWeight={"bold"} fontSize={["8px", "10px", "12px"]} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, incidunt. </Text>
        </GridItem>

        <GridItem
          rowSpan={1} colSpan={1}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"5px"}
          backgroundImage={`url(${mainSectionNews[3].urlToImage})`}
          // backgroundImage={"url(https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg)"}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text position={"relative"} top={"60%"} noOfLines={3} maxW="calc(100% - 40px)" p={"10px"} color={"white"} fontWeight={"bold"} fontSize={["8px", "10px", "12px"]} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, incidunt. </Text>
        </GridItem>

        <GridItem
          rowSpan={1} colSpan={1}
          overflow="hidden"
          cursor={"pointer"}
          borderRadius={"5px"}
          backgroundImage={`url(${mainSectionNews[4].urlToImage})`}
          // backgroundImage={"url(https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg)"}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text position={"relative"} top={"60%"} noOfLines={3} maxW="calc(100% - 40px)" p={"10px"} color={"white"} fontWeight={"bold"} fontSize={["8px", "10px", "12px"]} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, incidunt. </Text>
        </GridItem>
        
      </Grid>
    </>
  );
}
