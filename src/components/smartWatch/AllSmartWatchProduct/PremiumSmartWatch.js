import React from 'react'
import Card from '../../common/Card/Card';
import AmazfitGTS4 from '../../../assets/Img/SmartWatch/Premium/AmazfitGTS4.jpg';
import SamsungGalaxyWatch5ProLTE from '../../../assets/Img/SmartWatch/Premium/SamsungGalaxyWatch5ProLTE.png';
import AppleWatchUltra from '../../../assets/Img/SmartWatch/Premium/AppleWatchUltra.png';
import SamsungGalaxyWatch6LTE from '../../../assets/Img/SmartWatch/Premium/SamsungGalaxyWatch6LTE.png';
import AppleWatchUltra2 from '../../../assets/Img/SmartWatch/Premium/AppleWatchUltra2.png';
import SamsungGalaxyWatch4 from '../../../assets/Img/SmartWatch/Premium/SamsungGalaxyWatch4.png';
import AppleWatchSE2ThGen from '../../../assets/Img/SmartWatch/Premium/AppleWatchSE2ThGen.png';
import IMOOZ1Kids from '../../../assets/Img/SmartWatch/Premium/IMOOZ1Kids.png';
import FossilGen6 from '../../../assets/Img/SmartWatch/Premium/FossilGen6.png';
import OnePlusWatch2 from '../../../assets/Img/SmartWatch/Premium/OnePlusWatch2.png';
import AmazfitActiveSW from '../../../assets/Img/SmartWatch/Premium/AmazfitActiveSW.png';
import AppleWatchSeries9 from '../../../assets/Img/SmartWatch/Premium/AppleWatchSeries9.png';

const PremiumSmartWatch = () => {
    const premiumHeading = 'Premium SmartWatch';
    const premiumDataSet = [
        {
            img: AmazfitGTS4,
            name: 'Amazfit GTS 4 Smart Watch with 1.75 AMOLED Display, Bluetooth Calling, Alexa Built-in, SpO2, Accurate GPS Tracking Fitness Sports Watch with 150 Sports Modes, 8-Day Battery Life (Infinite Black)',
            price: '₹15,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: SamsungGalaxyWatch5ProLTE,
            name: 'Samsung Galaxy Watch5 Pro LTE (45 mm, Black Titanium, Compatible with Android only',
            price: '₹30,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AppleWatchUltra,
            name: 'Apple Watch Ultra [GPS + Cellular 49 mm] smart watch w/Rugged Titanium Case & Black/Grey Trail Loop - M/L Fitness Tracker, Precision GPS, Action Button, Extra-Long BatteryLife, Brighter Retina Display',
            price: '₹72,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: SamsungGalaxyWatch6LTE,
            name: 'Samsung Galaxy Watch6 LTE (44mm, Graphite, Compatible with Android only) | Introducing BP & ECG Features',
            price: '',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AppleWatchUltra2,
            name: 'Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch with Rugged Titanium Case & Blue Ocean Band One Size. Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Bright Retina Display',
            price: '₹84,500',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: SamsungGalaxyWatch4,
            name: 'Samsung Galaxy Watch4 Classic LTE (4.6cm, Black)',
            price: '₹10,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AppleWatchSE2ThGen,
            name: 'Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
            price: '₹22,900',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: IMOOZ1Kids,
            name: 'IMOO Watch Phone Z1 Kids Smart Watch, 4G Kids Smartwatch Phone with Long-Lasting Video & Phone Call, Kids GPS Watch with Real-time Locating & IPX8 Water-Resistance (Dark Green)',
            price: '₹7,990',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FossilGen6,
            name: "Fossil Gen 6 Digital Black Dial Men's Watch-FTW4059",
            price: '₹12,498',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: OnePlusWatch2,
            name: 'OnePlus Watch 2 with Wear OS4,Snapdragon W5 Chipset,Upto 100 hrs Battery Life,1.43’’ AMOLED Display,Stainless Steel & Sapphire Crystal Build,Dual Frequency GPS,IP68 & Bluetooth Calling (Black Steel)',
            price: '₹24,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AmazfitActiveSW,
            name: 'Amazfit Active Smart Watch with AI Fitness Exercise Coach, GPS, Bluetooth Calling & Music, 14 Day Battery, 1.75" AMOLED Display & Alexa-Enabled, Fitness Watch for Android & iPhone (Midnight Black)',
            price: '₹11,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AppleWatchSeries9,
            name: 'Apple Watch Series 9 [GPS 45mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant',
            price: '₹44,900',
            productNameId: 'samsungS24Ultra',
        },
    ]

    return (
        <>
            <Card images={premiumDataSet} heading={premiumHeading} />
        </>
    )
}

export default PremiumSmartWatch;