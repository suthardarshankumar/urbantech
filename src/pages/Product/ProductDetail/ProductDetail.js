import React, { useState } from 'react';

import { MdOutlineLocalShipping } from "react-icons/md";
import { LuPackage2 } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

import styles from './ProductDetail.module.css';

import SamsungS24Ultra1 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra.webp';
import SamsungS24Ultra2 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra2.webp';
import SamsungS24Ultra3 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra3.webp';
import SamsungS24Ultra4 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra4.webp';
import SamsungS24Ultra5 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra5.webp';

// import SamsungS24Ultra11 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra11.jpg';
// import SamsungS24Ultra12 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra12.jpg';
// import SamsungS24Ultra13 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra13.jpg';
// import SamsungS24Ultra14 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra14.jpg';
// import SamsungS24Ultra15 from '../../../assets/Img/HomeImg/ProductDetailsImg/samsungs24ultra15.jpg';

const ProductDetail = () => {
    const [mainImg, setMainImg] = useState(SamsungS24Ultra1);

    const productImgData = [
        SamsungS24Ultra1,
        SamsungS24Ultra2,
        SamsungS24Ultra3,
        SamsungS24Ultra4,
        SamsungS24Ultra5
    ];

    // const productData2 = [
    //     SamsungS24Ultra11,
    //     SamsungS24Ultra12,
    //     SamsungS24Ultra13,
    //     SamsungS24Ultra14,
    //     SamsungS24Ultra15
    // ];

    const productData = [
        { label: 'Brand', value: 'Samsung' },
        { label: 'Model Name', value: 'Galaxy S24 Ultra' },
        { label: 'Display', value: 'Dynamic AMOLED 2X, 6.8-inch, 3120 x 1440 (Quad HD+)' },
        { label: 'Processor', value: 'Snapdragon 8 Gen 3' },
        { label: 'Operating System', value: 'Android 14' },
        { label: 'Cellular Technology', value: '5G (model dependent)' },
        { label: 'Network Service Provider', value: 'Unlocked (varies by retailer)' },
        { label: 'Battery Capacity', value: '5000mAh' }
    ];

    const technicalData = [
        { label: 'OS', value: 'Android 14.0' },
        { label: 'Product Dimensions', value: '0.9 x 7.9 x 16.2 cm; 232 Grams' },
        { label: 'Batteries', value: '1 Lithium Ion batteries required. (included)' },
        { label: 'Item model number', value: 'S928BZ' },
        { label: 'Wireless communication technologies', value: 'Cellular' },
        { label: 'Connectivity technologies', value: 'Bluetooth, Wi-Fi, USB, NFC' },
        { label: 'GPS', value: 'True' },
        { label: 'Special features', value: 'Fast Charging Support, Dual SIM, Always On Display, Built-In GPS, Mobile Hotspot Capability' },
        { label: 'Other display features', value: 'Wireless' },
        { label: 'Device interface - primary', value: 'Touchscreen with Stylus Support' },
        { label: 'Resolution', value: 'QHD+ 3120 x 1440' },
        { label: 'Other camera features', value: 'Rear, Front' },
        { label: 'Audio Jack', value: 'USB Type C' },
        { label: 'Form factor', value: 'Bar' },
        { label: 'Colour', value: 'Titanium Black' },
        { label: 'Battery Power Rating', value: '5000' },
        { label: 'Whats in the box', value: 'User Manual, SIM Ejector Pin, Stylus Pen, Smartphone, Data Cable (Type C-to-C)' },
        { label: 'Manufacturer', value: 'Samsung India Electronics Pvt.' },
        { label: 'Country of Origin', value: 'India' },
        { label: 'Item Weight', value: '232 g' }
    ];


    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        };
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    const [isOpenTD, setIsOpenTD] = useState(false);

    const toggleCollapsibleTechnicalDetails = () => {
        setIsOpenTD(!isOpenTD);
    };


    return (
        <>
            <div className={styles.container}>
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
                <div className={styles.right}>
                    <h1 className={styles.productName}>Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage)</h1>
                    <div className={styles.priceSection}>
                        <div className={styles.priceRow}>
                            ₹1,39,999
                            <div className={styles.mrpPrice}>M.R.P.: <span className={styles.realPrice}>₹1,49,999</span></div>
                            <div className={styles.tax}>Inclusive of all taxes</div>
                        </div>
                    </div>

                    <div className={styles.btnSection}>
                        <div className={styles.btnContain}>
                            <button className={styles.minusBtn} onClick={decrementQuantity}><FiMinus className={styles.minusIcon} /></button>
                            <span className={styles.showQuantity}>{quantity}</span>
                            <button className={styles.addBtn} onClick={incrementQuantity}><IoMdAdd className={styles.addIcon} /></button>
                        </div>
                    </div>

                    <div className={styles.buttonSection}>
                        <button className={`${styles['button']}`}>
                            <span className={styles.button_top}>BUY NOW</span>
                        </button>
                        <button className={styles.cartButton}>
                            <span className={styles.cartButton_top}>Add to Cart</span>
                        </button>
                    </div>
                    <div className={styles.serviceContainer}>
                        <div className={`${styles['serviceRow']}  ${styles['top']}`}>
                            <div className={styles.iconContainer}>
                                <MdOutlineLocalShipping className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.heading}>Free Delivery</div>
                                <div className={styles.para}>Enter your Postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div className={`${styles['serviceRow']} ${styles['bottom']}`}>
                            <div className={styles.iconContainer}>
                                <LuPackage2 className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.heading}>Return Delivery</div>
                                <div className={styles.para}>Free 10 days Delivery Return. <span className={styles.detailSpan}>Details</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['productRow']}`}>
                        <div className={`${styles['productDetailsContainer']}`}>
                            <div className={`${styles['productDetailsSection']}`} onClick={toggleCollapsible}>
                                <div className={`${styles['productHeading']}`}>Product Details</div>
                                <div className={`${styles['iconsProduct']}`}>
                                    {isOpen ? <FiMinus className={`${styles['productIcon']}`} /> : <IoMdAdd className={`${styles['productIcon']}`} />}
                                </div>
                            </div>
                            <div className={`${styles['tableContainer']} ${isOpen ? styles.open : styles.close}`}>
                                <table className={`${styles['table']}`}>
                                    {productData.map((item, index) => (
                                        <tr key={index} className={`${styles['tableRow']}`}>
                                            <th className={`${styles['rowHeading']}`}>{item.label}</th>
                                            <td className={`${styles['rowData']}`}>{item.value}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                        <div className={`${styles['productDetailsContainer']}`}>
                            <div className={`${styles['productDetailsSection']}`} onClick={toggleCollapsibleTechnicalDetails}>
                                <div className={`${styles['productHeading']}`}>Technical Details</div>
                                <div className={`${styles['iconsProduct']}`}>
                                    {isOpenTD ? <FiMinus className={`${styles['productIcon']}`} /> : <IoMdAdd className={`${styles['productIcon']}`} />}
                                </div>
                            </div>
                            <div className={`${styles['tableContainer']} ${isOpenTD ? styles.open : styles.close}`}>
                                <table className={`${styles['table']}`}>
                                    {technicalData.map((item, index) => (
                                        <tr key={index} className={`${styles['tableRow']}`}>
                                            <th className={`${styles['rowHeading']}`}>{item.label}</th>
                                            <td className={`${styles['rowData']}`}>{item.value}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.slidesContainer}>
            </div>
        </>
    );
}

export default ProductDetail;