import React from 'react';
import Nav1 from '../Nav1/Nav1';
import styles from './Home.module.css'
import Title from '../Title/Title';

export default function Home1(){
    document.title = "Home1";

    return<>
    
   
   <div className='text-white  vh-100 my-3' style={{background:"#1ABC9C"}}>
    <img src="./img/portfolio/avataaars.svg" alt=""  id='imgsvg' style={{width:"280px", paddingTop:"100px "}} className='m-auto  my-2 d-flex justify-content-center align-items-center'/>
    <Title title='start framwork' color='white'/>

<h4 className='text-center my-1'style={{fontSize:"19px"}}>Graphic Artist - Web Designer - Illustrator</h4>
    </div>
   
   
    </>
}