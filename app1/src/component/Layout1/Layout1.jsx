import React from 'react';
import Nav1 from './../Nav1/Nav1';
import Contact2 from './../Contact/Contact2';
import Home1 from './../Home1/Home1';
import About1 from './../About/About1';
import Portofile from './../Portofile/Portofile';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout1(){
    return<>
    
        
    <Nav1/>
    
    {/* <Home1/>
    <About1/>
    <Contact2/>
    <Portofile/>
    
     */}
    
    <Outlet>

    </Outlet>
    
    
    
    
    <Footer/>
    
    
    
   
    </>
}