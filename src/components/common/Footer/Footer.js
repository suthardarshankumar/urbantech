import React from 'react';
import styles from './Footer.module.css';

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
                            <li className={`${styles['footer-list']}`}>Shop All</li>
                            <li className={`${styles['footer-list']}`}>Computers</li>
                            <li className={`${styles['footer-list']}`}>Tablets</li>
                            <li className={`${styles['footer-list']}`}>Audio</li>
                            <li className={`${styles['footer-list']}`}>Mobile</li>
                            <li className={`${styles['footer-list']}`}>T.V & Home Cinema</li>
                            <li className={`${styles['footer-list']}`}>Wearable Tech</li>
                            <li className={`${styles['footer-list']}`}>Sale</li>
                        </ul>
                    </divs>
                    <div className={styles.footerSection}>
                        <h3 className={`${styles['footer-heading']}`}>Customer Support</h3>
                        <ul className={`${styles['footer-ul']}`}>
                            <li className={`${styles['footer-list']}`}>Contact Us</li>
                            <li className={`${styles['footer-list']}`}>Help Center</li>
                            <li className={`${styles['footer-list']}`}>About Us</li>
                            <li className={`${styles['footer-list']}`}>Careers</li>
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