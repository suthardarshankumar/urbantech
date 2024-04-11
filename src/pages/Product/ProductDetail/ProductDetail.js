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
import iPhone1511 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/11.webp';
import iPhone1512 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/12.jpg';
import iPhone1513 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/13.jpg';
import iPhone1514 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/14.jpg';
import iPhone1515 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/15.jpg';
import iPhone1516 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/16.jpg';
import iPhone1521 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/21.jpg';
import iPhone1522 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/22.jpg';
import iPhone1523 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/23.jpg';
import iPhone1524 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/24.jpg';
import iPhone1525 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/25.jpg';
import iPhone1526 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/26.jpg';
import iPhone1531 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/31.jpg';
import iPhone1532 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/32.jpg';
import iPhone1533 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/33.jpg';
import iPhone1534 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/34.jpg';
import iPhone1535 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/35.jpg';
import iPhone1536 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/36.jpg';

import iPhone15Pro11 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/11.jpg';
import iPhone15Pro12 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/12.jpg';
import iPhone15Pro13 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/13.jpg';
import iPhone15Pro14 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/14.jpg';
import iPhone15Pro15 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/15.jpg';
import iPhone15Pro16 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/16.jpg';
import iPhone15Pro21 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/21.jpg';
import iPhone15Pro22 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/22.jpg';
import iPhone15Pro23 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/23.jpg';
import iPhone15Pro24 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/24.jpg';
import iPhone15Pro25 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/25.jpg';
import iPhone15Pro26 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/26.jpg';
import iPhone15Pro31 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/31.jpg';
import iPhone15Pro32 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/32.jpg';
import iPhone15Pro33 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/33.jpg';
import iPhone15Pro34 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/34.jpg';
import iPhone15Pro35 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/35.jpg';
import iPhone15Pro36 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/36.jpg';

