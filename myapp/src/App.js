import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Careers from "./components/Careers.jsx";
import Login from "./components/Login.jsx";
import Documentation from "./components/Documentation.jsx";
import ContactUs from "./components/Contact.jsx";
import Registration from './components/Registration.jsx';
import Details from './components/Details.jsx';
import Edit from './components/Edit.jsx';
import Edit1 from './components/Edit1.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
    <Routes>

     <Route path='/' element={<Home/>} />
     <Route path='/contact' element={<ContactUs/>} />
     <Route path='/careers' element={<Careers/>} />
     <Route path='/login' element={<Login/>} />
    
     <Route path='/documentation' element={<Documentation/>}/>
     <Route path='/register' element={<Registration/>}/>
     <Route path='/details/:id' element={<Details/>}/>
     <Route path='/edit' element={<Edit/>} />
     <Route path='/edit1' element={<Edit1/>} />
      

    </Routes>
    </BrowserRouter>
    </div>
);

}

export default App;
