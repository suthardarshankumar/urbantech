import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import styles from './SecondNavbar.module.css';

const SecondNavbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.left}>
                    <div className={styles.title}>URBANTECH</div>
                    <div className={`${styles['leftLink']} ${styles.leftCenter}`}>Categories<MdOutlineKeyboardArrowDown className={styles.leftIcon} /></div>
                    <div className={`${styles['leftLink']}`}>Deals</div>
                    <div className={`${styles['leftLink']}`}>What's New</div>
                </div>

                <div className={styles.right}>
                    <div className={`${styles['rightLink']} ${styles.leftCenter}`}><IoIosSearch className={`${styles['rightIcon']} ${styles['searchIcon']}`} /> Search</div>
                    <div className={`${styles['rightLink']} ${styles.leftCenter}`}><PiUserCircleFill className={styles.rightIcon} /> Profile</div>
                    <div className={`${styles['rightLink']} ${styles.leftCenter}`}><PiShoppingCartSimple className={styles.rightIcon} /> Cart</div>
                </div>
            </div>
        </>
    )
}

export default SecondNavbar;