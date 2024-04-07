import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/common/Card/Card';

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

const SearchResultPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    const products = [
        {
            img: HP14s,
            name: 'HP 14s',
            price: '₹32,990',
        },
        {
            img: onePlusNordCE3Lite,
            name: 'OnePlus Nord CE 3 Lite',
            price: '₹17,999',
        },
        {
            img: AcerNitroVGaming,
            name: 'Acer Nitro V Gaming Laptop',
            price: '₹77,990',
        },
        {
            img: AsusVivoBook15,
            name: 'ASUS Vivobook 15',
            price: '₹38,990',
        },
        {
            img: iPhone15ProMax,
            name: 'iPhone 15 Pro Max',
            price: '₹1,49,999',
        },
        {
            img: Samsung25W,
            name: 'Samsung Original 25W',
            price: '₹1,299',
        },
        {
            img: realmeBudsT300,
            name: 'realme Buds T300',
            price: '₹2,299',
        },
        {
            img: IQOOz9,
            name: 'iQOO Z9 5G ',
            price: '₹19,999',
        },
        {
            img: Dell15,
            name: 'Dell 15 Laptop',
            price: '₹46,990',
        },
        {
            img: iPhone15,
            name: 'iPhone 15',
            price: '₹69,999',
        },
        {
            img: onePlus12R,
            name: 'OnePlus 12R',
            price: '₹39,999',
        },
        {
            img: IQOOZ7Pro,
            name: 'iQOO Z7 Pro 5G',
            price: '₹23,999',
        },
        {
            img: boultAudioZ40Pro,
            name: 'Boult Audio Z40 Pro',
            price: '₹1,599',
        },
        {
            img: LenovoIdeaPad1,
            name: 'Lenovo IdeaPad 1',
            price: '₹40,490',
        },
        {
            img: MIPowerBank3i20000mAH,
            name: 'MI Power Bank 3i 20000mAh',
            price: '₹2,140',
        },
        {
            img: jblTuneBeam,
            name: 'JBL Tune Beam',
            price: '₹5,499',
        },
        {
            img: AmbraneUnbreakable,
            name: 'Ambrane Unbreakable 60W Fast Charging',
            price: '₹199',
        },
        {
            img: onePlusNordBuds2,
            name: 'OnePlus Nord Buds 2',
            price: '₹2,999',
        },
        {
            img: FireBolttNinja,
            name: 'Fire-Boltt Ninja Call Pro Plus ',
            price: '₹1,199',
        },
        {
            img: HoneywellSuonoP2100,
            name: 'Honeywell Suono P2100',
            price: '₹1,649',
        },
        {
            img: ApppleCharger,
            name: '20W Charger for iPhone',
            price: '₹699',
        },
        {
            img: iPadAir5Gen,
            name: 'iPad Air 5 Generation',
            price: '₹57,999',
        },
        {
            img: iPhone15Pro,
            name: 'iPhone 15 Pro',
            price: '₹1,27,999',
        },
        {
            img: boatAirPodes141,
            name: 'boAt Airdopes 141 Bluetooth TWS',
            price: '₹999',
        },
        {
            img: HONORMagicBookX16,
            name: 'HONOR MagicBook X16 (2024)',
            price: '₹44,999',
        },
        {
            img: airPodsPro2Gen,
            name: 'AirPods Pro 2 Generation',
            price: '₹24,999',
        },
        {
            img: Macbook2022M2,
            name: 'Macbook Air 2022 M2 Chip',
            price: '₹99,999',
        },
        {
            img: samsungBuds2Pro,
            name: 'Samsung Galaxy Buds2 Pro',
            price: '₹16,999',
        },
        {
            img: samsungBuds2Pro,
            name: 'Samsung Galaxy Buds2 Pro',
            price: '₹16,999',
        },
        {
            img: HP15s,
            name: 'HP Laptop 15s',
            price: '₹36,947',
        },
        {
            img: iphone14,
            name: 'Apple iPhone 14',
            price: '₹59,999',
        },
    ];
    const searchHeading = `Search Results for ${query}`;

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <Card images={filteredProducts} heading={searchHeading} />
        </div>
    );
}

export default SearchResultPage;
