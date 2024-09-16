import { Container, Flex, HStack, Button, Text , 
  useColorMode} from '@chakra-ui/react';//centered the content
import React from 'react'
import { Link } from 'react-router-dom';

import {  CiSquarePlus } from "react-icons/ci";
import { FaMoon, FaSun } from "react-icons/fa";
//icon you can choose react-icons or install cakra-icons

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
 
 

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex h={16} 
        alignItems={"center"}  
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"        
        }}
        >
         
          <Text
           fontSize={{base:"22", sm:"28"}}
           textTransform={"uppercase"} textAlign={"center"} 
           bgGradient='linear(to-l, #7928CA, #FF0080)'
           bgClip='text'
           fontWeight='extrabold'
           >
            <Link to="/">
              Products store
            </Link>
          </Text>
        
          <HStack spacing={2} alignItems={"center"} >
              <Link to="/create">
              <Button>
                <CiSquarePlus fontSize={20}/>
              </Button>
             </Link>

             <Link to="/">
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ?   <FaSun fontSize={20}/> :   <FaMoon fontSize={20}/> }          
              </Button>
             </Link>
          </HStack>

      </Flex>

    </Container>
  )
}

export default Navbar