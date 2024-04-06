import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={`${styles['footer-heading']}`}>Office Location</h3>
                        <p className={`${styles['footer-para']}`}>500 Terry Francois Street</p>
                        <p className={`${styles['footer-para']}`}>San Francisco, CA 94158</p>
                        <p className={`${styles['footer-para']}`}>info@mysite.com</p>
                        <p className={`${styles['footer-para']}`}>123-456-7890</p>
                    </div>
                    <divs className={styles.footerSection}>
                        <h3 className={`${styles['footer-heading']}`}>Shop</h3>
                        <ul className={`${styles['footer-ul']}`}>
                            <li className={`${styles['footer-list']}`}>
                                <Link to='shop' className={`${styles['footer-link']}`}>Shop All</Link>
                            </li>
                            <li className={`${styles['footer-list']}`}>
                                <Link to='mobile-shop' className={`${styles['footer-link']}`}>Mobile</Link>
                            </li>
                            <li className={`${styles['footer-list']}`}>
                                <Link to='tablets-and-ipads' className={`${styles['footer-link']}`}>Tablets</Link>
                            </li>
                            <li className={`${styles['footer-list']}`}>
                                <Link to='audio-product' className={`${styles['footer-link']}`}>Audio</Link>
                            </li>
                            <li className={`${styles['footer-list']}`}>
                                <Link to='laptop' className={`${styles['footer-link']}`}>Laptop</Link>
                            </li>
                            <li className={`${styles['footer-list']}`}>
                                <Link to='smartwatch' className={`${styles['footer-link']}`}>SmartWatch</Link>
                            </li>
                            <li className={`${styles['footer-list']}`}>
                                <Link to='accessories' className={`${styles['footer-link']}`}>Accessories</Link>
                            </li>
                        </ul>
                    </divs>
                    <div className={styles.footerSection}>
                        <h3 className={`${styles['footer-heading']}`}>Customer Support</h3>
                        <ul className={`${styles['footer-ul']}`}>
                            <li className={`${styles['footer-list']}`}><Link to='' className={`${styles['footer-link']}`}>Contact Us</Link></li>
                            <li className={`${styles['footer-list']}`}><Link to='' className={`${styles['footer-link']}`}>Help Center</Link></li>
                            <li className={`${styles['footer-list']}`}><Link to='' className={`${styles['footer-link']}`}>About Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={`${styles['footer-heading']}`}>Policy</h3>
                        <ul className={`${styles['footer-ul']}`}>
                            <li className={`${styles['footer-list']}`}>Shipping & Returns</li>
                            <li className={`${styles['footer-list']}`}>Terms & Conditions</li>
                            <li className={`${styles['footer-list']}`}>Payment Methods</li>
                            <li className={`${styles['footer-list']}`}>FAQ</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;