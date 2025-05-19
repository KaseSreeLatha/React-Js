import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import 'tailwindcss/tailwind.css';
 
 
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route element={<Login/>} path='/' />
          <Route element={<Home/>} path='/home' />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
 
export default App