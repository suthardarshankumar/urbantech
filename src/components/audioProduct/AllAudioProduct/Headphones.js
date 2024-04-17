import React from 'react';
import Card from '../../common/Card/Card';

import boAtRockerz550 from '../../../assets/Img/Headphones/HeadphonesImg/boAtRockerz550.png';
import boAtRockerz450R from '../../../assets/Img/Headphones/HeadphonesImg/boAtRockerz450R.png';
import ZEBRONICSThunder from '../../../assets/Img/Headphones/HeadphonesImg/ZEBRONICSThunder.png';
import NoiseTwo from '../../../assets/Img/Headphones/HeadphonesImg/NoiseTwo.png';
import NoiseNewlyLaunched from '../../../assets/Img/Headphones/HeadphonesImg/NoiseNewlyLaunched.png';
import JBLTune510BT from '../../../assets/Img/Headphones/HeadphonesImg/JBLTune510BT.png';
import SonyWHCH720N from '../../../assets/Img/Headphones/HeadphonesImg/SonyWHCH720N.png';
import JBLTune770NC from '../../../assets/Img/Headphones/HeadphonesImg/JBLTune770NC.png';
import ZebronicsZebBangPro from '../../../assets/Img/Headphones/HeadphonesImg/ZebronicsZebBangPro.png';
import MarshallMajorIV from '../../../assets/Img/Headphones/HeadphonesImg/MarshallMajorIV.png';


const Headphones = () => {

    const headphonesTitle = "Headphones";
    const headphonesDataSet = [
        {
            img: boAtRockerz550,
            name: "boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones",
            price: "₹1,999",
            productNameId: 'boAt-Rockerz-550-Bluetooth-Wireless-Over-Ear-Headphones',
        },
        {
            img: ZEBRONICSThunder,
            name: "ZEBRONICS Thunder Bluetooth 5.3 Wireless Over Ear Headphones with 60H Backup",
            price: "₹799",
            productNameId: 'zebronics-thunder',
        },
        {
            img: NoiseTwo,
            name: "Noise Two Wireless On-Ear Headphones with 50 Hours Playtime",
            price: "₹1,699",
            productNameId: 'boAt-Rockerz-550-Bluetooth-Wireless-Over-Ear-Headphones',
        },
        {
            img: JBLTune510BT,
            name: "JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours Playtime",
            price: "₹3,499",
            productNameId: 'JBL-Tune-510BT',
        },
        {
            img: boAtRockerz450R,
            name: "boAt Rockerz 450R On-Ear Headphones with 15 Hours Battery",
            price: "₹1,499",
            productNameId: 'boAt-Rockerz-550-Bluetooth-Wireless-Over-Ear-Headphones',
        },
        {
            img: NoiseNewlyLaunched,
            name: "Noise Newly Launched Three Wireless On-Ear Headphones with 70H Playtime",
            price: "₹1,999",
            productNameId: 'zebronics-thunder',
        },
        {
            img: SonyWHCH720N,
            name: "Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic",
            price: "₹9,999",
            productNameId: 'JBL-Tune-510BT',
        },
        {
            img: JBLTune770NC,
            name: "JBL Tune 770NC Wireless Over Ear ANC Headphones with Mic",
            price: "₹6,499",
            productNameId: 'JBL-Tune-510BT',
        },
        {
            img: ZebronicsZebBangPro,
            name: "Zebronics Zeb-Bang Pro Bluetooth Wireless On Ear Headphones with Mic V5.0",
            price: "₹799",
            productNameId: 'zebronics-thunder',
        },
        {
            img: MarshallMajorIV,
            name: "Marshall Major IV Wireless Bluetooth On Ear Headphone with Mic",
            price: "₹10,999",
            productNameId: 'JBL-Tune-510BT',
        },
    ];

    return (
        <>
            <Card images={headphonesDataSet} heading={headphonesTitle} />
        </>
    )
}

export default Headphones;