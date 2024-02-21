import { Box, SimpleGrid } from '@chakra-ui/react'
import './App.css'
import CardComponent from './components/CardComponent'
import Login from './components/Login'

function App() {

  return (
    <>
    <SimpleGrid columns={[2, null, 4]} spacing='40px' px={"150px"}>
      {/* <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/> */}
    </SimpleGrid>
    <Login/>
    </>
  )
}

export default App
