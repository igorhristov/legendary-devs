import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fa fa-code'></i> LegendaryDevs
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='!#'>Developers</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
