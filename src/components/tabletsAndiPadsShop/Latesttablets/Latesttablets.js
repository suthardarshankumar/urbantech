import React from 'react';
import img1 from '../../../assets/Img/TabletsAndiPads/LatestTabletsForYou/onePlusPadGo.webp';
import img2 from '../../../assets/Img/TabletsAndiPads/LatestTabletsForYou/realmePad2.webp';
import styles from './Latesttablets.module.css'

const Latesttablets = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>
                        Latest Tablets For You
                    </h1>
                </div>
                <div className={styles.section}>
                    <div className={styles.bigBannerRow}>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={img1} alt='' />
                        </div>
                        <div className={styles.bigBannerCol}>
                            <img className={styles.bigBannerImg} src={img2} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Latesttablets;