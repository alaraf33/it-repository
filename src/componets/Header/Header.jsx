import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
            <header className={s.header}>
                <img
                    src='http://3.bp.blogspot.com/-iKHwpJF-EHo/UE17RbszugI/AAAAAAAAAN4/THNcHg8V2Zc/s1600/twitter-bird-light-bgs.png'/>

                    <div className={s.loginBlock}>
                        { props.isAuth
                            ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink> }
                    </div>
            </header>)
}

export default Header;