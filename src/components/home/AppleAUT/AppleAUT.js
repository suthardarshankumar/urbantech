import React from 'react';
// import styles from './AppleAUT.module.css';
import Card from '../../common/Card/Card';
import iPhone15 from '../../../assets/Img/HomeImg/AppleAUT/iPhone15.png';
import iPhone15Pro from '../../../assets/Img/HomeImg/AppleAUT/iPhone15Pro.png';
import iPhone15ProMax from '../../../assets/Img/HomeImg/AppleAUT/iPhone15ProMax.png';
import iPadAir5Gen from '../../../assets/Img/HomeImg/AppleAUT/iPadAir5Gen.png';
import airPodsPro2Gen from '../../../assets/Img/HomeImg/AppleAUT/airPodsPro2Gen.png';
import Macbook2022M2 from '../../../assets/Img/HomeImg/AppleAUT/Macbook2022M2.png';
import iphone14 from '../../../assets/Img/HomeImg/AppleAUT/iphone14.png';
import ApppleCharger from '../../../assets/Img/HomeImg/AppleAUT/appleCharger.png';


const AppleAUT = () => {
    const BrandName = 'Apple At ';
    const Title = 'URBANTECH'

    const imgSet = [{
        img: iPhone15,
        name: 'iPhone 15',
        price: '₹69,999',
        rating: '⭐️4.1/5',
    },
    {
        img: iPhone15Pro,
        name: 'iPhone 15 Pro',
        price: '₹1,27,999',
        rating: '⭐️4.7/5',
    },
    {
        img: iPhone15ProMax,
        name: 'iPhone 15 Pro Max',
        price: '₹1,49,999',
        rating: '⭐️4.4/5',
    },
    {
        img: iPadAir5Gen,
        name: 'iPad Air 5 Generation',
        price: '₹57,999',
        rating: '⭐️3.9/5',
    },
    {
        img: airPodsPro2Gen,
        name: 'AirPods Pro 2 Generation',
        price: '₹24,999',
        rating: '⭐️4.0/5',
    },
    {
        img: Macbook2022M2,
        name: 'Macbook Air 2022 M2 Chip',
        price: '₹99,999',
        rating: '⭐️4.8/5',
    },
    {
        img: ApppleCharger,
        name: '20W Charger for iPhone',
        price: '₹699',
        rating: '⭐️4.7/5',
    },
    {
        img: iphone14,
        name: 'Apple iPhone 14',
        price: '₹59,999',
        rating: '⭐️4.6/5',
    }];

    return (
        <>
            <Card images={imgSet} heading={BrandName} title={Title} />
        </>
    )
}

export default AppleAUT;
