import React from 'react';
import { NavLink } from 'react-router-dom';
import './Burger.css';

const Burger = ({burgerActive, setBurgerActive}) => {
    
    return (
        <div className={burgerActive ? 'burger__menu active' : 'burger__menu'}>
            
            <div className='burger__menu_items'>
                <div className='burger__menu_link' onClick={() => setBurgerActive(false)}><NavLink to='/soccer-stat-app/'>Главная</NavLink></div>
                <div className='burger__menu_link' onClick={() => setBurgerActive(false)}><NavLink to='/soccer-stat-app/list_leagues/'>Лиги</NavLink></div>
                <div className='burger__menu_link' onClick={() => setBurgerActive(false)}><NavLink to='/soccer-stat-app/about_us/'>О нас</NavLink></div>
            </div>
            
        </div>
    );

};

export default Burger;