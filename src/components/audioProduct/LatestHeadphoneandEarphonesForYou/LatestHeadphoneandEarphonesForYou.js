import React from 'react';

import RedmiBuds5 from '../../../assets/Img/Headphones/LatestHeadphone/RedmiBuds5.webp';
import nothingNeckBand from '../../../assets/Img/Headphones/LatestHeadphone/nothingNeckband.webp';
import boatRockerz255Neckband from '../../../assets/Img/Headphones/LatestHeadphone/boatRockerz255Neckband.webp';
import realmeBudsAir5NAirPro5 from '../../../assets/Img/Headphones/LatestHeadphone/realmeBudsAir5NAir5Pro.webp';
import onePlusZ2Neckband from '../../../assets/Img/Headphones/LatestHeadphone/oneplusZ2Neckband.webp';
import pTronTWS from '../../../assets/Img/Headphones/LatestHeadphone/pTronTWS.webp';
import JabraTWS from '../../../assets/Img/Headphones/LatestHeadphone/JabraTWS.webp';

import styles from './LatestHeadphoneandEarphonesForYou.module.css';

const LatestHeadphoneandEarphonesForYou = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>Latest Headphone and Earphones For You</h1>
                </div>
                <div className={styles.section}>
                    <div className={styles.bigBannerRow}>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={RedmiBuds5} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={nothingNeckBand} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={boatRockerz255Neckband} alt='' />
                        </div>
                    </div>
                    <div className={styles.smallBannerRow}>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={realmeBudsAir5NAirPro5} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={onePlusZ2Neckband} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={pTronTWS} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={JabraTWS} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestHeadphoneandEarphonesForYou;