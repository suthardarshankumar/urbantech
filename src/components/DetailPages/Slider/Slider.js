import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Slider.module.css';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = ({ dataImgSlider }) => {
    return (
        <>
            <h1 className={styles.sliderHeading}>{dataImgSlider.heading}</h1>
            {dataImgSlider.sliderImgSet.map((swiperSliderData, index) => (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    key={index}
                >
                    {swiperSliderData.img.map((img, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                            <img className={styles.sliderImg} src={img} alt='' key={imgIndex} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ))}

        </>
    );
}

export default Slider;
