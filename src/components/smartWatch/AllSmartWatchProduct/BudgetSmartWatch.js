import React from 'react'
import Card from '../../common/Card/Card';
import NoisePulse2Max from '../../../assets/Img/SmartWatch/Budget/NoisePulse2Max.png';
import FastrackLimitlessGlide from '../../../assets/Img/SmartWatch/Budget/FastrackLimitlessGlide.png';
import NoiseTwistRound from '../../../assets/Img/SmartWatch/Budget/NoiseTwistRound.png';
import FireBolttTalk2ProUltra from '../../../assets/Img/SmartWatch/Budget/FireBolttTalk2ProUltra.png';
import NoiseHaloPlus from '../../../assets/Img/SmartWatch/Budget/NoiseHaloPlus.png';
import FireBolttInvinciblePlus from '../../../assets/Img/SmartWatch/Budget/FireBolttInvinciblePlus.png';
import NoiseDivaSmartWatch from '../../../assets/Img/SmartWatch/Budget/NoiseDivaSmartWatch.png';
import NoiseColorFitUltra3 from '../../../assets/Img/SmartWatch/Budget/NoiseColorFitUltra3.png';
import NoiseFitHalo from '../../../assets/Img/SmartWatch/Budget/NoiseFitHalo.png';

const BudgetSmartWatch = () => {

    const smartWatchTitle = "Budget SmartWatch";
    const smartWatchDataSet = [
        {
            img: NoisePulse2Max,
            name: 'Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black)',
            price: "₹1,099",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FastrackLimitlessGlide,
            name: "Fastrack Limitless Glide Advanced UltraVU HD Display|BT Calling|ATS Chipset|100+ Sports Modes & Watchfaces|Calculator|Voice Assistant|in-Built Games|24 * 7 HRM|IP68 Smartwatch",
            price: '₹1,399',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: NoiseTwistRound,
            name: 'Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.38" TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Jet Black)',
            price: "₹1,199",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FireBolttTalk2ProUltra,
            name: 'Fire-Boltt Talk 2 Pro Ultra 1.39" Round Display Stainless Steel Luxury Smart Watch, Bluetooth Calling & 360 Health Monitoring, 123 Sports Modes, Inbuilt Voice Assistant (Black)',
            price: ' ₹1,699',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: NoiseHaloPlus,
            name: 'Noise Halo Plus 1.46" Super AMOLED Display Elite Smart Watch, Bluetooth Calling, Stainless Steel Build, Always on Display, Upto 7 Days Battery (Elite Black)',
            price: '₹2,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FireBolttInvinciblePlus,
            name: 'Fire-Boltt Invincible Plus 1.43" AMOLED Display Smartwatch with Bluetooth Calling, TWS Connection, 300+ Sports Modes, 110 in-Built Watch Faces, 4GB Storage & AI Voice Assistant (Black SS)',
            price: '₹2,799',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: NoiseDivaSmartWatch,
            name: 'Noise Diva Smartwatch with Diamond Cut dial, Glossy Metallic Finish, AMOLED Display, Mesh Metal and Leather Strap Options, 100+ Watch Faces, Female Cycle Tracker Smart Watch for Women (Gold Link)',
            price: '₹2,899',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: NoiseColorFitUltra3,
            name: 'Noise ColorFit Ultra 3 Bluetooth Calling Smart Watch with Biggest 1.96" AMOLED Display, Premium Metallic Build, Functional Crown, Gesture Control with Silicon Strap (Jet Black)',
            price: '₹2,499',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: NoiseFitHalo,
            name: 'NoiseFit Halo 1.43" AMOLED Display, Bluetooth Calling Round Dial Smart Watch, Premium Metallic Build, Always on Display, Smart Gesture Control, 100 Sports Modes (Vintage Brown)',
            price: '₹2,799',
            productNameId: 'samsungS24Ultra',
        },
    ]
    return (
        <>
            <Card images={smartWatchDataSet} heading={smartWatchTitle} />
        </>
    )
}

export default BudgetSmartWatch;