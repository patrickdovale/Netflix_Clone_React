/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import "./style.css";
import logo from '../../image/Netflix_Logo.png'

export default ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="Logo Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Icone Usuário"/>
                </a>
            </div>
        </header>
    )
}