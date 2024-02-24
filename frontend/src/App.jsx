import "./App.css";
import CardComponent from "./components/CardComponent";
import Login from "./components1/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { SimpleGrid } from "@chakra-ui/react";
import Politics from "./Pages/Politics";

import SingleNewsPage from "./components/SingleNewsPage";
import General from "./Pages/General";
import Health from "./Pages/Health";
import Business from "./Pages/Business";
import Entertainment from "./Pages/Entertainment";
import Science from "./Pages/Science";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";

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
        <Route path='/general' element={<General/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/science' element={<Science/>}/>
        <Route path="/politics" element={<Politics />} />
        <Route path='/news/:id' element={<SingleNewsPage/>}/>
      </Routes>
    </>
  )
}

export default App
