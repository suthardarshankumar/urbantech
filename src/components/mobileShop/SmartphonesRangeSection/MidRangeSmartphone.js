import React from 'react'
import Card from '../../common/Card/Card';
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
    const midRangeHeading = 'Midrange Smartphones';
    const midRangeSmartphonesDataSet = [
        {
            img: onePlusNordCE3Lite,
            name: "OnePlus Nord CE 3 Lite 5G",
            price: "₹17,999",
        },
        {
            img: iqooZ9,
            name: "IQOO Z9 5G",
            price: "₹19,999",
        },
        {
            img: realmenarzo70pro,
            name: "Realme NARZO 70 Pro 5G",
            price: "₹21,999",
        },
        {
            img: onePlusNordCE3,
            name: "OnePlus Nord CE 3 5G",
            price: "₹24,999",
        },
        {
            img: iqooZ7Pro,
            name: "IQOO Z7 Pro 5G",
            price: "₹24,999",
        },
        {
            img: samsungM34,
            name: "Samsung Galaxy M34",
            price: "₹15,999",
        },
        {
            img: honorX9B,
            name: "Honor X9b 5G",
            price: "₹25,999",
        },
        {
            img: oneplus12R,
            name: "OnePlus 12R",
            price: "₹39,999",
        },
        {
            img: realme12Pro,
            name: "Realme 12 Pro 5G",
            price: "₹23,999",
        },
        {
            img: iqooNeo9Pro,
            name: "IQOO Neo 9 Pro 5G",
            price: "₹36,999",
        },
        {
            img: redmiNote13,
            name: "Redmi Note 13 5G",
            price: "₹17,999",
        },
        {
            img: realme12,
            name: "realme 12 5G",
            price: "₹16,999",
        },
        {
            img: nothingPhone2a,
            name: "Nothing Phone (2a)",
            price: "₹24,999",
        },
        {
            img: lavaAgni2,
            name: "Lava Agni 2 5G",
            price: "₹17,999",
        },
        {
            img: oneplusNord3,
            name: "OnePlus Nord 3",
            price: "₹28,999",
        },
        {
            img: oppoF25Pro,
            name: "Oppo F25 Pro 5G",
            price: "₹23,999",
        },
        {
            img: oneplus11R,
            name: "OnePlus 11R",
            price: "₹35,999",
        },
        {
            img: samsungA55,
            name: "Samsung Galaxy A55",
            price: "₹39,999",
        },
        {
            img: samsungF54,
            name: "Samsung Galaxy F54",
            price: "₹23,999",
        },
        {
            img: honor90,
            name: "HONOR 90",
            price: "₹29,999",
        },
        {
            img: iqooNeo7Pro,
            name: "IQOO Neo 7 Pro",
            price: "₹30,999",
        },
        {
            img: samsungA34,
            name: "Samsung Galaxy A34",
            price: "₹26,499",
        },
        {
            img: lavaBlazeCurve,
            name: "Lava Blaze Curve",
            price: "₹17,999",
        },
        {
            img: samsungS21FE,
            name: "Samsung Galaxy S21 FE",
            price: "₹34,999",
        },
        {
            img: samsungA15,
            name: "Samsung Galaxy A15",
            price: "₹16,999",
        },
        {
            img: samsungA54,
            name: "Samsung Galaxy A54",
            price: "₹35,499",
        },
        {
            img: samsungA35,
            name: "Samsung Galaxy A35",
            price: "₹30,999",
        },
    ];

    return (
        <>
            <Card images={midRangeSmartphonesDataSet} heading={midRangeHeading} />
        </>
    )
}

export default MidRangeSmartphone;