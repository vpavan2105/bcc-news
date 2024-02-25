import { Box, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { scienceData } from '../Redux/actionCreator'

export function AdminPage() {
    const [endpoint, setEndpoint]=useState("")
 const [image, setImage]=useState();
 const [title, setTitle]=useState();
 const [discription, setdisacription]=useState();
 const [category, setCategories]=useState("")
 



    const sceincedatautl=`https://bcc-news-backend.onrender.com/${endpoint}`
    console.log(sceincedatautl)

    function updateData(e){
      e.preventDefault();
      fetch(sceincedatautl, {
          method:"POST", 
          headers:{"Content-type": "Application/json"}, 
          body:JSON.stringify({
            title, 
            description: discription,
            url:image,
            category:category

          })
      })
      .then((res)=>{
        return res.json()
      })
      .catch((data)=>{
        console.log(data);
      })
      .catch(error=>{
        console.log(error)
    })
    }

  return (
    <>
    <Box>

      <select onChange={(e)=>{setEndpoint(e.target.value)}} name="" id="">
      <option value="">Select Category</option>
        <option value="sports">sports</option> 
        <option value="entertainment">entertainment</option>
        <option value="business">business</option>
        <option value="science">science</option>
        <option value="technology">technology</option>
        <option value="general">potilics</option>
      </select>

    </Box>

       
    <form onSubmit={updateData}  className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      {/* Image Input */}
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-600">
          Image:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter image URL"
          onChange={(e)=>{setImage(e.target.value)}}


        />
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter title"
          onChange={(e)=>{setTitle(e.target.value)}}
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter description"
          onChange={(e)=>{setdisacription(e.target.value)}}
        />
      </div>

      <div className="mb-4">
        <select onChange={(e)=>{setCategories(e.target.value)}} name="" id="">
        <option value="">Select Category</option>
          <option value="basketball">basketball</option>
          <option value="football">football</option>
          <option value="extra-sports">extra-sports</option>
          <option value="cricket">cricket</option>
          <option value="top-news">top-news</option>
        </select>

      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>

</>

  

  )
}

 export default AdminPage
