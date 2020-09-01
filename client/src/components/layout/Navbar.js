import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fa fa-user'></i>{' '}
                    <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>

            <li>
                <Link onClick={logout} to='#!'>
                    <i className='fa fa-sign-out'></i>{' '}
                    <span className='hide-sm'>Logout</span>
                </Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fa fa-code'></i> LegendaryDevs
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProp, { logout })(Navbar);
