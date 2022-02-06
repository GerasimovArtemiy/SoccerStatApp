import React from 'react';
import { Link } from 'react-router-dom'

const Burger = () => {
    return (
        <div className='navbar__burger'>
            <div className='navbar__burger_item'><Link to='/soccer-stat-app/'>Главная</Link></div>
            <div className='navbar__burger_item'><Link to='/soccer-stat-app/list_leagues/'>Лиги</Link></div>
            <div className='navbar__burger_item'><Link to='/soccer-stat-app/about_us/'>О нас</Link></div>
        </div>
    );
};

export default Burger;