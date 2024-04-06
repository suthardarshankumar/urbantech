import React from 'react';

// icons
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuPackage2 } from "react-icons/lu";

import styles from './CompanyService.module.css';

const CompanyService = () => {
    return (
        <>
            <div className={styles.serviceContainer}>
                <div className={`${styles['serviceRow']}  ${styles['top']}`}>
                    <div className={styles.iconContainer}>
                        <MdOutlineLocalShipping className={styles.icon} />
                    </div>
                    <div className={styles.detailContainer}>
                        <div className={styles.heading}>Free Delivery</div>
                        <div className={styles.para}>Enter your Postal code for Delivery Availability</div>
                    </div>
                </div>
                <div className={`${styles['serviceRow']} ${styles['bottom']}`}>
                    <div className={styles.iconContainer}>
                        <LuPackage2 className={styles.icon} />
                    </div>
                    <div className={styles.detailContainer}>
                        <div className={styles.heading}>Return Delivery</div>
                        <div className={styles.para}>Free 10 days Delivery Return. <span className={styles.detailSpan}>Details</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyService;