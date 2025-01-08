import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Nav1(){
    return<>
    
    
<nav className="navbar navbar-expand-lg  fixed-top" style={{background:"#2C3E50" }}>
  <div className="container-fluid">
    <Link className="navbar-brand text-light" style={{fontSize:"45px"}} to="/">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/Portofile">Portofile</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>  
    
    
    
    
    </>
}