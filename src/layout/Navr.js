import React from 'react';
import { Link } from 'react-router-dom';

const Navr = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/add-book'>Add Book</Link>
                <Link to='/show-book'>Show Book</Link>
            </nav>
        </div>
    );
};

export default Navr;