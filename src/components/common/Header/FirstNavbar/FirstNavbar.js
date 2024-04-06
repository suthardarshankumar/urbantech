import React, { useState } from 'react';
import 'animate.css';
import './FirstNavbar.css';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FirstNavbar = () => {

    const [profileShow, setProfileShow] = useState(false);
    const profileDropDown = () => {
        setProfileShow(!profileShow)
    };

    const [shopShow, setShopShow] = useState(false);
    const shopDropDown = () => {
        setShopShow(!shopShow)
    }

    const [searchBarShow, setSearchBarShow] = useState(false);
    const searchBarDropDown = () => {
        setSearchBarShow(!searchBarShow)
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-left'>
                    <Link to='/' className='title'>
                        URBANTECH
                    </Link>
                </div>
                <div id="nav-part2">
                    <h4 className='navbar-menu'><span className="nav-link">Menu</span></h4>
                    <h4 onClick={searchBarDropDown}><span className="nav-link">Search</span></h4>
                    <h4 onClick={shopDropDown}><span className="nav-link">Shop</span></h4>
                    <h4 onClick={profileDropDown}><span className="nav-link">Profile</span></h4>
                </div>

                <div className={`dropdownSection ${profileShow ? "open" : "close"}`}>
                    <div className='dropdownContainer'>
                        <div className='link-contain'><Link to='logInPage' className='profile-link profile-LogIn'>LogIn</Link></div>
                        <div className='link-contain'><Link to='' className='profile-link'>My Profile</Link></div>
                        <div className='link-contain'><Link to='' className='profile-link'>My Orders</Link></div>
                        <div className='link-contain'><Link to='' className='profile-link'>Cart</Link></div>
                        <div className='link-contain'><Link to='contact-us' className='profile-link'>Contact Us</Link></div>
                        <div className='link-contain'><Link to='' className='profile-link'>My Service Requests</Link></div>
                    </div>
                </div>

                <div className={`dropdownSection ${shopShow ? "open" : "close"}`}>
                    <div className='dropdownContainer'>
                        <div className='link-contain'><Link to='shop/' className='profile-link profile-LogIn'>All Product</Link></div>
                        <div className='link-contain'><Link to='mobile-shop' className='profile-link'>Mobile</Link></div>
                        <div className='link-contain'><Link to='laptop' className='profile-link'>Laptop</Link></div>
                        <div className='link-contain'><Link to='tablets-and-ipads' className='profile-link'>Tablets & iPads</Link></div>
                        <div className='link-contain'><Link to='audio-product' className='profile-link'>Audio Product</Link></div>
                        <div className='link-contain'><Link to='smartwatch' className='profile-link'>SmartWatches</Link></div>
                        <div className='link-contain'><Link to='accessories' className='profile-link'>Accessories</Link></div>
                    </div>
                </div>
                <div className={`dropdownSection ${searchBarShow ? "open" : "close"}`}>
                    <div className='dropdownContainer'>
                        <div className='searchBarContain'>
                            <div className='searchBarSection'>
                                <FaSearch className='searchIcon' />
                                <input type="text" placeholder="UrbanTech.in" className='searchInput' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default FirstNavbar;
