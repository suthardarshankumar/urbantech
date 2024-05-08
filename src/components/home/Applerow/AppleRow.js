import React, { useState } from 'react';
import styles from './AppleRow.module.css';
import iPadAir from '../../../assets/Img/HomeImg/HomeSection2/home1.png';
import AppleWatch from '../../../assets/Img/HomeImg/HomeSection2/home2.png';
import { useCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

import iPadAir5ThGen11 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/11.jpg';
import iPadAir5ThGen12 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/12.jpg';
import iPadAir5ThGen13 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/13.jpg';
import iPadAir5ThGen14 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/14.jpg';
import iPadAir5ThGen15 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/15.jpg';
import iPadAir5ThGen16 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/16.jpg';
import iPadAir5ThGen21 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/21.jpg';
import iPadAir5ThGen22 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/22.jpg';
import iPadAir5ThGen23 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/23.jpg';
import iPadAir5ThGen24 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/24.jpg';
import iPadAir5ThGen25 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/25.jpg';
import iPadAir5ThGen26 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/26.jpg';
import iPadAir5ThGen31 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/31.jpg';
import iPadAir5ThGen32 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/32.jpg';
import iPadAir5ThGen33 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/33.jpg';
import iPadAir5ThGen34 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/34.jpg';
import iPadAir5ThGen35 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/35.jpg';
import iPadAir5ThGen36 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/36.jpg';

import iPad11Pro4ThGen11 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/11.jpg';
import iPad11Pro4ThGen12 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/12.jpg';
import iPad11Pro4ThGen13 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/13.jpg';
import iPad11Pro4ThGen14 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/14.jpg';
import iPad11Pro4ThGen15 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/15.jpg';
import iPad11Pro4ThGen16 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/16.jpg';
import iPad11Pro4ThGen17 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/17.jpg';
import iPad11Pro4ThGen21 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/21.jpg';
import iPad11Pro4ThGen22 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/22.jpg';
import iPad11Pro4ThGen23 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/23.jpg';
import iPad11Pro4ThGen24 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/24.jpg';
import iPad11Pro4ThGen25 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/25.jpg';
import iPad11Pro4ThGen26 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/26.jpg';
import iPad11Pro4ThGen27 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/27.jpg';

const AppleRow = () => {
    const { productPage } = useCart();
    const iPad11Pro4Gen = {
        name: 'Apple iPad (10th Generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue',
        price: '₹89,999',
        mrp: '₹94,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPad11Pro4ThGen11,
            iPad11Pro4ThGen12,
            iPad11Pro4ThGen13,
            iPad11Pro4ThGen14,
            iPad11Pro4ThGen15,
            iPad11Pro4ThGen16,
            iPad11Pro4ThGen17,
        ],
        imgData2: [
            iPad11Pro4ThGen21,
            iPad11Pro4ThGen22,
            iPad11Pro4ThGen23,
            iPad11Pro4ThGen24,
            iPad11Pro4ThGen25,
            iPad11Pro4ThGen26,
            iPad11Pro4ThGen27,
        ],
        "productData": [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPad Pro 11-inch (4th generation)" },
            { "label": "Year", "value": "2023" },
            { "label": "Chip", "value": "Apple M2 chip with an 8-core CPU, 10-core GPU, and 16-core Neural Engine" },
            { "label": "Display", "value": "11-inch Liquid Retina display with 2388 x 1668 resolution, ProMotion technology (120Hz refresh rate), wide color (P3), True Tone, and fingerprint-resistant oleophobic coating" },
            { "label": "Operating System", "value": "iPadOS 16 (latest version)" },
        ],
        "technicalData": [
            { "label": "Storage Capacity", "value": "Available in variants: 128GB, 256GB, 512GB, 1TB, 2TB" },
            { "label": "Memory", "value": "8GB RAM for models with 128GB, 256GB, or 512GB storage; 16GB RAM for models with 1TB or 2TB storage" },
            { "label": "Front Camera", "value": "12MP TrueDepth camera with Center Stage for video calls" },
            { "label": "Rear Camera System", "value": "Dual-camera system with a 12MP wide camera and a 10MP ultrawide camera" },
            { "label": "Battery", "value": "Up to 10 hours of battery life (according to Apple)" },
            { "label": "Connectivity", "value": "Wi-Fi 6E for ultrafast wireless connections" },
            { "label": "Cellular Technology", "value": "Wi-Fi only or Wi-Fi + Cellular (model dependent)" },
            { "label": "Ports", "value": "Thunderbolt 4 port for charging and high-speed data transfer" },
            { "label": "Audio", "value": "Four-speaker sound system with support for Dolby Atmos" },
            { "label": "Accessories", "value": "Compatible with Apple Pencil (2nd generation) and Magic Keyboard (sold separately)" },
            { "label": "Dimensions", "value": "248.6 mm (9.79 inches) height, 167.1 mm (6.58 inches) width, and 5.9 mm (0.23 inches) thickness" },
            { "label": "Weight", "value": "466 grams (1.03 pounds) for Wi-Fi model, 512 grams (1.13 pounds) for Wi-Fi + Cellular model" },
        ],
        sizeOptions: [
            '128G',
            '256GB',
            '512GB',
        ],
        colorOptions: [
            iPad11Pro4ThGen11,
            iPad11Pro4ThGen21,
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };

    const iPadAir5ThGen = {
        name: 'Apple iPad Air (5th Generation): with M1 chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue',
        price: '₹54,999',
        mrp: '₹59,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPadAir5ThGen11,
            iPadAir5ThGen12,
            iPadAir5ThGen13,
            iPadAir5ThGen14,
            iPadAir5ThGen15,
            iPadAir5ThGen16,
        ],
        imgData2: [
            iPadAir5ThGen21,
            iPadAir5ThGen22,
            iPadAir5ThGen23,
            iPadAir5ThGen24,
            iPadAir5ThGen25,
            iPadAir5ThGen26,
        ],
        imgData3: [
            iPadAir5ThGen31,
            iPadAir5ThGen32,
            iPadAir5ThGen33,
            iPadAir5ThGen34,
            iPadAir5ThGen35,
            iPadAir5ThGen36,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPad Air (5th Generation)" },
            { "label": "Chip", "value": "Apple M1 chip" },
            { "label": "Display", "value": "10.9-inch Liquid Retina display" },
            { "label": "Operating System", "value": "iPadOS 17 (expected)" },
            { "label": "Cellular Technology", "value": "Wi-Fi or Wi-Fi + Cellular (model dependent)" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Life", "value": "Up to all-day battery life (typical)" }
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in various capacities (check Apple website for details)" },
            { "label": "Front Camera", "value": "12MP Ultra Wide" },
            { "label": "Rear Camera", "value": "12MP Wide" },
            { "label": "Apple Pencil Support", "value": "Yes (2nd generation)" },
            { "label": "Magic Keyboard Support", "value": "Yes" },
            { "label": "Audio", "value": "Stereo speakers" },
            { "label": "Connectivity", "value": "USB-C connector" },
            { "label": "Fingerprint Sensor", "value": "Touch ID integrated in top button" },
            { "label": "Material", "value": "Aluminum enclosure" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPadAir5ThGen11,
            iPadAir5ThGen21,
            iPadAir5ThGen31,
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };

    return (
        <>
            <div className={`${styles['row']}`}>
                <div className={`${styles['row-sec']}`}>
                    <div className={`${styles['col']}`}>
                        <img className={`${styles['img']} ${styles['Ipad']}`} src={iPadAir} alt='' />
                        <div className={`${styles['col-detail']}`}>
                            <h1 className={`${styles['heading']}`}>Apple<br />iPad Air</h1>
                            <p className={`${styles['para']}`}>Serious performance<br />in a thin and light design.</p>
                            <Link to={`/product-page/iPadAir5thGen`} className={styles.cardLink}><button className={`${styles['btn']} ${styles['Ipad-btn']}`}
                                onClick={() => productPage(iPadAir5ThGen)}>Buy Now</button></Link>
                        </div>
                    </div>
                    <div className={`${styles['col']}`}>
                        <img className={`${styles['img']} ${styles['AppleWatch']}`} src={AppleWatch} alt='' />
                        <div className={`${styles['col-detail']}`}>
                            <h1 className={`${styles['heading']}`}>Apple<br />Watch SE</h1>
                            <p className={`${styles['para']}`}>All the essentials.<br />Light on price.</p>
                            <Link to={`/product-page/iPadAir5thGen`} className={styles.cardLink}><button className={`${styles['btn']} ${styles['Ipad-btn']}`}
                                onClick={() => productPage(iPad11Pro4Gen)}>Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppleRow;