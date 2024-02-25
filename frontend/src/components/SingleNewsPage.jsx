import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,

  Box,
  Heading,
  Image,
  Text,
  Button,

  Flex,

  Card,
  CardHeader,
  CardBody,

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "./Navbar"
import '../index.css' ;
export default function SingleNewsPage() {
  const { category, id } = useParams();
  const[singleNews,setSingleNews]=useState([]);
  const[comment,setComment]=useState('');
  const toast = useToast();
  const [colorLike, setColorLike] = useState('lightblue');
  const [colorComment, setColorComment] = useState('lightblue');
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

    function splitContentIntoParts(content, numParts) {
      const words = content.split(' ');
      const wordsPerPart = Math.ceil(words.length / numParts);
      const parts = [];
    
      for (let i = 0; i < numParts; i++) {
        const start = i * wordsPerPart;
        const end = (i + 1) * wordsPerPart;
        let part = words.slice(start, end).join(' ');
    
        // Ensure the line ends with a dot
        if (!part.trim().endsWith('.')) {
          part += ',';
        }
    
        parts.push(part);
      }
    
      return parts;
    }
    const handleLike=()=>{
      setColorLike(prev=>prev==='blue'?'lightblue':'blue');
    }
   const handleComment=()=>{
      setColorComment(prev=>prev==='blue'?'lightblue':'blue');
   }
    
  return (
    <>
    <Navbar />
     <Card  borderRadius="md" height={'auto'} marginTop={'12px'}>
      <Flex direction="column"  m="auto">
        
        <CardHeader boxShadow={' rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;'}>
            <Heading as="h2" size="md" mb="2" color={'blue'}>
              {singleNews.title}
            </Heading>
            <Text>
              {singleNews.description}
            </Text>
        </CardHeader>
        <CardBody >
          <Flex flexDirection={'column'} >
            <Text fontSize={'large'} fontWeight={'500'} borderLeft={'3px solid red'} paddingLeft={'5px'} marginBottom={'5px'}>{singleNews.author ? singleNews.author: 'pavan'} ---BBCNEWS</Text>
          <Image src={singleNews.urlToImage} alt="News Image" borderRadius="md" objectFit='cover' w={"70%"} h={"50%"} margin={'auto'}/>
          <Text fontFamily={'serif'}>
          {singleNews.content && (
                <>
                  {splitContentIntoParts(singleNews.content, 3).map((part, index) => (
                    <Text key={index} padding={'3px'}>{part.trim().endsWith(',') ? part.trim() : part.trim() + '.'} </Text>
                  ))}
                </>
              )}
            </Text>
          </Flex>
        </CardBody>
        
        <Flex align="center" mt="4" >
          <Button flex="1"  backgroundColor={'white'} _hover={'backgroundColor:none'} onClick={handleLike} >
          <FontAwesomeIcon icon={faThumbsUp} size="2xl" style={{ colorLike }} onClick={handleLike} />
          </Button> 
          <Popover>
            <PopoverTrigger>
            <Button flex="1" backgroundColor={'white'} _hover={'backgroundColor:none'}  >
            <FontAwesomeIcon icon={faComment} size="2xl"  style={{colorComment}} onClick={handleComment} />
            </Button>
            </PopoverTrigger>
            <PopoverContent width={'100vw'} backgroundColor={'white'} color='grey'>
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
          <Button flex="1" onClick={onOpen}  >
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
