import React from 'react';
import MobileImg from '../../../assets/Img/HomeImg/ProductImg/PI1.png';
import HeadPhoneImg from '../../../assets/Img/HomeImg/ProductImg/PI2.webp';
import LaptopImg from '../../../assets/Img/HomeImg/ProductImg/PI3.png';
import TabletImg from '../../../assets/Img/HomeImg/HomeSection2/home1.png';
import SmartWatchImg from '../../../assets/Img/HomeImg/ProductImg/PI5.png';
import MASet from '../../../assets/Img/HomeImg/HomeSection2/home3.png';
import { Link } from 'react-router-dom';

import styles from './ProductIcon.module.css';

const ProductIcon = () => {

    const dataSet = [
        {
            imgUrl: MobileImg,
            imgName: "Mobiles",
            link: 'mobile-shop',
        },
        {
            imgUrl: LaptopImg,
            imgName: "Laptop",
            link: 'laptop',
        },
        {
            imgUrl: HeadPhoneImg,
            imgName: "Headphone",
            link: 'audio-product',
        },
        {
            imgUrl: TabletImg,
            imgName: "Tablets",
            link: 'tablets-and-ipads',
        },
        {
            imgUrl: SmartWatchImg,
            imgName: "Smart Watches",
            link: 'smartwatch',
        },
        {
            imgUrl: MASet,
            imgName: "All Accessories",
            link: 'accessories',
        },
    ];

    return (
        <>
            <div className={`${styles['product-container']}`}>
                <h1 className={`${styles['product-heading']}`}>All Category</h1>
                <div className={`${styles['product-row']}`}>
                    {dataSet.map((categoryData, index) => (
                        <Link to={categoryData.link} className={styles.link} key={index}>
                            <div className={`${styles['col']}`}>
                                <div className={`${styles['heading-sec']}`}>
                                    {categoryData.imgName}
                                </div>
                                <div className={`${styles['img-sec']}`}>
                                    <img className={`${styles['img']}`} src={categoryData.imgUrl} alt='' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductIcon;