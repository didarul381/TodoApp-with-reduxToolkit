import React from 'react';
import { Link } from 'react-router-dom';
import {nav,link} from "./Navr.css"
const Navr = () => {
    return (
        <div>
            <nav className='nav'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/add-book'>Add Book</Link>
                <Link  className='link' to='/show-book'>Show Book</Link>
                <Link  className='link' to='/posts'>Show Post</Link>
            </nav>
        </div>
    );
};

export default Navr;