import React from 'react';
import './FilterDates.css'

const FilterDates = ({handlerDates, inputDate, setInputDate}) => {
    
    return (
        <form autoComplete='off' onSubmit={handlerDates}>
            
            <input className='filter_date__start' type='date' value={inputDate.from} 
                onChange={e => setInputDate({...inputDate, from: e.target.value})} name='dateFrom'/>
            
            <input className='filter_date__end' type='date' value={inputDate.to} 
                onChange={e => setInputDate({...inputDate, to: e.target.value})} name='dateTo'/>
            
            <input className='filter_btn' type='submit' value='Найти'/>
            
        </form>  
    );
};

export default FilterDates;