import React from 'react';
import styles from './Accessories.module.css';
import MobileAccessories from '../../components/Accessories/MobileAccessories';
import ComputerAccessories from '../../components/Accessories/ComputerAccessories';

const Accessories = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <MobileAccessories />
                <ComputerAccessories />
            </div>
        </>
    )
}

export default Accessories;