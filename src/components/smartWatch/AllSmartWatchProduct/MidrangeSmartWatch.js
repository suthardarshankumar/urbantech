import React from 'react'
import Card from '../../common/Card/Card';
import boAtWaveSpectra from '../../../assets/Img/SmartWatch/Midrange/boAtWaveSpectra.png';
import boAtLunarEmbrace from '../../../assets/Img/SmartWatch/Midrange/boAtLunarEmbrace.png';
import TitanCrestPremium from '../../../assets/Img/SmartWatch/Midrange/TitanCrestPremium.png';
import FireBolttRoyaleLuxury from '../../../assets/Img/SmartWatch/Midrange/FireBolttRoyaleLuxury.png';
import TitanSmart3Premium from '../../../assets/Img/SmartWatch/Midrange/TitanSmart3Premium.png';
import FireBolttNewlyLaunched from '../../../assets/Img/SmartWatch/Midrange/FireBolttNewlyLaunched.png';
import NoiseScoutKids from '../../../assets/Img/SmartWatch/Midrange/NoiseScoutKids.png';
import CrossBeatsNexus2 from '../../../assets/Img/SmartWatch/Midrange/CrossBeatsNexus2.png';
import NoiseNewlyLaunchedColorFitPro5Max from '../../../assets/Img/SmartWatch/Midrange/NoiseNewlyLaunchedColorFitPro5Max.png';
import boAtUltimaSelect from '../../../assets/Img/SmartWatch/Midrange/boAtUltimaSelect.png';

const MidrangeSmartWatch = () => {

    const midrangeSmartWatchHeading = 'Midrange SmartWatch';
    const midrangeSmartWatchDataSet = [
        {
            img: boAtWaveSpectra,
            name: 'boAt Wave Spectra with 2.04” AMOLED Display, BT Calling, Functional Crown, Metal Built, Always-on Display, Animated Watch Faces, Smart Watch for Men & Women(Steel Black)',
            price: '₹3,099',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: boAtLunarEmbrace,
            name: 'boAt Lunar Embrace with 1.51” AMOLED Display, BT Calling, Functional Crown, Metal-Built, 100+ Sports Mode, Animated Watch Faces, Built-in Games, Smart Watch for Men & Women(Steel Black)',
            price: '₹3,499',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: TitanCrestPremium,
            name: 'Titan Crest Premium Smart Watch|1.43" AMOLED Display with AOD|466x466 Pixel Resolution|Functional Crown|SingleSync BT Calling|Advanced Chipset|100+ Sports Modes & WatchfacesIP68 Smartwatch',
            price: '₹5,994',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FireBolttRoyaleLuxury,
            name: 'Fire-Boltt Royale Luxury Stainless Steel Smart Watch 1.43” AMOLED Display, Always On Display, 750 NITS Peak Brightness 466 * 466 px Resolution. Bluetooth Calling, IP67, 75Hz Refresh Rate (Blue)',
            price: '₹3,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: TitanSmart3Premium,
            name: 'Titan Smart 3 Premium Smart Watch|1.96" Super AMOLED Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery (Copper)',
            price: '₹4,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FireBolttNewlyLaunched,
            name: 'Fire-Boltt Newly Launched Infinity Luxe Vivid 1.6” HD Round Display, Stainless Steel Luxury Smartwatch 4GB Inbuilt Storage, Bluetooth Calling, TWS Connectivity, 100+ Watch Faces (Black)',
            price: '₹3,399',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: NoiseScoutKids,
            name: 'Noise Scout Kids smartwatch with Assisted GPS Tracking, 4G Video & Voice Calling, Parental Control, Long Battery, Habit Formation, in-Built Games, Buddy app for Parents (Ninja Green)',
            price: '₹4,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: CrossBeatsNexus2,
            name: 'CrossBeats Nexus 2.01” Super AMOLED Display Smart Watch with ChatGPT-Powered| Dynamic Island| 5.3 Bluetooth Calling Smartwatch| Always on| in-app GPS| 60 Hz Refresh Rate | AI Health Tracker -(Black)',
            price: '₹3,999',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: NoiseNewlyLaunchedColorFitPro5Max,
            name: 'Noise Newly Launched ColorFit Pro 5 Max 1.96" AMOLED Display Smart Watch, BT Calling, Post Training Workout Analysis, VO2 Max, Rapid Health, 5X Faster Data Transfer - Jet Black',
            price: '₹4,499',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: boAtUltimaSelect,
            name: 'boAt Ultima Select Smart Watch with 2.01" AMOLED Display, Advanced BT Calling, Functional Crown, Magnetic Strap, 100+ Sports Mode, IP68, HR & Blood Oxygen Monitoring(Cool Grey)',
            price: '₹3,033',
            productNameId: 'samsungS24Ultra',
        },
    ]

    return (
        <>
            <Card images={midrangeSmartWatchDataSet} heading={midrangeSmartWatchHeading} />
        </>
    )
}

export default MidrangeSmartWatch;