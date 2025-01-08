import React from 'react';

export default function Footer(){
    return<>
    <div className="footer  fixed-bottom" style={{background:"#2C3E50" , height:"130px"}} >
        <div className="container">
            <div className="row text-light p-3" >
                <div className="location col-md-4">
                    <h2 style={{fontSize:"20px"}}>location</h2>
                    <h3 style={{fontSize:"20px"}}>2215 jhon daniel drive</h3>
                    <h4 style={{fontSize:"20px"}}>clark mo 65243</h4>
                </div>
                <div className="web col-md-4">
                    <h2  style={{fontSize:"20px"}}>AROUND THE WEB</h2>
                    <div className="icon-home d-flex">
            <i className="fa-brands fa-facebook  p-3  "></i>
            <i className="fa-brands fa-x-twitter p-3   "></i>
            <i className="fa-brands fa-youtube   p-3   "></i>
            <i className="fa-brands fa-linkedin  p-3   "></i>
        </div>
                </div>
                <div className="about col-md-4">
                    <h2 style={{fontSize:"20px"}}>ABOUT FREELANCER</h2>
                    <h4 style={{fontSize:"20px"}}>Freelance is a free to use, licensed Bootstrap theme created by Route</h4>
                </div>
            </div>
        </div>
        <div className="end fixed-bottom" style={{background:"#080B0E"}}>
            <h2 className='text-center text-light' style={{ fontSize:"16px"}}>Copyright © Your Website 2021</h2>
        </div>
    </div>
    
    
    
    
    
    </>
}