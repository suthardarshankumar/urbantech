import React, { useState } from 'react';
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuPackage2 } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

import styles from './ProductDetail.module.css';
import ColorShow from '../../../components/ColorShow/ColorShow';
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

    const productData = [
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
                        {productData.map((imgUrl, index) => (
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
                    <div className={styles.colorSection}>
                        <div className={styles.colorHeading}>
                            Choose a Color:
                            <div className={styles.colorRow}>
                                <ColorShow backgroundColor='#171717' />
                                <ColorShow backgroundColor='#988F89' />
                            </div>
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
                    <div className={`${styles['productDetailsContainer']}`}>
                        <div className={`${styles['productDetailsSection']}`} onClick={toggleCollapsible}>
                            <div className={`${styles['productHeading']}`}>Product Details</div>
                            <div className={`${styles['iconsProduct']}`}>
                                {isOpen ? <FiMinus className={`${styles['productIcon']}`} /> : <IoMdAdd className={`${styles['productIcon']}`} />}
                            </div>
                        </div>
                        <div className={`${styles['tableContainer']} ${isOpen ? styles.open : styles.close}`}>
                            <table className={`${styles['table']}`}>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Brand</th>
                                    <td className={`${styles['rowData']}`}>Samsung</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Model Name</th>
                                    <td className={`${styles['rowData']}`}>Galaxy S24 Ultra</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Display</th>
                                    <td className={`${styles['rowData']}`}>Dynamic AMOLED 2X, 6.8-inch, 3120 x 1440 (Quad HD+)</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Processor</th>
                                    <td className={`${styles['rowData']}`}>Snapdragon 8 Gen 3</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Operating System</th>
                                    <td className={`${styles['rowData']}`}>Android 14</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Cellular Technology</th>
                                    <td className={`${styles['rowData']}`}>5G (model dependent)</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Network Service Provider</th>
                                    <td className={`${styles['rowData']}`}>Unlocked (varies by retailer)</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Battery Capacity</th>
                                    <td className={`${styles['rowData']}`}>5000mAh</td>
                                </tr>
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
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>OS</th>
                                    <td className={`${styles['rowData']}`}>Android 14.0</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Product Dimensions</th>
                                    <td className={`${styles['rowData']}`}>0.9 x 7.9 x 16.2 cm; 232 Grams</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Batteries</th>
                                    <td className={`${styles['rowData']}`}>1 Lithium Ion batteries required. (included)</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Item model number</th>
                                    <td className={`${styles['rowData']}`}>S928BZ</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Wireless communication technologies</th>
                                    <td className={`${styles['rowData']}`}>Cellular</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Connectivity technologies</th>
                                    <td className={`${styles['rowData']}`}>Bluetooth, Wi-Fi, USB, NFC</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>GPS</th>
                                    <td className={`${styles['rowData']}`}>True</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Special features</th>
                                    <td className={`${styles['rowData']}`}>Fast Charging Support, Dual SIM, Always On Display, Built-In GPS, Mobile Hotspot Capability</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Other display features</th>
                                    <td className={`${styles['rowData']}`}>Wireless</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Device interface - primary</th>
                                    <td className={`${styles['rowData']}`}>Touchscreen with Stylus Support</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Resolution</th>
                                    <td className={`${styles['rowData']}`}>QHD+ 3120 x 1440</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Other camera features</th>
                                    <td className={`${styles['rowData']}`}>Rear, Front</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Audio Jack</th>
                                    <td className={`${styles['rowData']}`}>USB Type C</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Form factor</th>
                                    <td className={`${styles['rowData']}`}>Bar</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Colour</th>
                                    <td className={`${styles['rowData']}`}>Titanium Black</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Battery Power Rating</th>
                                    <td className={`${styles['rowData']}`}>5000</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Whats in the box</th>
                                    <td className={`${styles['rowData']}`}>User Manual, SIM Ejector Pin, Stylus Pen, Smartphone, Data Cable (Type C-to-C)</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Manufacturer</th>
                                    <td className={`${styles['rowData']}`}>Samsung India Electronics Pvt.</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Country of Origin</th>
                                    <td className={`${styles['rowData']}`}>India</td>
                                </tr>
                                <tr className={`${styles['tableRow']}`}>
                                    <th className={`${styles['rowHeading']}`}>Item Weight</th>
                                    <td className={`${styles['rowData']}`}>232 g</td>
                                </tr>
                            </table>


                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.slidesContainer}></div>
        </>
    );
}

export default ProductDetail;