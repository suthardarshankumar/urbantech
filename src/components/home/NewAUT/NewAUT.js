import React from 'react';
import styles from './NewAUT.module.css';
import New1Img from '../../../assets/Img/HomeImg/NewAtUrbanTech/New1.webp';
import New2Img from '../../../assets/Img/HomeImg/NewAtUrbanTech/New2.webp';
import New3Img from '../../../assets/Img/HomeImg/NewAtUrbanTech/New3.webp';

const NewAUT = () => {
    return (
        <>
            <div className={`${styles['container']}`}>
                <h1 className={`${styles['heading']}`}>New Product</h1>
                <div className={`${styles['new-row']}`}>
                    <img className={`${styles['big-banner-img']} ${styles['img']}`} src={New1Img} alt='' />
                    <img className={`${styles['small-banner-img']} ${styles['img']}`} src={New2Img} alt='' />
                    <img className={`${styles['small-banner-img']} ${styles['img']}`} src={New3Img} alt='' />
                </div>
            </div>
        </>
    )
}

export default NewAUT;