import React from 'react';
import styles from './Accessories.module.css';
import MobileAccessories from '../../components/Accessories/MobileAccessories';
import ComputerAccessories from '../../components/Accessories/ComputerAccessories';
import SearchBar from '../../components/common/SearchBar/SearchBar';

const Accessories = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <SearchBar />
                <MobileAccessories />
                <ComputerAccessories />
            </div>
        </>
    )
}

export default Accessories;