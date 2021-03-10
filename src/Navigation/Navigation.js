import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import systemImg from '../assets/system.png';
import './Navigation.css';
const Navigation = (props) => {
    return (
        <div className="Navigation">
            <nav className="Navigation-nav">
                <div className="Navigation-nav-logo">
                    <Link to='/'><img src={systemImg} alt="systemImg"/></Link>
                </div>
                <ul>
                    <li>
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/about'>About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
