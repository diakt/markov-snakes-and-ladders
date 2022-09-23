import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header-div" >
            <nav>
                <Link to="/">
                    <h1>CCL</h1>
                </Link>
                <span>&nbsp;&nbsp;</span>
                <Link to="/math">
                    <h1>Math</h1>
                </Link>
                <span>&nbsp;&nbsp;</span>
                <Link to="/history">
                    <h1>History</h1>
                </Link>
                
            </nav>

        </div>
    );
}

export default Header;