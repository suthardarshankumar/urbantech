import React from 'react';

import onePlusWatch2 from '../../../assets/Img/SmartWatch/JustLaunch/onePlusWatch2.webp';
import nothingCMFWatchPro from '../../../assets/Img/SmartWatch/JustLaunch/nothingCMFWatchPro.webp';
import boatStromPro from '../../../assets/Img/SmartWatch/JustLaunch/boatStromPro.webp';
import NoiseColorFit from '../../../assets/Img/SmartWatch/JustLaunch/NoiseColorFit.webp';
import SamsungGalaxyFit3 from '../../../assets/Img/SmartWatch/JustLaunch/SamsungGalaxyFit3.webp';
import NosieTwistGo from '../../../assets/Img/SmartWatch/JustLaunch/NosieTwistGo.webp';

import styles from './JustLauched.module.css'

const JustLaunched = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>Latest Wearables For You</h1>
                </div>
                <div className={styles.section}>
                    <div className={styles.bigBannerRow}>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={onePlusWatch2} alt='' />
                        </div>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={nothingCMFWatchPro} alt='' />
                        </div>
                    </div>
                    <div className={styles.smallBannerRow}>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={SamsungGalaxyFit3} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={NosieTwistGo} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={boatStromPro} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={NoiseColorFit} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JustLaunched;