import React from 'react';
import styles from './LatestLaptops.module.css';
import AcerAMDRyzen7 from '../../../assets/Img/Laptops/LatestLaptop/AcerAMDRyzen7.webp';
import HP12thGen from '../../../assets/Img/Laptops/LatestLaptop/HP12thGen.webp';
import HPVictus12Gen from '../../../assets/Img/Laptops/LatestLaptop/HPVictus12Gen.webp';
import LenovoIdeaPadSlim5 from '../../../assets/Img/Laptops/LatestLaptop/LenovoIdeaPadSlim5.webp';
import MacBookAir from '../../../assets/Img/Laptops/LatestLaptop/MacBookAir.webp';
import SamsungGalaxyBook4Pro from '../../../assets/Img/Laptops/LatestLaptop/SamsungGalaxyBook4Pro.webp';

const LatestLaptops = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>
                        Latest Laptops For You
                    </h1>
                </div>
                <div className={styles.section}>
                    <div className={styles.bigBannerRow}>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={MacBookAir} alt='' />
                        </div>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={SamsungGalaxyBook4Pro} alt='' />
                        </div>
                    </div>
                    <div className={styles.smallBannerRow}>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={AcerAMDRyzen7} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={HP12thGen} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={LenovoIdeaPadSlim5} alt='' />
                        </div>
                        <div className={styles.smallBannerCol}>
                            <img className={styles.smallBannerImg} src={HPVictus12Gen} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestLaptops;