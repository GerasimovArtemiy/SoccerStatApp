import React from 'react';
import './FetchError.css'

const FetchError = ({error}) => {
    return (
        <div className='fetch_error'>
            <h1>УПС! Что то пошло не так... Ошибка: {error}</h1>
            <p>Мы знаем о проблеме и уже работаем.</p> 
            <p>Попробуйте обновить страницу или зайдите позже.</p>           
        </div>
    );
};

export default FetchError;