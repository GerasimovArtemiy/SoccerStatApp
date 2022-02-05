import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles._wrap}>
            <div className={styles._ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>    
    );
};

export default Loader;