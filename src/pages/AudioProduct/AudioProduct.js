import React from 'react';
import styles from './AudioProduct.module.css'
import LatestHeadphoneandEarphonesForYou from '../../components/audioProduct/LatestHeadphoneandEarphonesForYou/LatestHeadphoneandEarphonesForYou';
import TWS from '../../components/audioProduct/AllAudioProduct/TWS';
import Headphones from '../../components/audioProduct/AllAudioProduct/Headphones';
import Neckband from '../../components/audioProduct/AllAudioProduct/Neckband';
import SearchBar from '../../components/common/SearchBar/SearchBar';

const AudioProduct = () => {
    return (
        <>
            <div className={styles.container}>
                <SearchBar />
                <LatestHeadphoneandEarphonesForYou />
                <TWS />
                <Headphones />
                <Neckband />
            </div>
        </>
    )
}

export default AudioProduct;