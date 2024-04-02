import React from 'react';
import MobileImg from '../../../assets/Img/HomeImg/ProductImg/PI1.png';
import HeadPhoneImg from '../../../assets/Img/HomeImg/ProductImg/PI2.webp';
import LaptopImg from '../../../assets/Img/HomeImg/ProductImg/PI3.png';
import TabletImg from '../../../assets/Img/HomeImg/HomeSection2/home1.png';
import SmartWatchImg from '../../../assets/Img/HomeImg/ProductImg/PI5.png';
import MASet from '../../../assets/Img/HomeImg/HomeSection2/home3.png';

import styles from './ProductIcon.module.css';

const ProductIcon = () => {

    const dataSet = [
        {
            imgUrl: MobileImg,
            imgName: "Mobiles",
        },
        {
            imgUrl: LaptopImg,
            imgName: "Laptop",
        },
        {
            imgUrl: HeadPhoneImg,
            imgName: "Headphone",
        },
        {
            imgUrl: TabletImg,
            imgName: "Tablets",
        },
        {
            imgUrl: SmartWatchImg,
            imgName: "Smart Watches",
        },
        {
            imgUrl: MASet,
            imgName: "All Accessories",
        },
    ];

    return (
        <>
            <div className={`${styles['product-container']}`}>
                <h1 className={`${styles['product-heading']}`}>All Category</h1>
                <div className={`${styles['product-row']}`}>
                    {dataSet.map((categoryData, index) => (
                        <div className={`${styles['col']}`}>
                            <div className={`${styles['heading-sec']}`}>
                                <h1 className={`${styles['heading']}`}>{categoryData.imgName}</h1>
                            </div>
                            <div className={`${styles['img-sec']}`}>
                                <img className={`${styles['img']}`} src={categoryData.imgUrl} alt='' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductIcon;