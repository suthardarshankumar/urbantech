import React from 'react';
import styles from './AppleRow.module.css';
import iPadAir from '../../../assets/Img/HomeImg/HomeSection2/home1.png';
import AppleWatch from '../../../assets/Img/HomeImg/HomeSection2/home2.png';
import { Link } from 'react-router-dom';

const AppleRow = () => {
    return (
        <>
            <div className={`${styles['row']}`}>
                <div className={`${styles['row-sec']}`}>
                    <div className={`${styles['col']}`}>
                        <img className={`${styles['img']} ${styles['Ipad']}`} src={iPadAir} alt='' />
                        <div className={`${styles['col-detail']}`}>
                            <h1 className={`${styles['heading']}`}>Apple<br />iPad Air</h1>
                            <p className={`${styles['para']}`}>Serious performance<br />in a thin and light design.</p>
                            <Link to={`/product-details/iPadAir5thGen`} className={styles.cardLink}><button className={`${styles['btn']} ${styles['Ipad-btn']}`}>Buy Now</button></Link>
                        </div>
                    </div>
                    <div className={`${styles['col']}`}>
                        <img className={`${styles['img']} ${styles['AppleWatch']}`} src={AppleWatch} alt='' />
                        <div className={`${styles['col-detail']}`}>
                            <h1 className={`${styles['heading']}`}>Apple<br />Watch SE</h1>
                            <p className={`${styles['para']}`}>All the essentials.<br />Light on price.</p>
                            <Link to={`/product-details/iPadAir5thGen`} className={styles.cardLink}><button className={`${styles['btn']} ${styles['Ipad-btn']}`}>Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppleRow;