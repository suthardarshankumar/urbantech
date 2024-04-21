import React, { useState } from 'react';
import 'animate.css';
import styles from './Header.module.css'; // Import CSS Module
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FirstNavbar = () => {
    const [profileShow, setProfileShow] = useState(false);
    const profileDropDown = () => {
        setProfileShow(!profileShow);
    };

    const [shopShow, setShopShow] = useState(false);
    const shopDropDown = () => {
        setShopShow(!shopShow);
    };

    const [searchBarShow, setSearchBarShow] = useState(false);
    const searchBarDropDown = () => {
        setSearchBarShow(!searchBarShow);
    };

    const [searchTerm, setSearchTerm] = useState('');

    const closeDropdowns = () => {
        setProfileShow(false);
        setShopShow(false);
        setSearchBarShow(false);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles['navbar-left']}>
                    <Link to='/' className={styles.title}>
                        URBANTECH
                    </Link>
                </div>
                <div className={styles['nav-part2']}>
                    {/* navbar-menu*/}
                    <h4 className={styles['navbar-menu']}><span className={styles['nav-link']}><Link to='product-details'>Menu</Link></span></h4>
                    <h4 onClick={searchBarDropDown}><span className={styles['nav-link']}>Search</span></h4>
                    <h4 onClick={shopDropDown}><span className={styles['nav-link']}>Shop</span></h4>
                    <h4 onClick={profileDropDown}><span className={styles['nav-link']}>Profile</span></h4>
                </div>

                <div className={`${styles.dropdownSection} ${profileShow ? styles.open : styles.close}`}>
                    <div className={styles.dropdownContainer}>
                        <div className={styles['link-contain']}><Link to='logInPage' className={`${styles['profile-link']} ${styles['profile-LogIn']}`} onClick={closeDropdowns}>LogIn</Link></div>
                        <div className={styles['link-contain']}><Link to='' className={styles['profile-link']} onClick={closeDropdowns}>My Profile</Link></div>
                        <div className={styles['link-contain']}><Link to='' className={styles['profile-link']} onClick={closeDropdowns}>My Orders</Link></div>
                        <div className={styles['link-contain']}><Link to='add-to-cart' className={styles['profile-link']} onClick={closeDropdowns}>Cart</Link></div>
                        <div className={styles['link-contain']}><Link to='contact-us' className={styles['profile-link']} onClick={closeDropdowns}>Contact Us</Link></div>
                        <div className={styles['link-contain']}><Link to='' className={styles['profile-link']} onClick={closeDropdowns}>My Service Requests</Link></div>
                    </div>
                </div>

                <div className={`${styles.dropdownSection} ${shopShow ? styles.open : styles.close}`}>
                    <div className={styles.dropdownContainer}>
                        <div className={styles['link-contain']}><Link to='shop/' className={`${styles['profile-link']} ${styles['profile-LogIn']}`} onClick={closeDropdowns}>All Product</Link></div>
                        <div className={styles['link-contain']}><Link to='mobile-shop' className={styles['profile-link']} onClick={closeDropdowns}>Mobile</Link></div>
                        <div className={styles['link-contain']}><Link to='laptop' className={styles['profile-link']} onClick={closeDropdowns}>Laptop</Link></div>
                        <div className={styles['link-contain']}><Link to='tablets-and-ipads' className={styles['profile-link']} onClick={closeDropdowns}>Tablets & iPads</Link></div>
                        <div className={styles['link-contain']}><Link to='audio-product' className={styles['profile-link']} onClick={closeDropdowns}>Audio Product</Link></div>
                        <div className={styles['link-contain']}><Link to='smartwatch' className={styles['profile-link']} onClick={closeDropdowns}>SmartWatches</Link></div>
                        <div className={styles['link-contain']}><Link to='accessories' className={styles['profile-link']} onClick={closeDropdowns}>Accessories</Link></div>
                    </div>
                </div>
                <div className={`${styles.dropdownSection} ${searchBarShow ? styles.open : styles.close}`}>
                    <div className={styles.dropdownContainer}>
                        <div className={styles.searchBarContain}>
                            <div className={styles.searchBarSection}>
                                <Link to={`/search-result?query=${encodeURIComponent(searchTerm)}`} onClick={closeDropdowns}>
                                    <FaSearch className={styles.searchIcon} />
                                </Link>
                                <input
                                    type="text" placeholder="UrbanTech.in"
                                    className={styles.searchInput}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default FirstNavbar;
