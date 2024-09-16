import React, { useState } from 'react'
import  {Container, Heading , VStack, Box, Input,
  useColorModeValue,
  Button,
  useToast
} from '@chakra-ui/react'
import { useProductStore } from '../store/product'




// Controlfrom in react has state, usestate
//dont really need <form> or onsubmit

//uncontrol usebuilt in form, example
/*<form onSubmit={handleSubmit}>
      <input type="text" name="inputName" />
      <button type="submit">Send</button>
    </form>*/

export default function CreatePage() {

  const toast = useToast()
  const [newProduct, setNewProduct] = useState({
    name: "",
    price:"",
    image: ""
  })

  const createProduct = useProductStore((state) => state.createProduct)
  //const {createProduct} = useProductStore() // From  product Store , zustand
  
  const handleAddProduct = async()=> {
      //console.log(newProduct)
      const {success, message } = await createProduct(newProduct)
     // console.log("Success", success)
     // console.log("Message", message)
      if(!success){
        toast({title: "Error",
          description: message,
          status: "error",
          isCloseable: true
        })
        
      }else{
        toast({title: "Success",
          description: message,
          status: "success",
          isCloseable: true
        })
      
      }
      setNewProduct({name: "", price: "", image: ""})
  }
  

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={4}>
      <Heading  as='h1' size='xl' textAlign={"center"} mb={8}>
        Create New Product
      </Heading>
       
      <Box w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"lg"}>
          <VStack spacing={4}>
              <Input placeholder='Product Name' 
                name="name"
                value={newProduct.name} 
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>

              <Input placeholder='Product Price' 
                  name="price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>

              <Input placeholder='Product image URL' 
                  name="image"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
              
              <Button colorScheme='blue' w={"full"} onClick={handleAddProduct}>Add New Product</Button> 

          </VStack>      
      </Box>

      </VStack>
    </Container>
  )
}
