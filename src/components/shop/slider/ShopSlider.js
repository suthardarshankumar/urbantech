import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import styles from './ShopSlider.module.css';

const ShopSlider = ({ sliderData }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>
                        New & Trending Product
                    </h1>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className={styles.mySwiper}
                >
                    {sliderData.map((img, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <img src={img} alt='' className={styles.slideImg} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

export default ShopSlider;