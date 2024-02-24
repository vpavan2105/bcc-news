import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Heading,
  Image,
  Text,
  Button,
  Icon,
  IconButton,
  Flex,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleNewsPage() {
  const { category, id } = useParams();
  const[singleNews,setSingleNews]=useState([]);
  const[comment,setComment]=useState('');
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
    ///// userparams
    useEffect(()=>{
       axios.get(`https://testing-arqw.onrender.com/${category}/${id}`)
       .then((res)=>res.data).then((data)=>setSingleNews(data))
    },[]);
    
    const handleInputComment=async(e)=>{
      e.preventDefault();
 
      axios.get(`https://testing-arqw.onrender.com/${category}/${id}`)
      .then((res) => res.data)
      .then((data) => {

            const updateComment = [...data.comments, { user:"pavan",comment:comment }];
            axios.patch(`https://testing-arqw.onrender.com/${category}/${id}`, { comments: updateComment })
              .then(response => {
                // Check if status code is in the range 200-299
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                  console.log('User comment updated successfully');
                  setSingleNews(response.data)
                } else {
                  throw new Error('Failed to update user bookmark');
                }
              })
              .catch(error => {
                console.error('Error updating user bookmark:', error);
              });
            }
        )
    .catch((err) => {
      console.error(err);
    });
    setComment('');
    }


  return (
    <>
     <Card boxShadow="md" borderRadius="md" height={'auto'}>
      <Flex direction="column" w="80%" m="auto">
        
        <CardHeader>
            <Heading as="h2" size="md" mb="2">
              {singleNews.title}
            </Heading>
            <Text>
              {singleNews.description}
            </Text>
        </CardHeader>
        <CardBody>
          <Flex direction={{ base: "column", md: "row" }} >
          <Image src={singleNews.urlToImage} alt="News Image" borderRadius="md" objectFit='cover' w={{base:"100%",md:"50%"}} margin={'auto'}/>
          <Text marginLeft={'10px'}>{singleNews.content}</Text>
          </Flex>
        </CardBody>
        
        <Flex align="center" mt="4">
          <Button flex="1"  border={'1px solid blue'} >
            Like
          </Button> 
          <Popover>
            <PopoverTrigger>
            <Button flex="1"  border={'1px solid blue'} >
             Comment
            </Button>
            </PopoverTrigger>
            <PopoverContent width={'100%'} backgroundColor={'white'} color='grey'>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Comments</PopoverHeader>
              <PopoverBody>
                  {singleNews && singleNews.comments ? (
                    singleNews.comments.map((obj) => (
                      <Box key={obj.id}>
                        <Text fontSize="md">{obj.user}</Text>
                        <Text>{obj.comment}</Text>
                        
                      </Box>
                     
                    ))
                  ) : (
                    <Text>No comments available</Text>
                  )}
                     <InputGroup size='md'>
                        <Input
                          pr='4.5rem'
                          type='text' 
                          placeholder='Enter password'
                          value={comment} onChange={(e)=>setComment(e.target.value)}
                        />
                        <InputRightElement width='4.5rem' >
                          <Button h='1.75rem' size='sm' onClick={handleInputComment}>
                            Add
                          </Button>
                        </InputRightElement>
                      </InputGroup>
              </PopoverBody>

            </PopoverContent>
          </Popover>
          <Button flex="1" onClick={onOpen}  border={'1px solid blue'}>
            Share
          </Button>
          <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Share</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
           <Text>Insta</Text>
           <Text>Whatsapp</Text>
           <Text>Mail</Text>
           <Button onClick={() => toast({
          title: 'Send Successfully.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
         }
       >
      Show Toast
    </Button>1

          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </Flex>
      </Flex>
    </Card>
     
    </>
  )
}
