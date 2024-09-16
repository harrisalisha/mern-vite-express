
import React, { useState } from 'react'
import  {Container, Heading , VStack, Box, Input,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'

const CreatePage2 = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    // ... potentially many more individual properties
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={4}>
      <Heading  as='h1' size='xl' textAlign={"center"} mb={8}>
        Create New User
      </Heading>

      <Box w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"lg"}>
          <VStack spacing={4}>
              <Input placeholder='First Name' 
                name="firstName"
                value={formData.firstName} 
                onChange={handleChange}/>

              <Input placeholder='Last Name' 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}/>

              <Input placeholder='Email' 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}/>

               <Input placeholder='Address' 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}/>    

              <Button w={"full"} >Add New User</Button>    

          </VStack>
        
      </Box>
   
      </VStack>
    </Container>
  )
}

export default CreatePage2