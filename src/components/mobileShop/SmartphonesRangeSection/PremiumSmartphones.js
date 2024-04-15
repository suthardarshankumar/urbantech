import React from 'react';
import Card from '../../common/Card/Card';

import iphone13 from '../../../assets/Img/MobileShop/PremiumSmartphones/iphone13.png';
import iphone15 from '../../../assets/Img/MobileShop/PremiumSmartphones/iphone15.png';
import iqoo12 from '../../../assets/Img/MobileShop/PremiumSmartphones/iqoo12.png';
import oneplus12 from '../../../assets/Img/MobileShop/PremiumSmartphones/oneplus12.png';
import iphone14 from '../../../assets/Img/MobileShop/PremiumSmartphones/iphone14.png';
import iphone14Plus from '../../../assets/Img/MobileShop/PremiumSmartphones/iphone14Plus.png';
import iphone15Plus from '../../../assets/Img/MobileShop/PremiumSmartphones/iphone15Plus.png';
import iphone15Pro from '../../../assets/Img/MobileShop/PremiumSmartphones/iphone15Pro.png';
import iphone15ProMax from '../../../assets/Img/MobileShop/PremiumSmartphones/iphone15ProMax.png';
import xiaomi14 from '../../../assets/Img/MobileShop/PremiumSmartphones/xiaomi14.png';
import samsungS24 from '../../../assets/Img/MobileShop/PremiumSmartphones/samsungS24.png';
import samsungS23FE from '../../../assets/Img/MobileShop/PremiumSmartphones/samsungS23FE.png';
import samsungS24Ultra from '../../../assets/Img/MobileShop/PremiumSmartphones/samsungS24Ultra.png';
import iqoo11 from '../../../assets/Img/MobileShop/PremiumSmartphones/iqoo11.png';
import nothingPhone2 from '../../../assets/Img/MobileShop/PremiumSmartphones/nothingPhone2.png';
import samsungZFold5 from '../../../assets/Img/MobileShop/PremiumSmartphones/samsungZFold5.png';
import samsungZFlip5 from '../../../assets/Img/MobileShop/PremiumSmartphones/samsungZFlip5.png';
import onePlusOpen from '../../../assets/Img/MobileShop/PremiumSmartphones/onePlusOpen.png';
import motorolaRazr40 from '../../../assets/Img/MobileShop/PremiumSmartphones/motorolaRazr40.png';
import motorolaRazr40Ultra from '../../../assets/Img/MobileShop/PremiumSmartphones/motorolaRazr40Ultra.png';



const PremiumSmartphones = () => {

    const premiumHeading = 'Premium Smartphones';
    const premiumSmartphonesDataSet = [
        {
            img: samsungS24,
            name: "Samsung Galaxy S24",
            price: "₹79,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iphone15ProMax,
            name: "Apple iPhone 15 Pro Max",
            price: "₹1,49,999",
            productNameId: 'iPhone15ProMax',
        },
        {
            img: oneplus12,
            name: "OnePlus 12",
            price: "₹69,999",
            productNameId: 'oneplus12',
        },
        {
            img: iphone15,
            name: "Apple iPhone 15",
            price: "₹71,999",
            productNameId: 'iPhone15',
        },
        {
            img: samsungZFlip5,
            name: "Samsung Galaxy Z Flip5 5G",
            price: "₹99,999",
            productNameId: 'samsungZFlip5',
        },
        {
            img: iqoo12,
            name: "IQOO 12",
            price: "₹52,999",
            productNameId: 'iqoo12',
        },
        {
            img: iphone14,
            name: "Apple iPhone14",
            price: "₹59,999",
            productNameId: 'iPhone14',
        }, {
            img: samsungZFold5,
            name: "Samsung Galaxy Z Fold5 5G",
            price: "₹1,54,999",
            productNameId: 'samsungZFold5',
        },
        {
            img: iphone15Pro,
            name: "Apple iPhone 15 Pro",
            price: "₹1,29,999",
            productNameId: 'iPhone15Pro',
        },
        {
            img: iphone14Plus,
            name: "Apple iPhone 14 Plus",
            price: "₹66,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iphone15Plus,
            name: "Apple iPhone 15 Plus",
            price: "₹79,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: onePlusOpen,
            name: "Oneplus Open",
            price: "₹1,39,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: xiaomi14,
            name: "Xiaomi 14",
            price: "₹69,999",
            productNameId: 'samsungS24Ultra',
        }, {
            img: motorolaRazr40Ultra,
            name: "Motorola razr 40 Ultra 5G",
            price: "₹64,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iphone13,
            name: "Apple iPhone13",
            price: "₹51,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungS23FE,
            name: "Samsung Galaxy S23 FE",
            price: "₹40,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungS24Ultra,
            name: "Samsung Galaxy S24 Ultra",
            price: "₹1,24,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iqoo11,
            name: "IQOO 11",
            price: "₹44,999",
            productNameId: 'samsungS24Ultra',
        }, {
            img: motorolaRazr40,
            name: "Motorola razr 40",
            price: "₹44,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: nothingPhone2,
            name: "Nothing Phone 2",
            price: "₹40,999",
            productNameId: 'samsungS24Ultra',
        }
    ];

    return (
        <>
            <Card images={premiumSmartphonesDataSet} heading={premiumHeading} />
        </>
    )
}

export default PremiumSmartphones;