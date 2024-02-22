
import "./App.css";
import CardComponent from "./components/CardComponent";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { SimpleGrid } from "@chakra-ui/react";


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
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      {/* <Route path='/login' element={<Login/>}/>
    <> 
      <SimpleGrid columns={[2, null, 4]} spacing="40px" px={"150px"}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </SimpleGrid>
      <Login />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path='/login' element={<Login/>}/>
      <Route path='/general' element={<General/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/business' element={<Business/>}/>
      <Route path='/health' element={<Health/>}/>
      <Route path='/entertainment' element={<Entertainment/>}/>
      <Route path='/science' element={<Science/>}/>
      <Route path='/politics' element={<Politics/>}/>
      <Route path='/*' element={<SingleNewsPage/>}/> */}
      </Routes>
    </>
  );
}

export default App;
