import React from 'react';
import Nav1 from '../Nav1/Nav1';
import Title from '../Title/Title';

export default function About1(){
    document.title = "about";

    return<>
    
    <div className=' p-2 text-white  vh-100 d-flex justify-content-center align-items-center' style={{background:"#1ABC9C"}}>
        <div className="container">
            <div className="row d-flex align-content-center justify-content-center ">
                <Title title='About' color='white' className="text-center col-12 "/>
            
                <p className='col-md-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='col-md-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    </div>
    </>
}