import React, { useState } from 'react';
import styles from './ProductImgSlidebar.module.css';

import SamsungS24Ultra1 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra.webp';
import SamsungS24Ultra2 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra2.webp';
import SamsungS24Ultra3 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra3.webp';
import SamsungS24Ultra4 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra4.webp';
import SamsungS24Ultra5 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra5.webp';

const ProductImgSlidebar = () => {

    const [mainImg, setMainImg] = useState(SamsungS24Ultra1);

    const productImgData = [
        SamsungS24Ultra1,
        SamsungS24Ultra2,
        SamsungS24Ultra3,
        SamsungS24Ultra4,
        SamsungS24Ultra5
    ];

    return (
        <>
            <div className={styles.left}>
                <div className={styles.imgSideBarContain}>
                    {productImgData.map((imgUrl, index) => (
                        <img
                            className={styles.imgSideBar}
                            src={imgUrl}
                            alt=''
                            key={index}
                            onMouseEnter={() => setMainImg(imgUrl)}
                        />
                    ))}
                </div>
                <div className={styles.mainImgContain}>
                    <img className={styles.mainImg} src={mainImg} alt='' />
                </div>
            </div>
        </>
    )
}

export default ProductImgSlidebar;