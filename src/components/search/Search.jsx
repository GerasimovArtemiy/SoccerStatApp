import React from 'react';
import MyInput from '../UI/my-input/MyInput';

const Search = ({search, handleSearch}) => {
    
    return (
        <MyInput 
            placeholder='Поиск...' 
            type='search' value={search} onChange={handleSearch} 
        />     
    );

};

export default Search;