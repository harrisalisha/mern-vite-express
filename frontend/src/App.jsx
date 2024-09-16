
import './App.css'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import CreatePage from './pages/CreatePage'
import CreatePage2 from './pages/CreatePage2'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import NoPage from './pages/NoPage'
import { useProductStore } from './store/product'
import Counter from './pages/Calculate'

/*  function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}*/



function App() {
  const bg = useColorModeValue("gray.100", "gray.800")

  const {products} = useProductStore() // calling access global store products , zustand
  return (
    <>
  
    <Box minH={"100vh"} bg={bg}>
     <BrowserRouter>
      <Navbar />  
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculate" element={<Counter />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/newuser" element={<CreatePage2 />} />
          <Route path="*" element={<NoPage />} />
        </Routes> 
           
    </BrowserRouter>
    </Box>
    </>
      
  )
}

export default App
