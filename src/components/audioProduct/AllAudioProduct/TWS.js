import React from 'react';
import Card from '../../common/Card/Card';

// import  from '../../../assets/Img/Headphones/TWS';
import onePlusBuds3 from '../../../assets/Img/Headphones/TWS/onePlusBuds3.png';
import onePlusNordBuds2 from '../../../assets/Img/Headphones/TWS/OnePlusNordBuds2.png';
import JBLtws from '../../../assets/Img/Headphones/TWS/JBL.png';
import realmeBudsT300 from '../../../assets/Img/Headphones/TWS/realmeBudsT300TWS.png';
import boatAirdopes141 from '../../../assets/Img/Headphones/TWS/boAtAirdopes141.png';
import boAtAirdopes200Plus from '../../../assets/Img/Headphones/TWS/boAtAirdopes200Plus.png';
import RedmiBuds5 from '../../../assets/Img/Headphones/TWS/RedmiBuds5.png';
import boAtNirvanaIon from '../../../assets/Img/Headphones/TWS/boAtNirvanaIon.png';
import ZEBRONICSZeb from '../../../assets/Img/Headphones/TWS/ZEBRONICSZeb-SoundBomb1.png';
import OnePlusBudsPro2 from '../../../assets/Img/Headphones/TWS/OnePlusBudsPro2.png';
import JBLTune235NC from '../../../assets/Img/Headphones/TWS/JBLTune235NC.png';
import SAMSUNGGalaxyBuds2 from '../../../assets/Img/Headphones/TWS/SAMSUNGGalaxyBuds2.png';
import SamsungGalaxyWirelessBudsFE from '../../../assets/Img/Headphones/TWS/SamsungGalaxyWirelessBudsFE.png';




const TWS = () => {

    const twsTitle = 'TWS Bluetooth Earbuds';
    const twsDataSet = [
        {
            img: onePlusBuds3,
            name: "OnePlus Buds 3 in Ear TWS Bluetooth Earbuds",
            price: "₹5,499",
            productNameId: 'oneplus-buds-3-in-ear-tws-bluetooth-earbuds',
        },
        {
            img: JBLtws,
            name: "JBL Newly Launched Wave Flex in-Ear Wireless Earbuds TWS",
            price: " ₹2,999",
            productNameId: 'jbl-newly-launched-wave-flex-in-ear-wireless-earbuds-tws',
        },
        {
            img: realmeBudsT300,
            name: "realme Buds T300 TWS Earbuds with 40H Play time",
            price: "₹2,299",
            productNameId: 'realme-Buds-T300-TWS-Earbuds-with-40H-Play-time',
        },
        {
            img: boatAirdopes141,
            name: "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime",
            price: "₹1,299",
            productNameId: 'boAt-Airdopes-141-Bluetooth-TWS-Earbuds-with-42H-Playtime',
        },
        {
            img: boAtAirdopes200Plus,
            name: "boAt Airdopes 200 Plus in Ear TWS Earbuds, 100 Hours Playback, Quad Mics ENx Technology",
            price: "₹1,599",
            productNameId: 'boAt-Airdopes-141-Bluetooth-TWS-Earbuds-with-42H-Playtime',
        },
        {
            img: onePlusNordBuds2,
            name: "OnePlus Nord Buds 2 TWS in Ear Earbuds",
            price: "₹2,999",
            productNameId: 'oneplus-buds-3-in-ear-tws-bluetooth-earbuds',
        },
        {
            img: RedmiBuds5,
            name: "Redmi Buds 5 Truly Wireless Bluetooth Ear Buds (TWS) with Upto 46dB Hybrid Noise Cancellation",
            price: "₹2,999",
            productNameId: 'realme-Buds-T300-TWS-Earbuds-with-40H-Play-time',
        },
        {
            img: boAtNirvanaIon,
            name: "boAt Nirvana Ion TWS Earbuds with 120 HRS Playback",
            price: "₹1,699",
            productNameId: 'boAt-Airdopes-141-Bluetooth-TWS-Earbuds-with-42H-Playtime',
        },
        {
            img: ZEBRONICSZeb,
            name: "ZEBRONICS Zeb-Sound Bomb 1 TWS Earbuds with BT5.0",
            price: "₹749",
            productNameId: 'realme-Buds-T300-TWS-Earbuds-with-40H-Play-time',
        },
        {
            img: OnePlusBudsPro2,
            name: "OnePlus Buds Pro 2 Bluetooth TWS in Ear Earbuds",
            price: "₹8,490",
            productNameId: 'oneplus-buds-3-in-ear-tws-bluetooth-earbuds',
        },
        {
            img: JBLTune235NC,
            name: "JBL Tune 235NC in Ear Wireless ANC Earbuds",
            price: "₹3,999",
            productNameId: 'jbl-newly-launched-wave-flex-in-ear-wireless-earbuds-tws',
        },
        {
            img: SAMSUNGGalaxyBuds2,
            name: "SAMSUNG Galaxy Buds2",
            price: "₹7,599",
            productNameId: 'realme-Buds-T300-TWS-Earbuds-with-40H-Play-time',
        },
        {
            img: SamsungGalaxyWirelessBudsFE,
            name: "Samsung Galaxy Wireless Buds FE",
            price: "₹6,599",
            productNameId: 'realme-Buds-T300-TWS-Earbuds-with-40H-Play-time',
        },
    ];

    return (
        <>
            <Card images={twsDataSet} heading={twsTitle} />
        </>
    )
}

export default TWS;