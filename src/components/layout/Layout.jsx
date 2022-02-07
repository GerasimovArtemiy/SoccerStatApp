import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Burger from '../UI/burger-menu/Burger';



const Layout = () => {
    
    const [burgerActive, setBurgerActive] = useState(false);
    const [time, setTime] = useState('');
    const date = new Date().toLocaleDateString();
        
    
    setInterval(() => {
        const currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    },1000)
   
  

    return (
        
        <div className="wrapper">
            <div className='content'>
                <header className='navbar'>
                    <div className='date_now '>
                        <div className='container'>Сейчас: - {date} - {time} - </div>
                    </div>
                    <div className='container'>
                        <div className='navbar_section'>
                            <div className='navbar_logo'>
                                <Link to='/soccer-stat-app/'>SoccerStat</Link>
                            </div>
                            <div className='navbar__burger' onClick={(e) => setBurgerActive(!burgerActive)}>
                                <span></span>
                            </div>
                            <Burger burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
                            <div className='navbar_items'>
                                <div className='navbar_item'><NavLink to='/soccer-stat-app/'>Главная</NavLink></div>
                                <div className='navbar_item'><NavLink to='/soccer-stat-app/list_leagues/'>Лиги</NavLink></div>
                                <div className='navbar_item'><NavLink to='/soccer-stat-app/about_us/'>О нас</NavLink></div>
                            </div>                            
                        </div>
                    </div>
                </header>
                <main className='main' onClick={() => setBurgerActive(false)}>
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
                
                                                            
                
                
                
                
                                  
            