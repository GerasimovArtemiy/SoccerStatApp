import React from 'react';
import style from './MyList.module.css'

const MyList = ({children, ...props}) => {
    return (
        <ol className={style._list} {...props} >
           {children} 
        </ol>
    );
};

export default MyList;