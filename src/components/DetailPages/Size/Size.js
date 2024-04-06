import React from 'react';
import styles from './Size.module.css';

const Size = ({ size }) => {
    return (
        <>
            <div className={styles.sizeContainer}>
                <div className={styles.heading}>Size:</div>
                <div className={styles.sizeNumberContain}>
                    {size.map((sizeNo, index) => (
                        <span className={styles.sizeNumber} key={index}>{sizeNo}</span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Size;