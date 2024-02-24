import "./App.css";
import CardComponent from "./components/CardComponent";
import Login from "./components1/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { SimpleGrid } from "@chakra-ui/react";
import Politics from "./Pages/Politics";
import { AdminPage } from "./components1/AdminPage";




import SingleNewsPage from "./components/SingleNewsPage";
import General from "./Pages/General";
import Health from "./Pages/Health";
import Business from "./Pages/Business";
import Entertainment from "./Pages/Entertainment";
import Science from "./Pages/Science";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";
import DashBoard from "./Pages/DashBoard";
import PrivateRoute from "./Routes/PrivateRoute";
import Contact from "./Pages/Contact";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    let dummyuser = {
      "id": 1,
      "username": "john_doe",
      "password": "pass123",
      "bookmark": [
        {
          "id": 7,
          "author": "Vaishnawi Sinha",
          "title": "Farmers protest LIVE: 12 cops injured in attack by farmers in Jind, says SP",
          "description": "Farmers' protests LIVE updates: Farmers have resumed their ‘Delhi Chalo’ march amid demand for MSP guarantee.",
          "url": "https://www.hindustantimes.com/india-news/farmers-protest-live-updates-today-february-21-delhi-chalo-march-kisan-andolan-ncr-haryana-msp-101708478251272.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/21/550x309/WhatsApp_Image_2024-02-21_at_15.31.36_1708512212671_1708512226410.jpeg",
          "category_section": "general",
          "content": "Farmers' Protest highlights: Farmers from across multiple states have resumed the ‘Delhi Chalo’ march on Wednesday. Meanwhile, heavy security is deployed across the national capital to prevent any disturbances during the protest. Farmer leaders from Punjab and Haryana previously halted the farmers' protest on Sunday evening after the fourth round of talks with Union Ministers. The leaders had warned earlier that they will resume their march to Delhi if their demands are not met by the Centre by February 21. Farmer leaders taking part in agitation on Monday rejected the Centre's proposal of procuring pulses, maize and cotton at MSP by government agencies for five years, saying it was not in farmers' interest and announced that they will march towards the national capital on Wednesday.",
          "category": "national",
          "comments": [
            {
              "title": "Supporting farmers' rights",
              "description": "It's crucial to support the demands of our farmers for fair MSP and better conditions. Solidarity with the protesting farmers!"
            }
          ]
        },
        {
          "id": 6,
          "author": "TIMESOFINDIA.COM",
          "title": "Physical activity may help alleviate pain in cancer survivors - The Times of India",
          "description": "A new study has found that physical activity can reduce pain in cancer survivors. Learn how exercise can be an effective non-pharmacologic option for reducing cancer-related pain.",
          "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/physical-activity-can-alleviate-pain-in-cancer-survivors/articleshow/107884532.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-107884485,width-1070,height-580,imgsize-731833,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "category_section": "general",
          "content": "10 places Anushka Sharma, Virat Kohli travelled recently!A new study finding has shed light on the ro ..Read more at:http://timesofindia.indiatimes.com/articleshow/107884532.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          "category": "national",
          "comments": [
            {
              "title": "Great news for cancer survivors!",
              "description": "It's wonderful to see the positive impact of physical activity on alleviating pain for cancer survivors."
            }
          ]
        } 
      ]
    };

    localStorage.setItem("user",JSON.stringify(dummyuser))
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sports" element={<Sports />} />
        <Route path='/general' element={<General/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/science' element={<Science/>}/>
        <Route path="/politics" element={<Politics />} />
        <Route path='/:category/:id' element={<SingleNewsPage/>}/>
        <Route path='/dashboard' element={  <DashBoard/> }/>
        <Route path='/contact' element={  <Contact/> }/>
      </Routes>
    </>
  )
}

export default App
