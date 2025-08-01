import React from 'react'
import Random from './pages/Random'
import Catagory from './pages/Catagory'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='random' element={<Random />}  />
        
  <Route path="catagory" element={<Catagory />} />
  <Route path="catagory/:name" element={<Catagory />} />  {/* dynamic route */}


      </Routes>
    </div>
  )
}

export default App
