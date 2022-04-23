import React from "react";
import './header.styles.scss';
import { Link } from "react-router-dom";

const Header = ()=>(
    <div className="header">
    <Link className="logo-container" to='/'><h1>HOME</h1></Link>
    <div className="options">
        <Link className="option" to='/shop'>SHOP</Link>
        <Link className="option" to='/shop'>CONTACT</Link>

    </div>

    </div>
);

export default Header;