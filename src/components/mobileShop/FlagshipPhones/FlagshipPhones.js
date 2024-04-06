import React, { startTransition } from 'react';
import styles from './FlagshipPhones.module.css';

import OnePlus12 from '../../../assets/Img/MobileShop/FlagshipPhone/oneplus12.webp';
import samsungS24Series from '../../../assets/Img/MobileShop/FlagshipPhone/samsungS24Series.webp';
import VivoX100 from '../../../assets/Img/MobileShop/FlagshipPhone/vivoX100.webp';
import Iphone14 from '../../../assets/Img/MobileShop/FlagshipPhone/iphone14.webp';

const FlagshipPhones = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>Flagship Phones</h1>
                </div>
                <div className={styles.section}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <img src={OnePlus12} alt='' className={styles.img} />
                        </div>
                        <div className={styles.col}>
                            <img src={samsungS24Series} alt='' className={styles.img} />
                        </div>
                        <div className={styles.col}>
                            <img src={Iphone14} alt='' className={styles.img} />
                        </div>
                        <div className={styles.col}>
                            <img src={VivoX100} alt='' className={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlagshipPhones;