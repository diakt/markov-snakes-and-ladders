import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header-div" >
            <nav>
                <Link to="/">
                    <h1 className='sections'>Snakes and Ladders</h1>
                </Link>
                <span>&nbsp;&nbsp;</span>
                <Link to="/math">
                    <h1 className='sections'>Math</h1>
                </Link>
                <span>&nbsp;&nbsp;</span>
                {/* <Link to="/history">
                    <h1 className='sections'>History</h1>
                </Link> */}
                
            </nav>

        </div>
    );
}

export default Header;