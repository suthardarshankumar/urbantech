import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { LuPackage2 } from 'react-icons/lu';
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import styles from './ProductDetail.module.css';
import Collapsible from '../../../components/DetailPages/Collapsible/Collapsible';

import SamsungS24Ultra1 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra.webp';
import SamsungS24Ultra2 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra2.webp';
import SamsungS24Ultra3 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra3.webp';
import SamsungS24Ultra4 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra4.webp';
import SamsungS24Ultra5 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra5.webp';

import SamsungS24Ultra11 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra11.jpg';
import SamsungS24Ultra12 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra12.jpg';
import SamsungS24Ultra13 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra13.jpg';
import SamsungS24Ultra14 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra14.jpg';
import SamsungS24Ultra15 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra15.jpg';
import SamsungS24UltraDetails11 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/11.jpg';
import SamsungS24UltraDetails21 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/21.jpg';
import SamsungS24UltraDetails22 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/22.jpg';
import SamsungS24UltraDetails23 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/23.jpg';
import SamsungS24UltraDetails31 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/31.jpg';
import SamsungS24UltraDetails32 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/32.jpg';
import SamsungS24UltraDetails33 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/33.jpg';
import SamsungS24UltraDetails34 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/34.jpg';
import SamsungS24UltraDetails41 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/41.jpg';
import SamsungS24UltraDetails42 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/42.jpg';
import SamsungS24UltraDetails43 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/43.jpg';
import SamsungS24UltraDetails44 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/44.jpg';
import SamsungS24UltraDetails51 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/51.jpg';
import SamsungS24UltraDetails52 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/52.jpg';
import SamsungS24UltraDetails53 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/53.jpg';
import SamsungS24UltraDetails54 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/54.jpg';
import SamsungS24UltraDetails61 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/61.jpg';
import SamsungS24UltraDetails62 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/62.jpg';
import SamsungS24UltraDetails63 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/63.jpg';
import Slider from '../../../components/DetailPages/Slider/Slider';

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const { productNameId } = useParams();
    const samsungS24Ultra = {
        name: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage)',
        price: '₹1,39,999',
        mrp: 'M.R.P.: ₹1,49,999',
        tax: 'Inclusive of all taxes',
        imgData: [
            SamsungS24Ultra1,
            SamsungS24Ultra2,
            SamsungS24Ultra3,
            SamsungS24Ultra4,
            SamsungS24Ultra5,
        ],
        imgData2: [
            SamsungS24Ultra11,
            SamsungS24Ultra12,
            SamsungS24Ultra13,
            SamsungS24Ultra14,
            SamsungS24Ultra15,
        ],
        productData: [
            { label: 'Brand', value: 'Samsung' },
            { label: 'Model Name', value: 'Galaxy S24 Ultra' },
            { label: 'Display', value: 'Dynamic AMOLED 2X, 6.8-inch, 3120 x 1440 (Quad HD+)' },
            { label: 'Processor', value: 'Snapdragon 8 Gen 3' },
            { label: 'Operating System', value: 'Android 14' },
            { label: 'Cellular Technology', value: '5G (model dependent)' },
            { label: 'Network Service Provider', value: 'Unlocked (varies by retailer)' },
            { label: 'Battery Capacity', value: '5000mAh' }
        ],
        technicalData: [
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
        ],
        sizeOptions: [
            '12GB + 256GB',
            '12GB + 512GB',
            '12GB + 1TB',
        ],
        colorOptions: [
            SamsungS24Ultra1,
            SamsungS24Ultra11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
        ],
        sliderImgSet: [
            { img: [SamsungS24UltraDetails11] },
            { img: [SamsungS24UltraDetails21, SamsungS24UltraDetails22, SamsungS24UltraDetails23] },
            { img: [SamsungS24UltraDetails31, SamsungS24UltraDetails32, SamsungS24UltraDetails33, SamsungS24UltraDetails34] },
            { img: [SamsungS24UltraDetails41, SamsungS24UltraDetails42, SamsungS24UltraDetails43, SamsungS24UltraDetails44] },
            { img: [SamsungS24UltraDetails51, SamsungS24UltraDetails52, SamsungS24UltraDetails53, SamsungS24UltraDetails54] },
            { img: [SamsungS24UltraDetails61, SamsungS24UltraDetails62, SamsungS24UltraDetails63] }
        ]
    };
    const getProductByName = (productName) => {
        switch (productName) {
            case 'samsungS24Ultra':
                return samsungS24Ultra;
            default:
                return null;
        }
    };
    const productDetails = getProductByName(productNameId);;


    const firstImgData = productDetails?.imgData[0];
    const firstImgData2 = productDetails?.imgData2[0];
    const [mainImg, setMainImg] = useState(firstImgData);
    const [imgShow, setImgShow] = useState(productDetails.imgData);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgSideBarContain}>
                        {imgShow.map((imgUrl, index) => (
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
                    <h1 className={styles.productName}>{productDetails.name}</h1>
                    <div className={styles.priceSection}>
                        <div className={styles.priceRow}>
                            {productDetails.price}
                            <div className={styles.mrpPrice}>M.R.P.: <span className={styles.realPrice}>{productDetails.mrp}</span></div>
                            <div className={styles.tax}>{productDetails.tax}</div>
                        </div>
                    </div>
                    <div className={styles.sizeContainer}>
                        <div className={styles.heading}>Size:</div>
                        <div className={styles.sizeNumberContain}>
                            {productDetails.sizeOptions.map((sizeNo, index) => (
                                <span className={styles.sizeNumber} key={index}>{sizeNo}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.colorContainer}>
                        <div className={styles.heading}>Color:</div>
                        <div className={styles.colorContain}>
                            {productDetails.colorOptions.map((colorImgs, index) => (
                                <img
                                    src={colorImgs}
                                    className={styles.colorImg}
                                    key={index}
                                    alt={productDetails.name}
                                    onClick={() => productDetails.colorChange[index]()}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.btnSection}>
                        <div className={styles.btnContain}>
                            <button className={styles.minusBtn} onClick={decrementQuantity}><FiMinus className={styles.minusIcon} /></button>
                            <span className={styles.showQuantity}>{quantity}</span>
                            <button className={styles.addBtn} onClick={incrementQuantity}><IoMdAdd className={styles.addIcon} /></button>
                        </div>
                    </div>
                    <div className={styles.serviceContainer}>
                        <div className={`${styles['serviceRow']}  ${styles['top']}`}>
                            <div className={styles.iconContainer}>
                                <MdOutlineLocalShipping className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.headingCS}>Free Delivery</div>
                                <div className={styles.para}>Enter your Postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div className={`${styles['serviceRow']} ${styles['bottom']}`}>
                            <div className={styles.iconContainer}>
                                <LuPackage2 className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.headingCS}>Return Delivery</div>
                                <div className={styles.para}>Free 10 days Delivery Return. <span className={styles.detailSpan}>Details</span></div>
                            </div>
                        </div>
                    </div>
                    <Collapsible data={productDetails.productData} heading='Product Details' />
                    <Collapsible data={productDetails.technicalData} heading='Technical Details' />
                </div>
            </div>
            <Slider dataImgSlider={productDetails} />
        </>
    );
};

export default ProductDetail;
