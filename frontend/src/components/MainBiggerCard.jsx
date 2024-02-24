import { GridItem, Text } from '@chakra-ui/react'
import React from 'react'

export default function MainBiggerCard({item}) {
    console.log(item) ;
  return (<>
    <GridItem
        rowSpan={[1, 1, 2]} colSpan={[1, 1, 2]}
        overflow="hidden"
        cursor={"pointer"}
        borderRadius={"10px"}
        backgroundImage={`url(${item.urlToImage})`}
        // backgroundImage={"url(https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg)"}
        backgroundSize="cover"
        backgroundPosition="center"
    >
        <Text position={"relative"} top={"70%"} noOfLines={3} maxW="calc(100% - 40px)" p={"10px"} color={"white"} fontWeight={"bold"} fontSize={["12px", "16px", "18px"]} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, incidunt. Lorem ipsum dolor sit amet. </Text>
    </GridItem>
  </>
  )
}
