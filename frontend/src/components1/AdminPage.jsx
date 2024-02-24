import { Box, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
import { scienceData } from '../Redux/actionCreator'

export function AdminPage() {
    const [endpoint, setEndpoint]=useState("")
    const sceincedatautl=`https://red-powerful-snail.cyclic.app/${endpoint}`
    console.log(sceincedatautl)


  return (
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

  








  )
}

// export default AdminPage
