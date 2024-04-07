import React from 'react';
import styles from './SmartWatch.module.css';
import JustLaunched from '../../components/smartWatch/JustLaunched/JustLaunched';
import BudgetSmartWatch from '../../components/smartWatch/AllSmartWatchProduct/BudgetSmartWatch';
import MidrangeSmartWatch from '../../components/smartWatch/AllSmartWatchProduct/MidrangeSmartWatch';
import PremiumSmartWatch from '../../components/smartWatch/AllSmartWatchProduct/PremiumSmartWatch';
import SearchBar from '../../components/common/SearchBar/SearchBar';

const SmartWatch = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <SearchBar />
                <JustLaunched />
                <BudgetSmartWatch />
                <MidrangeSmartWatch />
                <PremiumSmartWatch />
            </div>
        </>
    )
}

export default SmartWatch;