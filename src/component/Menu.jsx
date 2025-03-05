import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</NavLink></li>
                <li><Link className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</Link></li>
                <li><Link className={({isActive})=>isActive?"active-item":"pending-item"} to="/about">About</Link></li>
                <li><Link className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Menu;