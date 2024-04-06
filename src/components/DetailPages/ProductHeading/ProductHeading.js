import React from 'react';
import styles from './ProductHeading.module.css';

const ProductHeading = () => {
    return (
        <>
            <h1 className={styles.productName}>Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage)</h1>
            <div className={styles.priceSection}>
                <div className={styles.priceRow}>
                    ₹1,39,999
                    <div className={styles.mrpPrice}>M.R.P.: <span className={styles.realPrice}>₹1,49,999</span></div>
                    <div className={styles.tax}>Inclusive of all taxes</div>
                </div>
            </div>
        </>
    )
}

export default ProductHeading;