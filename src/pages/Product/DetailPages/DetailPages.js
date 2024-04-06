import React from 'react';
import styles from './DetailPages.module.css';
import ProductImgSlidebar from '../../../components/DetailPages/ProductImgSlidebar/ProductImgSlidebar';
import ProductDetails from '../../../components/DetailPages/ProductDetails/ProductDetails';
import Slider from '../../../components/DetailPages/Slider/Slider';


const DetailPages = () => {

    return (
        <div className={styles.container}>
            <ProductImgSlidebar />
            <ProductDetails />
            {/* <Slider swiperSlideData={sliderData} /> */}
        </div>
    );
}

export default DetailPages;
