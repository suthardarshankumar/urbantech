import React, { useState } from 'react';
import styles from '../Shop/Shop.module.css';

// Components import
import Card from '../../components/common/Card/Card';
import ShopSlider from '../../components/shop/slider/ShopSlider';

// images import for card
import iPhone15 from '../../assets/Img/HomeImg/AppleAUT/iPhone15.png';
import iPhone15Pro from '../../assets/Img/HomeImg/AppleAUT/iPhone15Pro.png';
import iPhone15ProMax from '../../assets/Img/HomeImg/AppleAUT/iPhone15ProMax.png';
import iPadAir5Gen from '../../assets/Img/HomeImg/AppleAUT/iPadAir5Gen.png';
import airPodsPro2Gen from '../../assets/Img/HomeImg/AppleAUT/airPodsPro2Gen.png';
import Macbook2022M2 from '../../assets/Img/HomeImg/AppleAUT/Macbook2022M2.png';
import iphone14 from '../../assets/Img/HomeImg/AppleAUT/iphone14.png';
import ApppleCharger from '../../assets/Img/HomeImg/AppleAUT/appleCharger.png';
import AcerNitroVGaming from '../../assets/Img/HomeImg/ProductAUT/AcerNitroVGaming.png';
import AmbraneUnbreakable from '../../assets/Img/HomeImg/ProductAUT/AmbraneUnbreakable.png';
import AsusVivoBook15 from '../../assets/Img/HomeImg/ProductAUT/AsusVivoBook15.png';
import boatAirPodes141 from '../../assets/Img/HomeImg/ProductAUT/boatAirPodes141.png';
import boultAudioZ40Pro from '../../assets/Img/HomeImg/ProductAUT/boultAudioZ40Pro.png';
import Dell15 from '../../assets/Img/HomeImg/ProductAUT/Dell15.png';
import FireBolttNinja from '../../assets/Img/HomeImg/ProductAUT/FireBolttNinja.png';
import HoneywellSuonoP2100 from '../../assets/Img/HomeImg/ProductAUT/HoneywellSuonoP2100.png';
import HONORMagicBookX16 from '../../assets/Img/HomeImg/ProductAUT/HONORMagicBookX16.png';
import HP14s from '../../assets/Img/HomeImg/ProductAUT/HP14s.png';
import HP15s from '../../assets/Img/HomeImg/ProductAUT/HP15s.png';
import IQOOZ7Pro from '../../assets/Img/HomeImg/ProductAUT/IQOOZ7Pro.png';
import IQOOz9 from '../../assets/Img/HomeImg/ProductAUT/IQOOZ9.png';
import jblTuneBeam from '../../assets/Img/HomeImg/ProductAUT/jblTuneBeam.png';
import LenovoIdeaPad1 from '../../assets/Img/HomeImg/ProductAUT/LenovoIdeaPad1.png';
import MIPowerBank3i20000mAH from '../../assets/Img/HomeImg/ProductAUT/MIPowerBank3i20000mAH.png';
import onePlus12R from '../../assets/Img/HomeImg/ProductAUT/onePlus12R.png';
import onePlusNordBuds2 from '../../assets/Img/HomeImg/ProductAUT/onePlusNordBuds2.png';
import onePlusNordCE3Lite from '../../assets/Img/HomeImg/ProductAUT/onePlusNordCE3Lite.png';
import realmeBudsT300 from '../../assets/Img/HomeImg/ProductAUT/realmeBudsT300.png';
import Samsung25W from '../../assets/Img/HomeImg/ProductAUT/Samsung25W.png';
import samsungBuds2Pro from '../../assets/Img/HomeImg/ProductAUT/samsungBuds2Pro.png';

// import images for slider
import boatSpeakerRGBAD from '../../assets/Img/ShopImg/NewAllProduct/boatspeakerrgb.gif';
import boultZ40AD from '../../assets/Img/ShopImg/NewAllProduct/boultz40.gif';
import boatLunarSmartWatch from '../../assets/Img/ShopImg/NewAllProduct/boatLunarSmartWatch.gif';
import samsungFit3 from '../../assets/Img/ShopImg/NewAllProduct/samsungFit3.jpg';
import onePlusPadGo from '../../assets/Img/ShopImg/NewAllProduct/onePlusPadGo.jpg';
import samsungTabS9FE from '../../assets/Img/ShopImg/NewAllProduct/samsungTabS9FE.jpg';
import zebKeyBd from '../../assets/Img/ShopImg/NewAllProduct/zebKeyBd.jpg';
import SearchBar from '../../components/common/SearchBar/SearchBar';

