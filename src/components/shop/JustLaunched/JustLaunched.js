import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './JustLaunched.module.css';

import { Pagination, Navigation } from 'swiper/modules';

const JustLaunched = ({ imagesSet }) => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.heading}>Just Launched</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.mySwiper}
                >
                    {imagesSet.map((img, index) =>
                        <SwiperSlide key={index}>
                            <img src={img} alt='' className={styles.img} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    )
}

export default JustLaunched;