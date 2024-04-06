import React from 'react';

import NothingPhone2a from '../../../assets/Img/MobileShop/LatestMobilePhonesForYou/NothingPhone2a.webp';
import OppoF25Pro from '../../../assets/Img/MobileShop/LatestMobilePhonesForYou/OppoF25Pro.webp';
import NothingPhone2 from '../../../assets/Img/MobileShop/LatestMobilePhonesForYou/NothingPhone2.webp';
import OnePlus12R from '../../../assets/Img/MobileShop/LatestMobilePhonesForYou/OnePlus12R.webp';
import OppoA54 from '../../../assets/Img/MobileShop/LatestMobilePhonesForYou/OppoA54.webp';
import RedmiNote13 from '../../../assets/Img/MobileShop/LatestMobilePhonesForYou/RedmiNote13.webp';

import styles from './LatestMobilePhonesForYou.module.css';

const LatestMobilePhonesForYou = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>Latest Mobiles For You</h1>
                </div>
                <div className={styles.section}>
                    <div className={styles.bigBannerRow}>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={NothingPhone2a} alt='' />
                        </div>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={OppoF25Pro} alt='' />
                        </div>
                    </div>
                    <div className={styles.smallBannerRow}>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={NothingPhone2} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={OnePlus12R} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={OppoA54} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={RedmiNote13} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestMobilePhonesForYou;