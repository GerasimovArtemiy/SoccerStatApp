import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='not_found'>
           <h1>Такой страницы не существует</h1>
           <div><Link to='/soccer-stat-app/'> Вернуться на главную </Link></div>           
        </div>
    );
};

export default NotFoundPage;