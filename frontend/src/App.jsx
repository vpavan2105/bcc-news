import "./App.css";
import CardComponent from "./components/CardComponent";
import Login from "./components1/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { SimpleGrid } from "@chakra-ui/react";
import Politics from "./Pages/Politics";
import Sports from "./Pages/Sports";
import SingleNewsPage from "./components/SingleNewsPage";

function App() {
  return (
    <>
      <SimpleGrid columns={[2, null, 4]} spacing="40px" px={"150px"}>
        {/* <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/> */}
      </SimpleGrid>
      {/* <Login/> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sports" element={<Sports />} />
        {/* <Route path='/general' element={<General/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/health' element={<Health/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/science' element={<Science/>}/> */}
        <Route path="/politics" element={<Politics />} />
        <Route path='/news/:id' element={<SingleNewsPage/>}/>
      </Routes>
    </>
  )
}

export default App
