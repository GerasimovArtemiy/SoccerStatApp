import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='homepage_wrap'>
                    <div className='homepage_text'>
                        <div>FOOTBALL</div>
                        <div>SOMETEXT</div>                    
                    </div>  
                    <div>
                        <Link to='/soccer-stat-app/list_leagues/'><button className='home_btn'>НАЧАТЬ</button></Link>
                    </div>    
                </div>                                        
            </div>
        </div>
    );

};

export default Home;