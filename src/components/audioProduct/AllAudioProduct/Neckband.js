import React from 'react'
import Card from '../../common/Card/Card';

import boAtRockerz255ProPlus from '../../../assets/Img/Headphones/Neckband/boAtRockerz255ProPlus.png';
import pTronNewlyLaunchedTangentEon from '../../../assets/Img/Headphones/Neckband/pTronNewlyLaunchedTangentEon.png';
import boAtRockerz245V2Pro from '../../../assets/Img/Headphones/Neckband/boAtRockerz245V2Pro.png';
import boAtRockerz330Pro from '../../../assets/Img/Headphones/Neckband/boAtRockerz330Pro.png';
import RealmeBudsWireless3 from '../../../assets/Img/Headphones/Neckband/RealmeBudsWireless3.png';
import OneplusBulletsZ2 from '../../../assets/Img/Headphones/Neckband/OneplusBulletsZ2.png';
import LavaProbudsN31 from '../../../assets/Img/Headphones/Neckband/LavaProbudsN31.png';


const Neckband = () => {

    const neckbandHeading = "Neckband";
    const neckbandDataSet = [
        {
            img: boAtRockerz255ProPlus,
            name: "boAt Rockerz 255 Pro+ Bluetooth in Ear Neckband with Upto 60 Hours Playback",
            price: "₹1,284",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: pTronNewlyLaunchedTangentEon,
            name: "pTron Newly Launched Tangent Eon BT v5.3 Wireless In-Ear Neckband, 45H Playtime",
            price: "₹699",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: boAtRockerz245V2Pro,
            name: "boAt Rockerz 245 V2 Pro Wireless in Ear Neckband with Up to 30 Hrs Playtime",
            price: "₹999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: boAtRockerz330Pro,
            name: "boAt Rockerz 330 Pro in-Ear Bluetooth Neckband with 60HRS Playtime",
            price: "₹1,799",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: RealmeBudsWireless3,
            name: "Realme Buds Wireless 3 in-Ear Bluetooth Headphones",
            price: "₹1,799",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: OneplusBulletsZ2,
            name: "Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic",
            price: "₹1,799",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: LavaProbudsN31,
            name: "Lava Probuds N31 Bt in-Ear Neckband",
            price: "₹999",
            productNameId: 'samsungS24Ultra',
        },
    ];

    return (
        <>
            <Card images={neckbandDataSet} heading={neckbandHeading} />
        </>
    )
}

export default Neckband;