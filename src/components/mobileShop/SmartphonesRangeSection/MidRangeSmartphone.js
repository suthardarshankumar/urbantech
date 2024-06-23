import React from 'react'
import FilterCard from '../../common/Card/FilterCard';
import honorX9B from '../../../assets/Img/MobileShop/MidrangeSmartphones/honorX9B.png';
import iqooZ7Pro from '../../../assets/Img/MobileShop/MidrangeSmartphones/iqooZ7Pro.png';
import iqooZ9 from '../../../assets/Img/MobileShop/MidrangeSmartphones/iqooZ9.png';
import onePlusNordCE3 from '../../../assets/Img/MobileShop/MidrangeSmartphones/onePlusNordCE3.png';
import onePlusNordCE3Lite from '../../../assets/Img/MobileShop/MidrangeSmartphones/onePlusNordCE3Lite.png';
import realmenarzo70pro from '../../../assets/Img/MobileShop/MidrangeSmartphones/realmeNarzo70Pro.png';
import samsungM34 from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungM34.png';
import oneplus12R from '../../../assets/Img/MobileShop/MidrangeSmartphones/onePlus12R.png';
import realme12Pro from '../../../assets/Img/MobileShop/MidrangeSmartphones/realme12Pro.png';
import iqooNeo9Pro from '../../../assets/Img/MobileShop/MidrangeSmartphones/iqooNeo9Pro.png';
import redmiNote13 from '../../../assets/Img/MobileShop/MidrangeSmartphones/redmiNote13.png';
import realme12 from '../../../assets/Img/MobileShop/MidrangeSmartphones/realme12.png';
import nothingPhone2a from '../../../assets/Img/MobileShop/MidrangeSmartphones/nothingPhone2a.png';
import lavaAgni2 from '../../../assets/Img/MobileShop/MidrangeSmartphones/lavaAgni2.png';
import oneplusNord3 from '../../../assets/Img/MobileShop/MidrangeSmartphones/oneplusNord3.png';
import oppoF25Pro from '../../../assets/Img/MobileShop/MidrangeSmartphones/oppoF25Pro.png';
import oneplus11R from '../../../assets/Img/MobileShop/MidrangeSmartphones/oneplus11R.png';
import samsungA55 from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungA55.png';
import samsungF54 from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungF54.png';
import honor90 from '../../../assets/Img/MobileShop/MidrangeSmartphones/honor90.png';
import iqooNeo7Pro from '../../../assets/Img/MobileShop/MidrangeSmartphones/iqooNeo7Pro.png';
import samsungA34 from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungA34.png';
import lavaBlazeCurve from '../../../assets/Img/MobileShop/MidrangeSmartphones/lavaBlazeCurve.png';
import samsungS21FE from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungS21FE.png';
import samsungA15 from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungA15.png';
import samsungA54 from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungA54.png';
import samsungA35 from '../../../assets/Img/MobileShop/MidrangeSmartphones/samsungA35.png';

