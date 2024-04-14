import React from 'react';

import realmenarzo60X from '../../../assets/Img/MobileShop/BudgetSmartphones/realmenarzo60X.png';
import realmenarzo60 from '../../../assets/Img/MobileShop/BudgetSmartphones/realmenarzo60.png';
import samsungM14 from '../../../assets/Img/MobileShop/BudgetSmartphones/samsungM14.png';
import iqooZ6Lite from '../../../assets/Img/MobileShop/BudgetSmartphones/iqooZ6Lite.png';
import redmi12 from '../../../assets/Img/MobileShop/BudgetSmartphones/redmi12.png';
import pocoM6Pro from '../../../assets/Img/MobileShop/BudgetSmartphones/pocoM6Pro.png'
import redmi13C from '../../../assets/Img/MobileShop/BudgetSmartphones/redmi13C.png';
import lavaBlaze from '../../../assets/Img/MobileShop/BudgetSmartphones/lavaBlaze.png';
import samsungM04 from '../../../assets/Img/MobileShop/BudgetSmartphones/samsungM04.png';
import vivoY27 from '../../../assets/Img/MobileShop/BudgetSmartphones/vivoY27.png';
import samsungM13 from '../../../assets/Img/MobileShop/BudgetSmartphones/samsungM13.png';
import vivoY16 from '../../../assets/Img/MobileShop/BudgetSmartphones/vivoY16.png';
import lavaStorm from '../../../assets/Img/MobileShop/BudgetSmartphones/lavaStorm.png';
import oppoA59 from '../../../assets/Img/MobileShop/BudgetSmartphones/oppoA59.png';

import Card from '../../common/Card/Card';

const BudgetSmartphones = () => {

    const head = 'Budget Smartphones'
    const budgetSmartphonesDataSet = [
        {
            img: realmenarzo60X,
            name: "Realme Narzo 60X 5G",
            price: "₹14,499",
            productNameId: 'realmenarzo60X5G',
        },
        {
            img: realmenarzo60,
            name: "Realme Narzo 60 5G",
            price: "₹14,999",
            productNameId: 'realmenarzo60',
        },
        {
            img: samsungM14,
            name: "Samsung Galaxy M14 5G",
            price: "₹10,999",
            productNameId: 'samsungM14',
        },
        {
            img: iqooZ6Lite,
            name: "IQOO Z6 Lite 5G",
            price: "₹11,999",
            productNameId: 'iqooZ6Lite',
        },
        {
            img: redmi12,
            name: "Redmi 12 5G",
            price: "₹11,999",
            productNameId: 'redmi12',
        },
        {
            img: pocoM6Pro,
            name: "Poco M6 Pro 5G",
            price: "₹10,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: redmi13C,
            name: "Redmi 13C 5G",
            price: "₹12,499",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: lavaBlaze,
            name: "Lava Blaze 5G",
            price: "₹9,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungM04,
            name: "Samsung Galaxy M04",
            price: "₹8,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: vivoY27,
            name: "Vivo Y27",
            price: "₹11,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungM13,
            name: "Samsung Galaxy M13",
            price: "₹9,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: vivoY16,
            name: "Vivo Y16",
            price: "₹8,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: lavaStorm,
            name: "Lava Storm 5G",
            price: "₹12,499",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: oppoA59,
            name: "Oppo A59 5G",
            price: "₹13,999",
            productNameId: 'samsungS24Ultra',
        },
    ]

    return (
        <>
            <Card images={budgetSmartphonesDataSet} heading={head} />
        </>
    )
}

export default BudgetSmartphones;