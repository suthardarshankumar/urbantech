import React from 'react';
import styles from './MobileShop.module.css';
import JustLaunched from '../../components/shop/JustLaunched/JustLaunched';

import JustLaunchedImg1 from '../../assets/Img/MobileShop/JustLaunched/IqooNeo9Pro.jpg';
import JustLaunchedImg2 from '../../assets/Img/MobileShop/JustLaunched/OnePlus.jpg';
import LatestMobilePhonesForYou from '../../components/mobileShop/LatestMobilePhonesForYou/LatestMobilePhonesForYou';
import FlagshipPhones from '../../components/mobileShop/FlagshipPhones/FlagshipPhones';
import BudgetSmartphones from '../../components/mobileShop/SmartphonesRangeSection/BudgetSmartphones';
import MidRangeSmartphone from '../../components/mobileShop/SmartphonesRangeSection/MidRangeSmartphone';
import PremiumSmartphones from '../../components/mobileShop/SmartphonesRangeSection/PremiumSmartphones';
import SearchBar from '../../components/common/SearchBar/SearchBar';


const MobileShop = () => {

    const images = [JustLaunchedImg1, JustLaunchedImg2];

    return (
        <>
            <div className={styles.container}>
                <SearchBar />
                <JustLaunched imagesSet={images} />
                <LatestMobilePhonesForYou />
                <FlagshipPhones />
                <BudgetSmartphones />
                <MidRangeSmartphone />
                <PremiumSmartphones />
            </div>
        </>
    )
}

export default MobileShop;