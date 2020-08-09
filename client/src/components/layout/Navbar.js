import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <a href='index.html'>
                    <i className='fas fa-code'></i>LegendaryDevs
                </a>
            </h1>
            <ul>
                <li>
                    <a href='profiles.html'>Developers</a>
                    <a href='register.html'>register</a>
                    <a href='login.html'>login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
