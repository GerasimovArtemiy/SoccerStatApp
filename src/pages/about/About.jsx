import React from 'react';
import indevelopment from '../../img/in-development.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    
    return (
        <div style={{textAlign: 'center'}}>

           <h2><Link to='/soccer-stat-app/' style={{textDecoration: 'none', color: 'white', textShadow: '3px 3px 10px black'}}>--=Вернутьсяа главную=--</Link></h2>  
           <img style={{borderRadius: '50px', maxWidth: '100%'}} src={indevelopment} alt='img' />  
           
        </div>
    );

};

export default About;