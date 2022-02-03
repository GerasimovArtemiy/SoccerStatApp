import React from 'react';
import style from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <header className={style.navbar}>
                <div className={style.navbar_section}>
                    <div className={style.navbar_item, style.navbar_logo}>
                        SoccerStat
                    </div>
                    <div className={style.navbar_item}><NavLink to='/'>На главную</NavLink></div>
                    <div className={style.navbar_item}><NavLink to='/list_leagues'>Просмотреть Лиги</NavLink></div>
                    <div className={style.navbar_item}><NavLink to='/about_us'>О приложении</NavLink></div>
                </div>
            </header>
            <main>
                <Outlet/>   
            </main>
                        
            <footer>{(new Date()).getFullYear()}</footer>
        </>
    );
};

export default Layout;
                    