import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
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
  )
}

export default App
