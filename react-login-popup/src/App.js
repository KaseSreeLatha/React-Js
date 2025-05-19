import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Popup from './components/Popup'

 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path='/' />
          <Route element={<Popup />} path='/popup' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
 
export default App