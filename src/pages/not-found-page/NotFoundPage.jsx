import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
           <h1>Такой страницы не существует</h1>
           <h2><Link to='/'>Вернуться на главную</Link></h2>
        </div>
    );
};

export default NotFoundPage;