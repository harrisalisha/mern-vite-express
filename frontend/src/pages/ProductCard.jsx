import React,{useState} from 'react'
import { Image, Button, Text, Heading,VStack, HStack,Input, IconButton, useColorModeValue , Box,
    useToast,
    useDisclosure,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon} from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { useProductStore } from '../store/product'

function ProductCard({product}) {
    const [updatedProduct, setUpdatedProduct] = useState(product)

    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.600")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {deleteProduct , updateProduct} = useProductStore(); //fn in store
    const toast = useToast()

    const handleDeleteProduct = async(id)=> {
      const {success, message}= await deleteProduct(id)
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
    }

    const handleUpdateProduct = async(id, updatedProduct) => {
       const {success, message} = await updateProduct(id, updatedProduct);
      onClose();
      if(!success){
        toast({title: "Error",
          description: message,
          status: "error",
          duration: 3000,
          isCloseable: true
        })
        
      }else{
        toast({title: "Success",
          description: "Product Updated Successfully",
          status: "success",
          duration: 3000,
          isCloseable: true
        })
      }  
    }

  return (
    <Box bg={bg} p={4}
       shadow='lg'
       rounded='lg'
       overflow='hidden'
       transition='all 0.3s'
       _hover={{transform: "translate(-5px)", shadow: "xl"}}
    >
     <Image  src={product.image} alt={product.name} /> 

     <Box>
        <Heading as='h3' size='md' mb={2}>{product.name}</Heading>
     </Box>
     <Text fontSize='xl' fontWeight='bold' color={textColor} mb={4}>
       £ {product.price}
     </Text>

     <HStack spacing={2}>
        <IconButton onClick={onOpen} icon={<EditIcon /> } colorScheme='blue' />
        <IconButton onClick={() => handleDeleteProduct(product._id)} icon={<DeleteIcon /> } colorScheme='red' />       
    </HStack>
    
    
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update product</ModalHeader>
          <ModalCloseButton />
           
          <ModalBody>
          <VStack spacing={4}>
              <Input placeholder='Product Name' 
                name="name"
                value={updatedProduct.name} 
                onChange={(e)=> setUpdatedProduct({...updatedProduct, name: e.target.value})}
               />

              <Input placeholder='Product Price' 
                  name="price"
                  value={updatedProduct.price}
                  onChange={(e)=> setUpdatedProduct({...updatedProduct, price: e.target.value})}
                />

              <Input placeholder='Product image URL' 
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e)=> setUpdatedProduct({...updatedProduct, image: e.target.value})}
              />
          </VStack>  
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=> handleUpdateProduct(product._id, updatedProduct)}>
               Update
            </Button>
            <Button colorScheme='red'  onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
       
    </Modal>
    </Box>
  )
}

export default ProductCard