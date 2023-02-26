import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from '../components/organims/LandingPage';
import Login from '../pages/Login';
import RegstroCursos from '../components/organims/RegstroCursos';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/añadir_cursos' element={<RegstroCursos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