import iPhone15ProMax11 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/11.jpg';
import iPhone15ProMax12 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/12.jpg';
import iPhone15ProMax13 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/13.jpg';
import iPhone15ProMax14 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/14.jpg';
import iPhone15ProMax15 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/15.jpg';
import iPhone15ProMax16 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/16.jpg';
import iPhone15ProMax21 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/21.jpg';
import iPhone15ProMax22 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/22.jpg';
import iPhone15ProMax23 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/23.jpg';
import iPhone15ProMax24 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/24.jpg';
import iPhone15ProMax25 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/25.jpg';
import iPhone15ProMax26 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/26.jpg';
import iPhone15ProMax31 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/31.jpg';
import iPhone15ProMax32 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/32.jpg';
import iPhone15ProMax33 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/33.jpg';
import iPhone15ProMax34 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/34.jpg';
import iPhone15ProMax35 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/35.jpg';
import iPhone15ProMax36 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/36.jpg';
import iPhone15ProMax41 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/41.jpg';
import iPhone15ProMax42 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/42.jpg';
import iPhone15ProMax43 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/43.jpg';
import iPhone15ProMax44 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/44.jpg';
import iPhone15ProMax45 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/45.jpg';
import iPhone15ProMax46 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/46.jpg';


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
    const iPhone15 = {
        name: 'Apple iPhone 15 (128 GB) - Black',
        price: '₹73,999',
        mrp: 'M.R.P.: ₹79,999',
        tax: 'Inclusive of all taxes',
        imgData: [
            iPhone1511,
            iPhone1512,
            iPhone1513,
            iPhone1514,
            iPhone1515,
            iPhone1516,
        ],
        imgData2: [
            iPhone1521,
            iPhone1522,
            iPhone1523,
            iPhone1524,
            iPhone1525,
            iPhone1526,
        ],
        imgData3: [
            iPhone1531,
            iPhone1532,
            iPhone1533,
            iPhone1534,
            iPhone1535,
            iPhone1536,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPhone 15" },
            { "label": "Display", "value": "6.1-inch Super Retina XDR OLED" },
            { "label": "Processor", "value": "Apple A16 Bionic chip" },
            { "label": "Operating System", "value": "iOS 17" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Up to 20 hours of video playback (typical)" }
        ],
        technicalData: [
            { "label": "OS", "value": "iOS 17 (expected)" },
            { "label": "Product Dimensions", "value": "Height: 146.7 mm (5.78 inches), Width: 71.5 mm (2.81 inches), Depth: 7.81 mm (0.31 inches)" },
            { "label": "Batteries", "value": "Non-removable, rechargeable lithium-ion battery" },
            { "label": "Wireless communication technologies", "value": "Cellular, Wi-Fi, Bluetooth 5.3" },
            { "label": "GPS", "value": "Yes" },
            { "label": "Special features", "value": "Face ID, Crash Detection, MagSafe charging" },
            { "label": "Other display features", "value": "HDR, True Tone, Haptic Touch" },
            { "label": "Main Camera", "value": "48-megapixel wide, 12-megapixel ultrawide" },
            { "label": "Front Camera", "value": "12-megapixel TrueDepth" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Form factor", "value": "Bar" },
            { "label": "Colour", "value": "Multiple colors available (subject to change)" },
            { "label": "Whats in the box", "value": "iPhone with iOS, USB-C to Lightning Cable, Documentation" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPhone1511,
            iPhone1521,
            iPhone1531,
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
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: [
                    iPhone1511,
                    iPhone1512,
                    iPhone1513,
                    iPhone1514,
                    iPhone1515,
                    iPhone1516,
                ]
            },
            {
                img: [
                    iPhone1521,
                    iPhone1522,
                    iPhone1523,
                    iPhone1524,
                    iPhone1525,
                    iPhone1526,
                ]
            },
            {
                img: [
                    iPhone1531,
                    iPhone1532,
                    iPhone1533,
                    iPhone1534,
                    iPhone1535,
                    iPhone1536,
                ]
            },

        ]
    };
    const iPhone15Pro = {
        name: 'Apple iPhone 15 Pro (128 GB) - Natural Titanium',
        price: '₹1,25,999',
        mrp: 'M.R.P.: ₹1,30,999',
        tax: 'Inclusive of all taxes',
        imgData: [
            iPhone15Pro11,
            iPhone15Pro12,
            iPhone15Pro13,
            iPhone15Pro14,
            iPhone15Pro15,
            iPhone15Pro16,
        ],
        imgData2: [
            iPhone15Pro21,
            iPhone15Pro22,
            iPhone15Pro23,
            iPhone15Pro24,
            iPhone15Pro25,
            iPhone15Pro26,
        ],
        imgData3: [
            iPhone15Pro31,
            iPhone15Pro32,
            iPhone15Pro33,
            iPhone15Pro34,
            iPhone15Pro35,
            iPhone15Pro36,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPhone 15 Pro" },
            { "label": "Display", "value": "6.1-inch or 6.7-inch Super Retina XDR OLED" },
            { "label": "Processor", "value": "Apple A17 Bionic chip" },
            { "label": "Operating System", "value": "iOS 17" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Up to xx hours of video playback (typical)" }
        ],
        technicalData: [
            { "label": "OS", "value": "iOS 17" },
            { "label": "Product Dimensions", "value": "Varying depending on model (check Apple website for details)" },
            { "label": "Batteries", "value": "Non-removable, rechargeable lithium-ion battery" },
            { "label": "Wireless communication technologies", "value": "Cellular, Wi-Fi, Bluetooth 5.3" },
            { "label": "GPS", "value": "Yes" },
            { "label": "Special features", "value": "Face ID, Crash Detection, MagSafe charging, ProRes video recording" },
            { "label": "Other display features", "value": "HDR, True Tone, Haptic Touch, Always-On display (possible)" },
            { "label": "Main Camera", "value": "48-megapixel wide, 12-megapixel ultrawide, new telephoto lens (details not confirmed yet)" },
            { "label": "Front Camera", "value": "12-megapixel TrueDepth" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Form factor", "value": "Bar" },
            { "label": "Colour", "value": "Multiple colors available (subject to change)" },
            { "label": "Whats in the box", "value": "iPhone with iOS, USB-C to Lightning Cable, Documentation" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPhone15Pro11,
            iPhone15Pro21,
            iPhone15Pro31,
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
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: [
                    iPhone15Pro11,
                    iPhone15Pro12,
                    iPhone15Pro13,
                    iPhone15Pro14,
                    iPhone15Pro15,
                    iPhone15Pro16,
                ]
            },
            {
                img: [
                    iPhone15Pro21,
                    iPhone15Pro22,
                    iPhone15Pro23,
                    iPhone15Pro24,
                    iPhone15Pro25,
                    iPhone15Pro26,
                ]
            },
            {
                img: [
                    iPhone15Pro31,
                    iPhone15Pro32,
                    iPhone15Pro33,
                    iPhone15Pro34,
                    iPhone15Pro35,
                    iPhone15Pro36,
                ]
            },

        ]
    };
    const iPhone15ProMax = {
        name: 'Apple iPhone 15 Pro Max (1 TB) - Blue Titanium',
        price: '₹1,49,999',
        mrp: 'M.R.P.: ₹1,59,999',
        tax: 'Inclusive of all taxes',
        imgData: [
            iPhone15ProMax11,
            iPhone15ProMax12,
            iPhone15ProMax13,
            iPhone15ProMax14,
            iPhone15ProMax15,
            iPhone15ProMax16,
        ],
        imgData2: [
            iPhone15ProMax21,
            iPhone15ProMax22,
            iPhone15ProMax23,
            iPhone15ProMax24,
            iPhone15ProMax25,
            iPhone15ProMax26,
        ],
        imgData3: [
            iPhone15ProMax31,
            iPhone15ProMax32,
            iPhone15ProMax33,
            iPhone15ProMax34,
            iPhone15ProMax35,
            iPhone15ProMax36,
        ],
        imgData4: [
            iPhone15ProMax41,
            iPhone15ProMax42,
            iPhone15ProMax43,
            iPhone15ProMax44,
            iPhone15ProMax45,
            iPhone15ProMax46,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPhone 15 Pro Max" },
            { "label": "Display", "value": "6.7-inch Super Retina XDR OLED" },
            { "label": "Processor", "value": "Apple A17 Bionic chip" },
            { "label": "Operating System", "value": "iOS 17" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Up to xx hours of video playback (typical)" }
        ],
        technicalData: [
            { "label": "OS", "value": "iOS 17" },
            { "label": "Product Dimensions", "value": "Varying depending on model (check Apple website for details)" },
            { "label": "Batteries", "value": "Non-removable, rechargeable lithium-ion battery" },
            { "label": "Wireless communication technologies", "value": "Cellular, Wi-Fi, Bluetooth 5.3" },
            { "label": "GPS", "value": "Yes" },
            { "label": "Special features", "value": "Face ID, Crash Detection, MagSafe charging, ProRes video recording" },
            { "label": "Other display features", "value": "HDR, True Tone, Haptic Touch, Always-On display (possible)" },
            { "label": "Main Camera", "value": "48-megapixel wide, 12-megapixel ultrawide, new telephoto lens with improved zoom (details not confirmed yet)" },
            { "label": "Front Camera", "value": "12-megapixel TrueDepth" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Form factor", "value": "Bar" },
            { "label": "Colour", "value": "Multiple colors available (subject to change)" },
            { "label": "Whats in the box", "value": "iPhone with iOS, USB-C to Lightning Cable, Documentation" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPhone15ProMax11,
            iPhone15ProMax21,
            iPhone15ProMax31,
            iPhone15ProMax41,
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
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
            () => {
                setImgShow(productDetails.imgData4);
                setMainImg(firstImgData4);
            },
        ],
        sliderImgSet: [
            {
                img: [
                    iPhone15ProMax11,
                    iPhone15ProMax12,
                    iPhone15ProMax13,
                    iPhone15ProMax14,
                    iPhone15ProMax15,
                    iPhone15ProMax16,
                ]
            },
            {
                img: [
                    iPhone15ProMax21,
                    iPhone15ProMax22,
                    iPhone15ProMax23,
                    iPhone15ProMax24,
                    iPhone15ProMax25,
                    iPhone15ProMax26,
                ]
            },
            {
                img: [
                    iPhone15ProMax31,
                    iPhone15ProMax32,
                    iPhone15ProMax33,
                    iPhone15ProMax34,
                    iPhone15ProMax35,
                    iPhone15ProMax36,
                ]
            },

        ]
    };
    const getProductByName = (productName) => {
        switch (productName) {
            case 'samsungS24Ultra':
                return samsungS24Ultra;
            case 'iPhone15':
                return iPhone15;
            case 'iPhone15Pro':
                return iPhone15Pro;
            case 'iPhone15ProMax':
                return iPhone15ProMax;
            default:
                return null;
        }
    };

    const productDetails = getProductByName(productNameId);;


    const firstImgData = productDetails.imgData?.[0];
    const firstImgData2 = productDetails.imgData2?.[0];
    const firstImgData3 = productDetails.imgData3?.[0];
    const firstImgData4 = productDetails.imgData4?.[0];
    const [mainImg, setMainImg] = useState(firstImgData || null);
    const [imgShow, setImgShow] = useState(productDetails.imgData || []);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (!productDetails) {
        return <div>Error: Product details not found</div>;
    }

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
