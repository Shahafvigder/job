import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPhotosPage from './pages/allPhotos'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index="/photos" element={<AllPhotosPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
