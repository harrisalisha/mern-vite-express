import { Container, Heading, VStack, Box, Button,
      useColorModeValue,
} from '@chakra-ui/react'
import { create } from 'zustand'

//useStore
const useCountStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  doubleit : ()=> set((state) => ({count: state.count * 2})),
}))

function Counter() {
  const count = useCountStore((state) => state.count) 
  const increment =  useCountStore((state) => state.inc)
  const decrement = useCountStore((state) => state.dec)
  const doubleit  = useCountStore((state) => state.doubleit)

  return (
    <Container maxW={"container.sm"}>
         <VStack spacing={4}>
         <Heading  as='h1' size='xl' textAlign={"center"} mb={8}>
        This is Zustand to manage global store
      </Heading>
      <Box w={"full"} bg={useColorModeValue("white", "gray.500")}
        p={6} rounded={"lg"} shadow={"lg"}>
          <VStack spacing={4}>
          
            <span>{count}</span>
            <br />
            <Button w={"full"}  onClick={increment}>one up</Button>
            <br/>
            <Button w={"full"}  onClick={decrement}>one down</Button>
            <br/>
            <Button w={"full"}  onClick={doubleit}>Doubleit</Button>


          </VStack>
      </Box>   
      </VStack>  
    </Container>
  )
}
export default Counter