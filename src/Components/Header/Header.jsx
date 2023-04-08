import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Toaster } from 'react-hot-toast';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/order'>order</Link>
            <Link to='/about'>about</Link>
            <Link to='/contact'>contact</Link>
        </nav>
    );
};

export default Header;