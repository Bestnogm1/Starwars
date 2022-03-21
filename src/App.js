import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar  from './components/NavBar/Navbar'
import Starship from './pages/Starship/Starship'
import StarshipPage from './pages/StarshipPage/StarshipPage'
function App() {

  return (
    <>
  <Navbar/>
  <Routes>
  <Route path="/starship" element={<Starship />} />
  <Route path="/starshipPage" element={<StarshipPage />} />
  </Routes>
    </>
  
  );
}

export default App;
