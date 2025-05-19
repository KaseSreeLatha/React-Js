// Navbar.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">


<div class="container-fluid">


    <a class="navbar-brand" href="#">React Project </a>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         <li class="nav-item">
            <Link to="/"><a class="nav-link" href="home">Home</a></Link>
         </li>
         <li class="nav-item">
            <Link to="/careers"><a class="nav-link" href = "careers" >Careers</a></Link>
         </li>
         <li class="nav-item">
            <Link to="/contact"><a class="nav-link" href="contact">Contact Us</a></Link>
         </li>
         <li class="nav-item">
           <Link to="/login"> <a class="nav-link" href="login">Login</a></Link>
         </li>
         <li class="nav-item">
         <Link to="/documentation"><a class="nav-link" href="document">Documentation</a></Link>
         </li>
         <li class="nav-item">
         <Link to="/documentation"><a class="nav-link" href="document">Web API</a></Link>
         </li>
        </ul>


    </div>
</div>
</nav>
    );
}

export default Navbar;
