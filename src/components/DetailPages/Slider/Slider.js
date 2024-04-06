import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Slider.module.css';

import { Pagination, Navigation } from 'swiper/modules';

const Slider = ({ swiperSlideData }) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {swiperSlideData.firstImage.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img className={`${styles['sliderImg']}`} src={img} alt='' />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}

export default Slider;
