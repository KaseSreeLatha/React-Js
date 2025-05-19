// App.js
import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; // Import Router, Routes, and Route
import MainContent from './components/MainContent';
import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path='/' />
          <Route element={<Popup />} path='/main' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;