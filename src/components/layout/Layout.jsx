import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink, Outlet } from 'react-router-dom';



const Layout = () => {
    
    const [time, setTime] = useState('')
    const date = new Date().toLocaleDateString();
        
    setInterval(() => {
        const currTime = new Date().toLocaleTimeString();
        setTime(currTime)
    },1000)
   
    

    return (
        
        <div className="wrapper">
            <div className='content'>
                <div className='date_now '>
                    <div className='container'>Сейчас: - {date} - {time} - </div>
                </div>
                <header className='navbar'>
                    <div className='container'>
                        <div className='navbar_section'>
                            <div className='navbar_logo'>
                            <Link to='/soccer-stat-app/'>SoccerStat</Link>
                            </div>
                            <div className='navbar_items'>
                                <div className='navbar_item'><NavLink to='/soccer-stat-app/'>Главная</NavLink></div>
                                <div className='navbar_item'><NavLink to='/soccer-stat-app/list_leagues/'>Лиги</NavLink></div>
                                <div className='navbar_item'><NavLink to='/soccer-stat-app/about_us/'>О нас</NavLink></div>
                            </div>                            
                        </div>
                    </div>
                </header>
                <main className='main'>
                    <div className="container">
                        <Outlet/> 
                    </div>
                </main>
                <footer className='footer'>
                    <div>SoccerStat {(new Date()).getFullYear()}</div>
                </footer>
            </div>
        </div>                
        
    );
};

export default Layout;               
                                                            
                
                
                
                
                                  
            