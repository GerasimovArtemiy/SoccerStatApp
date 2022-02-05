import React from 'react';
import indevelopment from '../../img/in-development.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{textAlign: 'center'}}>
           <img src={indevelopment} alt='img' /> 
           <h2><Link to='/' style={{textDecoration: 'none'}}>--=Вернутьсяа главную=--</Link></h2>  
        </div>
    );
};

export default About;