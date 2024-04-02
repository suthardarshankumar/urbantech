import React from 'react';
import styles from './Offers.module.css';
import BOBOffers from '../../../../assets/Img/HomeImg/OffersImg/offers7.jpg'
import YesBankOffer from '../../../../assets/Img/HomeImg/OffersImg/offers6.jpg';

const Offers1 = () => {
    return (
        <>
            <div className={`${styles['container']}`}>
                <img src={BOBOffers} alt='' className={`${styles['img']}`} />
                <img src={YesBankOffer} alt='' className={`${styles['img']}`} />
            </div>
        </>
    )
}

export default Offers1;