import React from 'react';
import 'animate.css';
import './FirstNavbar.css';

const FirstNavbar = () => {

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-left animate__animated animate__fadeInLeftBig'>
                    <div className='title'>
                        URBANTECH
                    </div>
                </div>
                <div id="nav-part2">
                    <h4 className='navbar-menu'><span className="nav-link">Menu</span></h4>
                    <h4><span className="nav-link">Shop</span></h4>
                    <h4><span className="nav-link">Profile</span></h4>
                    <h4 className="support-trigger"><span className="nav-link">Support</span></h4>
                    <div className='shop-menu'>
                        <div className='menu-container'>
                            <div className='menu-heading'>Support</div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default FirstNavbar;