const AllProduct = () => {

    // object for card
    const headingName = 'All Product';
    const data = [
        {
            img: HP14s,
            name: 'HP 14s',
            price: '₹32,990',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: onePlusNordCE3Lite,
            name: 'OnePlus Nord CE 3 Lite',
            price: '₹17,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AcerNitroVGaming,
            name: 'Acer Nitro V Gaming Laptop',
            price: '₹77,990',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AsusVivoBook15,
            name: 'ASUS Vivobook 15',
            price: '₹38,990',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iPhone15ProMax,
            name: 'iPhone 15 Pro Max',
            price: '₹1,49,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: Samsung25W,
            name: 'Samsung Original 25W',
            price: '₹1,299',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: realmeBudsT300,
            name: 'realme Buds T300',
            price: '₹2,299',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: IQOOz9,
            name: 'iQOO Z9 5G ',
            price: '₹19,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: Dell15,
            name: 'Dell 15 Laptop',
            price: '₹46,990',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iPhone15,
            name: 'iPhone 15',
            price: '₹69,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: onePlus12R,
            name: 'OnePlus 12R',
            price: '₹39,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: IQOOZ7Pro,
            name: 'iQOO Z7 Pro 5G',
            price: '₹23,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: boultAudioZ40Pro,
            name: 'Boult Audio Z40 Pro',
            price: '₹1,599',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: LenovoIdeaPad1,
            name: 'Lenovo IdeaPad 1',
            price: '₹40,490',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: MIPowerBank3i20000mAH,
            name: 'MI Power Bank 3i 20000mAh',
            price: '₹2,140',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: jblTuneBeam,
            name: 'JBL Tune Beam',
            price: '₹5,499',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AmbraneUnbreakable,
            name: 'Ambrane Unbreakable 60W Fast Charging',
            price: '₹199',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: onePlusNordBuds2,
            name: 'OnePlus Nord Buds 2',
            price: '₹2,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FireBolttNinja,
            name: 'Fire-Boltt Ninja Call Pro Plus ',
            price: '₹1,199',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: HoneywellSuonoP2100,
            name: 'Honeywell Suono P2100',
            price: '₹1,649',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: ApppleCharger,
            name: '20W Charger for iPhone',
            price: '₹699',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iPadAir5Gen,
            name: 'iPad Air 5 Generation',
            price: '₹57,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iPhone15Pro,
            name: 'iPhone 15 Pro',
            price: '₹1,27,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: boatAirPodes141,
            name: 'boAt Airdopes 141 Bluetooth TWS',
            price: '₹999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: HONORMagicBookX16,
            name: 'HONOR MagicBook X16 (2024)',
            price: '₹44,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: airPodsPro2Gen,
            name: 'AirPods Pro 2 Generation',
            price: '₹24,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: Macbook2022M2,
            name: 'Macbook Air 2022 M2 Chip',
            price: '₹99,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungBuds2Pro,
            name: 'Samsung Galaxy Buds2 Pro',
            price: '₹16,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungBuds2Pro,
            name: 'Samsung Galaxy Buds2 Pro',
            price: '₹16,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: HP15s,
            name: 'HP Laptop 15s',
            price: '₹36,947',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iphone14,
            name: 'Apple iPhone 14',
            price: '₹59,999',
            productNameId: 'samsungS24Ultra',
        },
    ];

    // objects for slider
    const slider1 = [
        onePlusPadGo, boatSpeakerRGBAD, boatLunarSmartWatch, boultZ40AD, samsungTabS9FE, zebKeyBd, samsungFit3
    ]

    return (
        <>
            <div className={`${styles['container']}`}>
                <SearchBar />
                <Card images={data} heading={headingName} />
                {/* <div className={`${styles['headingContainer']}`}>
                        <h1 className={styles.heading}>All Products</h1>
                    </div> */}
                <ShopSlider sliderData={slider1} />
            </div>
        </>
    )
}

export default AllProduct;