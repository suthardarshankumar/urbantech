import React from 'react';
import styles from './ProductDetails.module.css';
import ProductHeading from '../ProductHeading/ProductHeading';
import QuantityBtn from '../QuantityBtn/QuantityBtn';
import CompanyService from '../CompanyService/CompanyService';
import Collapsible from '../Collapsible/Collapsible';
import Size from '../Size/Size';

const ProductDetails = () => {

    const productDataHeading = 'Product Details';
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

    const technicalDataHeading = 'Technical Details';
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

    const sizeDataSet = [
        '12GB + 256GB',
        '12GB + 512GB',
        '12GB + 1TB',
    ]

    return (
        <>
            <div className={styles.right}>
                <ProductHeading />
                <Size size={sizeDataSet} />
                <QuantityBtn />
                <CompanyService />
                <Collapsible data={productData} heading={productDataHeading} />
                <Collapsible data={technicalData} heading={technicalDataHeading} />
            </div>
        </>
    )
}

export default ProductDetails;