const MidRangeSmartphone = () => {
    const mobileBrands = ['Samsung', 'Apple', 'OnePlus', 'Vivo', 'Lava', 'Oppo', 'Realme', 'Redmi', 'Poco', 'iQOO', 'Honor', 'Nothing', 'Motorola'];
    const midRangeHeading = 'Midrange Smartphones';
    const midRangeSmartphonesDataSet = [
        {
            img: onePlusNordCE3Lite,
            name: "OnePlus Nord CE 3 Lite 5G",
            price: "₹17,999",
            productNameId: 'onePlusNordCE3Lite',
            brand: 'OnePlus',
        },
        {
            img: iqooZ9,
            name: "IQOO Z9 5G",
            price: "₹19,999",
            productNameId: 'iqooZ6Lite',
            brand: 'iQOO',
        },
        {
            img: realmenarzo70pro,
            name: "Realme NARZO 70 Pro 5G",
            price: "₹21,999",
            productNameId: 'realmenarzo60X5G',
            brand: 'Realme',
        },
        {
            img: onePlusNordCE3,
            name: "OnePlus Nord CE 3 5G",
            price: "₹24,999",
            productNameId: 'onePlusNordCE3',
            brand: 'OnePlus',
        },
        {
            img: iqooZ7Pro,
            name: "IQOO Z7 Pro 5G",
            price: "₹24,999",
            productNameId: 'iqooZ7Pro',
            brand: 'iQOO',
        },
        {
            img: samsungM34,
            name: "Samsung Galaxy M34",
            price: "₹15,999",
            productNameId: 'samsungM34',
            brand: 'Samsung',
        },
        {
            img: honorX9B,
            name: "Honor X9b 5G",
            price: "₹25,999",
            productNameId: 'samsungM34',
            brand: 'Honor',
        },
        {
            img: oneplus12R,
            name: "OnePlus 12R",
            price: "₹39,999",
            productNameId: 'oneplus12r',
            brand: 'OnePlus',
        },
        {
            img: realme12Pro,
            name: "Realme 12 Pro 5G",
            price: "₹23,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Realme',
        },
        {
            img: iqooNeo9Pro,
            name: "IQOO Neo 9 Pro 5G",
            price: "₹36,999",
            productNameId: 'samsungS24Ultra',
            brand: 'iQOO',
        },
        {
            img: redmiNote13,
            name: "Redmi Note 13 5G",
            price: "₹17,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Redmi',
        },
        {
            img: realme12,
            name: "realme 12 5G",
            price: "₹16,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Realme',
        },
        {
            img: nothingPhone2a,
            name: "Nothing Phone (2a)",
            price: "₹24,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Nothing',
        },
        {
            img: lavaAgni2,
            name: "Lava Agni 2 5G",
            price: "₹17,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Lava',
        },
        {
            img: oneplusNord3,
            name: "OnePlus Nord 3",
            price: "₹28,999",
            productNameId: 'samsungS24Ultra',
            brand: 'OnePlus',
        },
        {
            img: oppoF25Pro,
            name: "Oppo F25 Pro 5G",
            price: "₹23,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Oppo',
        },
        {
            img: oneplus11R,
            name: "OnePlus 11R",
            price: "₹35,999",
            productNameId: 'samsungS24Ultra',
            brand: 'OnePlus',
        },
        {
            img: samsungA55,
            name: "Samsung Galaxy A55",
            price: "₹39,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Samsung',
        },
        {
            img: samsungF54,
            name: "Samsung Galaxy F54",
            price: "₹23,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Samsung',
        },
        {
            img: honor90,
            name: "HONOR 90",
            price: "₹29,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Honor',
        },
        {
            img: iqooNeo7Pro,
            name: "IQOO Neo 7 Pro",
            price: "₹30,999",
            productNameId: 'samsungS24Ultra',
            brand: 'iQOO',
        },
        {
            img: samsungA34,
            name: "Samsung Galaxy A34",
            price: "₹26,499",
            productNameId: 'samsungS24Ultra',
            brand: 'Samsung',
        },
        {
            img: lavaBlazeCurve,
            name: "Lava Blaze Curve",
            price: "₹17,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Lava',
        },
        {
            img: samsungS21FE,
            name: "Samsung Galaxy S21 FE",
            price: "₹34,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Samsung',
        },
        {
            img: samsungA15,
            name: "Samsung Galaxy A15",
            price: "₹16,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Samsung',
        },
        {
            img: samsungA54,
            name: "Samsung Galaxy A54",
            price: "₹35,499",
            productNameId: 'samsungS24Ultra',
            brand: 'Samsung',
        },
        {
            img: samsungA35,
            name: "Samsung Galaxy A35",
            price: "₹30,999",
            productNameId: 'samsungS24Ultra',
            brand: 'Samsung',
        },
    ];

    return (
        <>
            <FilterCard images={midRangeSmartphonesDataSet} heading={midRangeHeading} brands={mobileBrands} />
        </>
    )
}

export default MidRangeSmartphone;