import './App.css'
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import MonsterDetails from './pages/MonsterDetails';
import CategoryList from './pages/CategoryList';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element ={<HomePage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path = "/categories" element ={<CategoryList />}></Route>

      <Route path = "*" element={<NotFound />}></Route>
    </Routes>

    <Footer />
    </>
  )
}

export default App