import React, { useState } from 'react';
import '../navbar/indexnav.css';


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%' }}>
            <div className="navbar-left">
                <span className="page-name">Swifty</span>
            </div>
            <div className="navbar-right">
                <div className={`account-dropdown ${dropdownOpen ? 'open' : ''}`}>
                    <button className="account-button" onClick={toggleDropdown}>Account</button>
                    <div className="dropdown-content">
                        <a href="#">Profilo</a>
                        <a href="#">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;