import React, { useState } from 'react';
import styles from './SearchResult.module.css'
import { useLocation } from 'react-router-dom';
import Card from '../../components/common/Card/Card';

import boAtRockerz550 from '../../assets/Img/Headphones/HeadphonesImg/boAtRockerz550.png';
import boAtRockerz450R from '../../assets/Img/Headphones/HeadphonesImg/boAtRockerz450R.png';
import ZEBRONICSThunder from '../../assets/Img/Headphones/HeadphonesImg/ZEBRONICSThunder.png';
import NoiseTwo from '../../assets/Img/Headphones/HeadphonesImg/NoiseTwo.png';
import NoiseNewlyLaunched from '../../assets/Img/Headphones/HeadphonesImg/NoiseNewlyLaunched.png';
import JBLTune510BT from '../../assets/Img/Headphones/HeadphonesImg/JBLTune510BT.png';
import SonyWHCH720N from '../../assets/Img/Headphones/HeadphonesImg/SonyWHCH720N.png';
import JBLTune770NC from '../../assets/Img/Headphones/HeadphonesImg/JBLTune770NC.png';
import ZebronicsZebBangPro from '../../assets/Img/Headphones/HeadphonesImg/ZebronicsZebBangPro.png';
import MarshallMajorIV from '../../assets/Img/Headphones/HeadphonesImg/MarshallMajorIV.png';
import boAtRockerz255ProPlus from '../../assets/Img/Headphones/Neckband/boAtRockerz255ProPlus.png';
import pTronNewlyLaunchedTangentEon from '../../assets/Img/Headphones/Neckband/pTronNewlyLaunchedTangentEon.png';
import boAtRockerz245V2Pro from '../../assets/Img/Headphones/Neckband/boAtRockerz245V2Pro.png';
import boAtRockerz330Pro from '../../assets/Img/Headphones/Neckband/boAtRockerz330Pro.png';
import RealmeBudsWireless3 from '../../assets/Img/Headphones/Neckband/RealmeBudsWireless3.png';
import OneplusBulletsZ2 from '../../assets/Img/Headphones/Neckband/OneplusBulletsZ2.png';
import LavaProbudsN31 from '../../assets/Img/Headphones/Neckband/LavaProbudsN31.png';
import onePlusBuds3 from '../../assets/Img/Headphones/TWS/onePlusBuds3.png';
import onePlusNordBuds2 from '../../assets/Img/Headphones/TWS/OnePlusNordBuds2.png';
import JBLtws from '../../assets/Img/Headphones/TWS/JBL.png';
import realmeBudsT300 from '../../assets/Img/Headphones/TWS/realmeBudsT300TWS.png';
import boatAirdopes141 from '../../assets/Img/Headphones/TWS/boAtAirdopes141.png';
import boAtAirdopes200Plus from '../../assets/Img/Headphones/TWS/boAtAirdopes200Plus.png';
import RedmiBuds5 from '../../assets/Img/Headphones/TWS/RedmiBuds5.png';
import boAtNirvanaIon from '../../assets/Img/Headphones/TWS/boAtNirvanaIon.png';
import ZEBRONICSZeb from '../../assets/Img/Headphones/TWS/ZEBRONICSZeb-SoundBomb1.png';
import OnePlusBudsPro2 from '../../assets/Img/Headphones/TWS/OnePlusBudsPro2.png';
import JBLTune235NC from '../../assets/Img/Headphones/TWS/JBLTune235NC.png';
import SAMSUNGGalaxyBuds2 from '../../assets/Img/Headphones/TWS/SAMSUNGGalaxyBuds2.png';
import SamsungGalaxyWirelessBudsFE from '../../assets/Img/Headphones/TWS/SamsungGalaxyWirelessBudsFE.png';
import JDFRESHPortableLaptopStandforDesk from '../../assets/Img/Accessories/ComputerAccessories/JDFRESHPortableLaptopStandforDesk.png';
import HPX1000WiredUSBMouse from '../../assets/Img/Accessories/ComputerAccessories/HPX1000WiredUSBMouse.png';
import PortableLaptopStand from '../../assets/Img/Accessories/ComputerAccessories/PortableLaptopStand.png';
import PortronicsKPortableLaptopStand from '../../assets/Img/Accessories/ComputerAccessories/PortronicsKPortableLaptopStand.png';
import FURJADENAntiTheftNumberLockBackpackBag from '../../assets/Img/Accessories/ComputerAccessories/FURJADENAntiTheftNumberLockBackpackBag.png';
import Exxelo5in1KeyboardCleaningBrushKit from '../../assets/Img/Accessories/ComputerAccessories/Exxelo5in1KeyboardCleaningBrushKit.png';
import SamsungT7Shield2TB from '../../assets/Img/Accessories/ComputerAccessories/SamsungT7Shield2TB.png';
import AdarazM2NVME from '../../assets/Img/Accessories/ComputerAccessories/AdarazM2NVME.png';
import SandiskExtremePortable1TB from '../../assets/Img/Accessories/ComputerAccessories/SandiskExtremePortable1TB.png';
import LogitechB170WirelessMouse from '../../assets/Img/Accessories/ComputerAccessories/LogitechB170WirelessMouse.png';
import PortronicsMport31CUSBCHub from '../../assets/Img/Accessories/ComputerAccessories/PortronicsMport31CUSBCHub.png';
import Apple20WUSBCPowerAdapter from '../../assets/Img/Accessories/MobileAccessories/Apple20WUSBCPowerAdapter.png';
import AmbraneUnbreakable from '../../assets/Img/Accessories/MobileAccessories/AmbraneUnbreakable.png';
import SanDiskUltra64GB from '../../assets/Img/Accessories/MobileAccessories/SanDiskUltra64GB.png';
import MIPowerBank3i from '../../assets/Img/Accessories/MobileAccessories/MIPowerBank3i.png';
import Portronics51WCarCharger from '../../assets/Img/Accessories/MobileAccessories/Portronics51WCarCharger.png';
import MouldexCellPhoneStand from '../../assets/Img/Accessories/MobileAccessories/MouldexCellPhoneStand.png';
import PortronicsiKonnectCProTypeC from '../../assets/Img/Accessories/MobileAccessories/PortronicsiKonnectCProTypeC.png';
import AGAROUSBTypeCTo from '../../assets/Img/Accessories/MobileAccessories/AGAROUSBTypeCTo.png';
import ELVMobilePhoneMount from '../../assets/Img/Accessories/MobileAccessories/ELVMobilePhoneMount.png';
import AmbraneMobileHoldingTabletopStand from '../../assets/Img/Accessories/MobileAccessories/AmbraneMobileHoldingTabletopStand.png';
import Apple2022MacBookAirLaptopwithM2chip from '../../assets/Img/Laptops/MacBooks/Apple2022MacBookAirLaptopwithM2chip.png';
import Apple2023MacBookAir15inchM2chip from '../../assets/Img/Laptops/MacBooks/Apple2023MacBookAir15inchM2chip.png';
import Apple2023MacBookPro14inchM3chip from '../../assets/Img/Laptops/MacBooks/Apple2023MacBookPro14inchM3chip.png';
import Apple2023MacBookPro16inchM3Maxchip from '../../assets/Img/Laptops/MacBooks/Apple2023MacBookPro16inchM3Maxchip.png';
import Apple2023MacBookPro16inchM3Prochip from '../../assets/Img/Laptops/MacBooks/Apple2023MacBookPro16inchM3Prochip.png';
import Apple2024MacBookAir15inchLaptopwithM3chip from '../../assets/Img/Laptops/MacBooks/Apple2024MacBookAir15inchLaptopwithM3chip.png';
import MacBookAir13inchLaptopwithM3chip from '../../assets/Img/Laptops/MacBooks/MacBookAir13inchLaptopwithM3chip.png';
import MacBookAirLaptopM1chip from '../../assets/Img/Laptops/MacBooks/MacBookAirLaptopM1chip.png';
import AcerAspireLite12Gen from '../../assets/Img/Laptops/Window/AcerAspireLite12Gen.png';
import ASUSROGStrixG17 from '../../assets/Img/Laptops/Window/ASUSROGStrixG17.png';
import ASUSVivobook14 from '../../assets/Img/Laptops/Window/ASUSVivobook14.png';
import ASUSVivobook15 from '../../assets/Img/Laptops/Window/ASUSVivobook15.png';
import Dell15 from '../../assets/Img/Laptops/Window/Dell15.png';
import HONORMagicBookX16 from '../../assets/Img/Laptops/Window/HONORMagicBookX16.png';
import HP14s from '../../assets/Img/Laptops/Window/HP14s.png';
import HP15s from '../../assets/Img/Laptops/Window/HP15s.png';
import LenovoIdeaPad311thGen from '../../assets/Img/Laptops/Window/LenovoIdeaPad311thGen.png';
import LenovoIdeaPadSlim3 from '../../assets/Img/Laptops/Window/LenovoIdeaPadSlim3.png';
import LenovoThinkBook15 from '../../assets/Img/Laptops/Window/LenovoThinkBook15.png';
import LenovoThinkPadE14 from '../../assets/Img/Laptops/Window/LenovoThinkPadE14.png';
import MicrosoftNewSurfaceLaptop5 from '../../assets/Img/Laptops/Window/MicrosoftNewSurfaceLaptop5.png';
import realmenarzo60X from '../../assets/Img/MobileShop/BudgetSmartphones/realmenarzo60X.png';
import realmenarzo60 from '../../assets/Img/MobileShop/BudgetSmartphones/realmenarzo60.png';
import samsungM14 from '../../assets/Img/MobileShop/BudgetSmartphones/samsungM14.png';
import iqooZ6Lite from '../../assets/Img/MobileShop/BudgetSmartphones/iqooZ6Lite.png';
import redmi12 from '../../assets/Img/MobileShop/BudgetSmartphones/redmi12.png';
import pocoM6Pro from '../../assets/Img/MobileShop/BudgetSmartphones/pocoM6Pro.png'
import redmi13C from '../../assets/Img/MobileShop/BudgetSmartphones/redmi13C.png';
import lavaBlaze from '../../assets/Img/MobileShop/BudgetSmartphones/lavaBlaze.png';
import samsungM04 from '../../assets/Img/MobileShop/BudgetSmartphones/samsungM04.png';
import vivoY27 from '../../assets/Img/MobileShop/BudgetSmartphones/vivoY27.png';
import samsungM13 from '../../assets/Img/MobileShop/BudgetSmartphones/samsungM13.png';
import vivoY16 from '../../assets/Img/MobileShop/BudgetSmartphones/vivoY16.png';
import lavaStorm from '../../assets/Img/MobileShop/BudgetSmartphones/lavaStorm.png';
import oppoA59 from '../../assets/Img/MobileShop/BudgetSmartphones/oppoA59.png';
import honorX9B from '../../assets/Img/MobileShop/MidrangeSmartphones/honorX9B.png';
import iqooZ7Pro from '../../assets/Img/MobileShop/MidrangeSmartphones/iqooZ7Pro.png';
import iqooZ9 from '../../assets/Img/MobileShop/MidrangeSmartphones/iqooZ9.png';
import onePlusNordCE3 from '../../assets/Img/MobileShop/MidrangeSmartphones/onePlusNordCE3.png';
import onePlusNordCE3Lite from '../../assets/Img/MobileShop/MidrangeSmartphones/onePlusNordCE3Lite.png';
import realmenarzo70pro from '../../assets/Img/MobileShop/MidrangeSmartphones/realmeNarzo70Pro.png';
import samsungM34 from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungM34.png';
import oneplus12R from '../../assets/Img/MobileShop/MidrangeSmartphones/onePlus12R.png';
import realme12Pro from '../../assets/Img/MobileShop/MidrangeSmartphones/realme12Pro.png';
import iqooNeo9Pro from '../../assets/Img/MobileShop/MidrangeSmartphones/iqooNeo9Pro.png';
import redmiNote13 from '../../assets/Img/MobileShop/MidrangeSmartphones/redmiNote13.png';
import realme12 from '../../assets/Img/MobileShop/MidrangeSmartphones/realme12.png';
import nothingPhone2a from '../../assets/Img/MobileShop/MidrangeSmartphones/nothingPhone2a.png';
import lavaAgni2 from '../../assets/Img/MobileShop/MidrangeSmartphones/lavaAgni2.png';
import oneplusNord3 from '../../assets/Img/MobileShop/MidrangeSmartphones/oneplusNord3.png';
import oppoF25Pro from '../../assets/Img/MobileShop/MidrangeSmartphones/oppoF25Pro.png';
import oneplus11R from '../../assets/Img/MobileShop/MidrangeSmartphones/oneplus11R.png';
import samsungA55 from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungA55.png';
import samsungF54 from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungF54.png';
import honor90 from '../../assets/Img/MobileShop/MidrangeSmartphones/honor90.png';
import iqooNeo7Pro from '../../assets/Img/MobileShop/MidrangeSmartphones/iqooNeo7Pro.png';
import samsungA34 from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungA34.png';
import lavaBlazeCurve from '../../assets/Img/MobileShop/MidrangeSmartphones/lavaBlazeCurve.png';
import samsungS21FE from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungS21FE.png';
import samsungA15 from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungA15.png';
import samsungA54 from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungA54.png';
import samsungA35 from '../../assets/Img/MobileShop/MidrangeSmartphones/samsungA35.png';
import iphone13 from '../../assets/Img/MobileShop/PremiumSmartphones/iphone13.png';
import iphone15 from '../../assets/Img/MobileShop/PremiumSmartphones/iphone15.png';
import iqoo12 from '../../assets/Img/MobileShop/PremiumSmartphones/iqoo12.png';
import oneplus12 from '../../assets/Img/MobileShop/PremiumSmartphones/oneplus12.png';
import iphone14 from '../../assets/Img/MobileShop/PremiumSmartphones/iphone14.png';
import iphone14Plus from '../../assets/Img/MobileShop/PremiumSmartphones/iphone14Plus.png';
import iphone15Plus from '../../assets/Img/MobileShop/PremiumSmartphones/iphone15Plus.png';
import iphone15Pro from '../../assets/Img/MobileShop/PremiumSmartphones/iphone15Pro.png';
import iphone15ProMax from '../../assets/Img/MobileShop/PremiumSmartphones/iphone15ProMax.png';
import xiaomi14 from '../../assets/Img/MobileShop/PremiumSmartphones/xiaomi14.png';
import samsungS24 from '../../assets/Img/MobileShop/PremiumSmartphones/samsungS24.png';
import samsungS23FE from '../../assets/Img/MobileShop/PremiumSmartphones/samsungS23FE.png';
import samsungS24Ultra from '../../assets/Img/MobileShop/PremiumSmartphones/samsungS24Ultra.png';
import iqoo11 from '../../assets/Img/MobileShop/PremiumSmartphones/iqoo11.png';
import nothingPhone2 from '../../assets/Img/MobileShop/PremiumSmartphones/nothingPhone2.png';
import samsungZFold5 from '../../assets/Img/MobileShop/PremiumSmartphones/samsungZFold5.png';
import samsungZFlip5 from '../../assets/Img/MobileShop/PremiumSmartphones/samsungZFlip5.png';
import onePlusOpen from '../../assets/Img/MobileShop/PremiumSmartphones/onePlusOpen.png';
import motorolaRazr40 from '../../assets/Img/MobileShop/PremiumSmartphones/motorolaRazr40.png';
import motorolaRazr40Ultra from '../../assets/Img/MobileShop/PremiumSmartphones/motorolaRazr40Ultra.png';

import NoisePulse2Max from '../../assets/Img/SmartWatch/Budget/NoisePulse2Max.png';
import FastrackLimitlessGlide from '../../assets/Img/SmartWatch/Budget/FastrackLimitlessGlide.png';
import NoiseTwistRound from '../../assets/Img/SmartWatch/Budget/NoiseTwistRound.png';
import FireBolttTalk2ProUltra from '../../assets/Img/SmartWatch/Budget/FireBolttTalk2ProUltra.png';
import NoiseHaloPlus from '../../assets/Img/SmartWatch/Budget/NoiseHaloPlus.png';
import FireBolttInvinciblePlus from '../../assets/Img/SmartWatch/Budget/FireBolttInvinciblePlus.png';
import NoiseDivaSmartWatch from '../../assets/Img/SmartWatch/Budget/NoiseDivaSmartWatch.png';
import NoiseColorFitUltra3 from '../../assets/Img/SmartWatch/Budget/NoiseColorFitUltra3.png';
import NoiseFitHalo from '../../assets/Img/SmartWatch/Budget/NoiseFitHalo.png';
import boAtWaveSpectra from '../../assets/Img/SmartWatch/Midrange/boAtWaveSpectra.png';
import boAtLunarEmbrace from '../../assets/Img/SmartWatch/Midrange/boAtLunarEmbrace.png';
import TitanCrestPremium from '../../assets/Img/SmartWatch/Midrange/TitanCrestPremium.png';
import FireBolttRoyaleLuxury from '../../assets/Img/SmartWatch/Midrange/FireBolttRoyaleLuxury.png';
import TitanSmart3Premium from '../../assets/Img/SmartWatch/Midrange/TitanSmart3Premium.png';
import FireBolttNewlyLaunched from '../../assets/Img/SmartWatch/Midrange/FireBolttNewlyLaunched.png';
import NoiseScoutKids from '../../assets/Img/SmartWatch/Midrange/NoiseScoutKids.png';
import CrossBeatsNexus2 from '../../assets/Img/SmartWatch/Midrange/CrossBeatsNexus2.png';
import NoiseNewlyLaunchedColorFitPro5Max from '../../assets/Img/SmartWatch/Midrange/NoiseNewlyLaunchedColorFitPro5Max.png';
import boAtUltimaSelect from '../../assets/Img/SmartWatch/Midrange/boAtUltimaSelect.png';
import AmazfitGTS4 from '../../assets/Img/SmartWatch/Premium/AmazfitGTS4.jpg';
import SamsungGalaxyWatch5ProLTE from '../../assets/Img/SmartWatch/Premium/SamsungGalaxyWatch5ProLTE.png';
import AppleWatchUltra from '../../assets/Img/SmartWatch/Premium/AppleWatchUltra.png';
import SamsungGalaxyWatch6LTE from '../../assets/Img/SmartWatch/Premium/SamsungGalaxyWatch6LTE.png';
import AppleWatchUltra2 from '../../assets/Img/SmartWatch/Premium/AppleWatchUltra2.png';
import SamsungGalaxyWatch4 from '../../assets/Img/SmartWatch/Premium/SamsungGalaxyWatch4.png';
import AppleWatchSE2ThGen from '../../assets/Img/SmartWatch/Premium/AppleWatchSE2ThGen.png';
import IMOOZ1Kids from '../../assets/Img/SmartWatch/Premium/IMOOZ1Kids.png';
import FossilGen6 from '../../assets/Img/SmartWatch/Premium/FossilGen6.png';
import OnePlusWatch2 from '../../assets/Img/SmartWatch/Premium/OnePlusWatch2.png';
import AmazfitActiveSW from '../../assets/Img/SmartWatch/Premium/AmazfitActiveSW.png';
import AppleWatchSeries9 from '../../assets/Img/SmartWatch/Premium/AppleWatchSeries9.png';
import iPad10thGenA14 from '../../assets/Img/TabletsAndiPads/iPads/iPad10thGenA14.png';
import iPadMini6thGenA15 from '../../assets/Img/TabletsAndiPads/iPads/iPadMini6thGenA15.png';
import iPadPro114thGen from '../../assets/Img/TabletsAndiPads/iPads/iPadPro114thGen.png';
import iPadPro116thGen from '../../assets/Img/TabletsAndiPads/iPads/iPadPro116thGen.png';
import iPad9thGen from '../../assets/Img/TabletsAndiPads/iPads/iPad9thGen.png';
import iPadPro2021 from '../../assets/Img/TabletsAndiPads/iPads/iPadPro2021.png';
import iPadAir5thGen from '../../assets/Img/TabletsAndiPads/iPads/iPadAir5thGen.png';
import samsungTabA9Plus from '../../assets/Img/TabletsAndiPads/Tablets/samsungTabA9Plus.png';
import OnePlusPadGo from '../../assets/Img/TabletsAndiPads/Tablets/OnePlusPadGo.png'
import XiaomiPad6 from '../../assets/Img/TabletsAndiPads/Tablets/XiaomiPad6.png';
import OnePlusPad from '../../assets/Img/TabletsAndiPads/Tablets/OnePlusPad.png';
import samsungTabS9FEPlus from '../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9FEPlus.png';
import samsungTabS9FE from '../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9FE.png';
import honorPad8 from '../../assets/Img/TabletsAndiPads/Tablets/honorPad8.png';
import LenovoTabM11 from '../../assets/Img/TabletsAndiPads/Tablets/LenovoTabM11.png';
import motorolaTabG70 from '../../assets/Img/TabletsAndiPads/Tablets/motorolaTabG70.png';
import samsungTabS9 from '../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9.png';
import samsungTabS9Plus from '../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9Plus.png';
import samsungTabS9Ultra from '../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9Ultra.png';
import samsungTabS8Plus from '../../assets/Img/TabletsAndiPads/Tablets/samsungTabS8Plus.png';

const SearchResultPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    const products = [
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
        {
            img: JDFRESHPortableLaptopStandforDesk,
            name: "JD FRESH Adjustable Multi-Angle Portable Laptop Stand for Desk with Mobile with Detachable Mouse pad, Laptop raisers Computer Accessories Laptop Holder for Desk",
            price: "₹599",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: HPX1000WiredUSBMouse,
            name: "HP X1000 Wired USB Mouse with 3 Handy Buttons, Fast-Moving Scroll Wheel and Optical Sensor works on most Surfaces, 3 years warranty",
            price: "₹279",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: PortableLaptopStand,
            name: "Multi-Angle Portable Laptop Stand for Desk with Mobile Detachable Mouse pad, raisers Computer Accessories Holder Lapdesk",
            price: "₹996",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: PortronicsKPortableLaptopStand,
            name: "Portronics My Buddy K Portable Laptop Stand with Adjustable Height, Foldable, OverHeating Protection for Laptops & MacBooks (Grey)",
            price: "₹498",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: FURJADENAntiTheftNumberLockBackpackBag,
            name: "FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls",
            price: "₹649",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: Exxelo5in1KeyboardCleaningBrushKit,
            name: "Exxelo 5 in 1 Keyboard Cleaning Brush Kit Computer Accessories Charging Box Keyboard",
            price: '₹729',
            productNameId: 'samsungS24Ultra',
        },
        {
            img: SamsungT7Shield2TB,
            name: "Samsung T7 Shield 2TB, Portable SSD, up-to 1050MB/s, USB 3.2 Gen2, Rugged, IP65 Water & Dust Resistant, for Photographers, Content Creators and Gaming, Extenal Solid State Drive (MU-PE2T0R/WW), Blue",
            price: "₹17,119",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AdarazM2NVME,
            name: "Adaraz M.2 NVME and SATA NGFF Enclosure Dual Protocol Gen 2 USB 3.1 M.2 SSD External Hard Disk Drive Adapter HDD UASP NGFF External Case Max 2TB 2230 2242 2260 2280 for Laptop",
            price: "₹1,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: SandiskExtremePortable1TB,
            name: "Sandisk Extreme Portable 1TB, 1050MB/s R, 1000MB/s W, 3mtr Drop Protection, IP65 Water/dust Resistance, HW Encryption, PC,MAC & TypeC Smartphone Compatible, 5Y Warranty, External SSD, Black Color",
            price: "₹9,990",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: LogitechB170WirelessMouse,
            name: "Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black",
            price: "₹595",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: PortronicsMport31CUSBCHub,
            name: "Portronics Mport 31C USB C Hub (4-in-1), Type C Multiport Adapter with 1 x USB 3.0 & 3 x USB 2.0 Ports, up to 5 Gbps High Speed Data Transfer for Laptop, MacBook, PC (Grey)",
            price: "₹371",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: Apple20WUSBCPowerAdapter,
            name: "Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
            price: "₹1,699",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AmbraneUnbreakable,
            name: "Ambrane Unbreakable 3A Fast Charging 1.5m Braided Type C Cable for Smartphones, Tablets, Laptops & other Type C devices, 480Mbps Data Sync, Quick Charge 3.0",
            price: "₹179",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: SanDiskUltra64GB,
            name: "SanDisk Ultra 64GB microSDXC UHS-I, 140MB/s R, Memory Card, 10 Y Warranty, for Smartphones",
            price: "₹559",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: MIPowerBank3i,
            name: "MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black",
            price: "₹1,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: Portronics51WCarCharger,
            name: "Portronics 51W Car Power 16 Fast Car Charger with Dual Output, 51 Watts Total (18W USB + 33W Type C PD), Fast Charging, Adapter for iPhone & Android Smartphones and Tablets (Black)",
            price: "₹399",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: MouldexCellPhoneStand,
            name: "Mouldex Cell Phone Stand 360° Rotation Phone Stand Height Adjustable Cell Phone Holder Foldable Aluminium Alloy Stand Compatible with All Mobile Phones, iPad, Tablet 4 12 Desk Accessories (Grey)",
            price: "₹729",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: PortronicsiKonnectCProTypeC,
            name: "Portronics iKonnect C Pro Type C to 3.5 mm Audio Jack Connector with DAC Headphone Converter Adapter Compatible with iPhone 15 Pro Max/15 Pro/15 Plus, Galaxy S23/S22/S21/S208 & Other Type C Phones",
            price: "₹219",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AGAROUSBTypeCTo,
            name: "AGARO USB Type C Female to USB Male OTG Adapter, Works with Laptops,Chargers,and More Devices with Standard USB A Interface",
            price: "₹149",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: ELVMobilePhoneMount,
            name: "ELV Mobile Phone Mount Tabletop Holder for Phones and Tablets - Black",
            price: "₹84",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: AmbraneMobileHoldingTabletopStand,
            name: "Ambrane Mobile Holding Tabletop Stand, 0-135 Perfect View, Height Adjustment, Wide Compatibility, Multipurpose, Anti-Skid Design (Twistand, Black)",
            price: "₹199",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: Dell15,
            name: "Dell 15 Laptop, Intel Core i5-1135G7 Processor",
            price: "₹46,999",
            productNameId: 'dell-15',
        },
        {
            img: LenovoIdeaPadSlim3,
            name: "Lenovo IdeaPad Slim 3 Intel Core i7 12th Gen",
            price: "₹62,999",
            productNameId: 'lenovo-ideaPad-slim-3',
        },
        {
            img: ASUSVivobook14,
            name: "ASUS Vivobook 14, Intel Core i3-1115G4 11th Gen",
            price: "₹31,499",
            productNameId: 'asus-vivobook-14',
        },
        {
            img: ASUSVivobook15,
            name: "ASUS Vivobook 15, Intel Core i3-1220P 12th Gen",
            price: " ₹38,999",
            productNameId: 'asus-vivobook-14',
        },
        {
            img: LenovoThinkBook15,
            name: "Lenovo ThinkBook 15 Intel 12th Gen Core i7",
            price: "₹57,999",
            productNameId: 'lenovo-ideaPad-slim-3',
        },
        {
            img: AcerAspireLite12Gen,
            name: "Acer Aspire Lite 12th Gen Intel Core i3-1215U Premium Metal Laptop",
            price: " ₹32,999",
            productNameId: 'acer-aspire-lite-12th-gen',
        },
        {
            img: MicrosoftNewSurfaceLaptop5,
            name: "Microsoft New Surface Laptop5 13.5 Intel evo 12 Gen i5",
            price: "₹1,01,799",
            productNameId: 'lenovo-ideaPad-slim-3',
        },
        {
            img: LenovoThinkPadE14,
            name: "Lenovo ThinkPad E14 Intel Core i5 13th Gen 14",
            price: "₹73,999",
            productNameId: 'lenovo-ideaPad-slim-3',
        },
        {
            img: LenovoIdeaPad311thGen,
            name: "Lenovo IdeaPad 3 11th Gen",
            price: "₹33,499",
            productNameId: 'lenovo-ideaPad-slim-3',
        },
        {
            img: HP15s,
            name: "HP 15s, Ryzen 5-5500U",
            price: "₹43,999",
            productNameId: 'acer-aspire-lite-12th-gen',
        },
        {
            img: HONORMagicBookX16,
            name: "HONOR MagicBook X16 (2024), 12th Gen Intel Core i5-12450H",
            price: "₹48,999",
            productNameId: 'dell-15',
        },
        {
            img: HP14s,
            name: "HP Laptop 14s, AMD Ryzen 5 5500U, 14-inch",
            price: "₹42,999",
            productNameId: 'acer-aspire-lite-12th-gen',
        },
        {
            img: ASUSROGStrixG17,
            name: "ASUS ROG Strix G17",
            price: " ₹79,999",
            productNameId: 'asus-vivobook-14',
        },
        {
            img: samsungS24,
            name: "Samsung Galaxy S24",
            price: "₹79,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iphone15ProMax,
            name: "Apple iPhone 15 Pro Max",
            price: "₹1,49,999",
            productNameId: 'iPhone15ProMax',
        },
        {
            img: oneplus12,
            name: "OnePlus 12",
            price: "₹69,999",
            productNameId: 'oneplus12',
        },
        {
            img: iphone15,
            name: "Apple iPhone 15",
            price: "₹71,999",
            productNameId: 'iPhone15',
        },
        {
            img: samsungZFlip5,
            name: "Samsung Galaxy Z Flip5 5G",
            price: "₹99,999",
            productNameId: 'samsungZFlip5',
        },
        {
            img: iqoo12,
            name: "IQOO 12",
            price: "₹52,999",
            productNameId: 'iqoo12',
        },
        {
            img: iphone14,
            name: "Apple iPhone14",
            price: "₹59,999",
            productNameId: 'iPhone14',
        }, {
            img: samsungZFold5,
            name: "Samsung Galaxy Z Fold5 5G",
            price: "₹1,54,999",
            productNameId: 'samsungZFold5',
        },
        {
            img: iphone15Pro,
            name: "Apple iPhone 15 Pro",
            price: "₹1,29,999",
            productNameId: 'iPhone15Pro',
        },
        {
            img: iphone14Plus,
            name: "Apple iPhone 14 Plus",
            price: "₹66,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iphone15Plus,
            name: "Apple iPhone 15 Plus",
            price: "₹79,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: onePlusOpen,
            name: "Oneplus Open",
            price: "₹1,39,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: xiaomi14,
            name: "Xiaomi 14",
            price: "₹69,999",
            productNameId: 'samsungS24Ultra',
        }, {
            img: motorolaRazr40Ultra,
            name: "Motorola razr 40 Ultra 5G",
            price: "₹64,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iphone13,
            name: "Apple iPhone13",
            price: "₹51,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungS23FE,
            name: "Samsung Galaxy S23 FE",
            price: "₹40,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungS24Ultra,
            name: "Samsung Galaxy S24 Ultra",
            price: "₹1,24,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iqoo11,
            name: "IQOO 11",
            price: "₹44,999",
            productNameId: 'samsungS24Ultra',
        }, {
            img: motorolaRazr40,
            name: "Motorola razr 40",
            price: "₹44,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: nothingPhone2,
            name: "Nothing Phone 2",
            price: "₹40,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: onePlusNordCE3Lite,
            name: "OnePlus Nord CE 3 Lite 5G",
            price: "₹17,999",
            productNameId: 'onePlusNordCE3Lite',
        },
        {
            img: iqooZ9,
            name: "IQOO Z9 5G",
            price: "₹19,999",
            productNameId: 'iqooZ6Lite',
        },
        {
            img: realmenarzo70pro,
            name: "Realme NARZO 70 Pro 5G",
            price: "₹21,999",
            productNameId: 'realmenarzo60X5G',
        },
        {
            img: onePlusNordCE3,
            name: "OnePlus Nord CE 3 5G",
            price: "₹24,999",
            productNameId: 'onePlusNordCE3',
        },
        {
            img: iqooZ7Pro,
            name: "IQOO Z7 Pro 5G",
            price: "₹24,999",
            productNameId: 'iqooZ7Pro',
        },
        {
            img: samsungM34,
            name: "Samsung Galaxy M34",
            price: "₹15,999",
            productNameId: 'samsungM34',
        },
        {
            img: honorX9B,
            name: "Honor X9b 5G",
            price: "₹25,999",
            productNameId: 'samsungM34',
        },
        {
            img: oneplus12R,
            name: "OnePlus 12R",
            price: "₹39,999",
            productNameId: 'oneplus12r',
        },
        {
            img: realme12Pro,
            name: "Realme 12 Pro 5G",
            price: "₹23,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iqooNeo9Pro,
            name: "IQOO Neo 9 Pro 5G",
            price: "₹36,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: redmiNote13,
            name: "Redmi Note 13 5G",
            price: "₹17,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: realme12,
            name: "realme 12 5G",
            price: "₹16,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: nothingPhone2a,
            name: "Nothing Phone (2a)",
            price: "₹24,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: lavaAgni2,
            name: "Lava Agni 2 5G",
            price: "₹17,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: oneplusNord3,
            name: "OnePlus Nord 3",
            price: "₹28,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: oppoF25Pro,
            name: "Oppo F25 Pro 5G",
            price: "₹23,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: oneplus11R,
            name: "OnePlus 11R",
            price: "₹35,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungA55,
            name: "Samsung Galaxy A55",
            price: "₹39,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungF54,
            name: "Samsung Galaxy F54",
            price: "₹23,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: honor90,
            name: "HONOR 90",
            price: "₹29,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: iqooNeo7Pro,
            name: "IQOO Neo 7 Pro",
            price: "₹30,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungA34,
            name: "Samsung Galaxy A34",
            price: "₹26,499",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: lavaBlazeCurve,
            name: "Lava Blaze Curve",
            price: "₹17,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungS21FE,
            name: "Samsung Galaxy S21 FE",
            price: "₹34,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungA15,
            name: "Samsung Galaxy A15",
            price: "₹16,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungA54,
            name: "Samsung Galaxy A54",
            price: "₹35,499",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungA35,
            name: "Samsung Galaxy A35",
            price: "₹30,999",
            productNameId: 'samsungS24Ultra',
        },
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
        {
            img: MacBookAirLaptopM1chip,
            name: "Apple MacBook Air Laptop M1 chip",
            price: "₹79,999",
            productNameId: 'macBook-air-laptop-m1-chip',
        }, {
            img: MacBookAir13inchLaptopwithM3chip,
            name: "Apple 2024 MacBook Air 13″ Laptop with M3 chip",
            price: "₹1,14,999",
            productNameId: 'macBook-air-laptop-m3-chip',
        }, {
            img: Apple2023MacBookPro16inchM3Maxchip,
            name: "Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core CPU and 40‑core GPU",
            price: "₹3,99,999",
            productNameId: 'macbook-pro-m3-max-chip',
        }, {
            img: Apple2022MacBookAirLaptopwithM2chip,
            name: "Apple 2022 MacBook Air Laptop with M2 chip",
            price: " ₹99,999",
            productNameId: 'MacBookAirM2Chip',
        }, {
            img: Apple2023MacBookAir15inchM2chip,
            name: "Apple 2023 MacBook Air (15-inch, M2 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 256GB) ",
            price: "₹1,15,999",
            productNameId: 'macBook-air-laptop-m3-chip',
        }, {
            img: Apple2023MacBookPro14inchM3chip,
            name: "Apple 2023 MacBook Pro (14-inch, M3 chip",
            price: "₹1,89,999",
            productNameId: 'macbook-pro-m3-max-chip',
        },
        {
            img: Apple2024MacBookAir15inchLaptopwithM3chip,
            name: "Apple 2024 MacBook Air 15″ Laptop with M3 chip",
            price: "₹1,34,999",
            productNameId: 'macBook-air-laptop-m3-chip',
        },
        {
            img: Apple2023MacBookPro16inchM3Prochip,
            name: "Apple 2023 MacBook Pro (16-inch, M3 Pro chip",
            price: "₹2,89,999",
            productNameId: 'macbook-pro-m3-max-chip',
        },
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
        {
            img: iPadAir5thGen,
            name: "Apple iPad Air (5th Generation): with M1 chip",
            price: "₹72,999",
            productNameId: 'iPadAir5thGen',
        },
        {
            img: iPad10thGenA14,
            name: "Apple iPad (10th Generation): with A14 Bionic chip",
            price: "₹36,999",
            productNameId: 'apple-ipad-10th-gen-with-A14-bionic-chip',
        }, {
            img: iPadPro114thGen,
            name: "Apple iPad Pro 11″ (4th Generation): with M2 chip",
            price: "₹89,999",
            productNameId: 'apple-iPad-pro-11″-(4th-Generation):-with-M2-chip',
        }, {
            img: iPadPro116thGen,
            name: "Apple iPad Pro 12.9″ (6th Generation): with M2 chip",
            price: "₹1,12,999",
            productNameId: 'apple-iPad-pro-11″-(4th-Generation):-with-M2-chip',
        }, {
            img: iPadMini6thGenA15,
            name: "Apple iPad Mini (6th Generation): with A15 Bionic chip",
            price: "₹49,999",
            productNameId: 'iPadAir5thGen',
        },
        {
            img: iPad9thGen,
            name: "Apple iPad (9th Generation): with A13 Bionic chip",
            price: "₹29,999",
            productNameId: 'apple-ipad-10th-gen-with-A14-bionic-chip',
        },
        {
            img: iPadPro2021,
            name: "Apple 2021 iPad Pro M1 chip",
            price: "₹1,36,999",
            productNameId: 'apple-iPad-pro-11″-(4th-Generation):-with-M2-chip',
        },
        {
            img: samsungTabA9Plus,
            name: "Samsung Galaxy Tab A9+",
            price: "₹19,999",
            productNameId: 'samsung-tab-A9-plus',
        },
        {
            img: OnePlusPad,
            name: "OnePlus Pad",
            price: "₹39,999",
            productNameId: 'oneplus-pad',
        },
        {
            img: XiaomiPad6,
            name: "Xiaomi Pad 6",
            price: "₹27,999",
            productNameId: 'xiaomi-pad-6',
        }, {
            img: samsungTabS9FE,
            name: "Samsung Galaxy Tab S9 FE",
            price: "₹44,999",
            productNameId: 'samsung-tab-A9-plus',
        },
        {
            img: OnePlusPadGo,
            name: "OnePlus Pad Go",
            price: "₹23,999",
            productNameId: 'samsungS24Ultra',
        },
        {
            img: samsungTabS9Ultra,
            name: "Samsung Galaxy Tab S9 Ultra",
            price: "₹1,22,999",
            productNameId: 'samsung-tab-A9-plus',
        },
        {
            img: honorPad8,
            name: "HONOR PAD 8",
            price: "₹17,999",
            productNameId: 'xiaomi-pad-6',
        }, {
            img: samsungTabS9Plus,
            name: "Samsung Galaxy Tab S9+",
            price: "₹99,999",
            productNameId: 'samsung-tab-A9-plus',
        }, {
            img: samsungTabS9FEPlus,
            name: "Samsung Galaxy Tab S9 FE+",
            price: "₹54,999",
            productNameId: 'samsung-tab-A9-plus',
        }, {
            img: LenovoTabM11,
            name: "Lenovo Tab M11",
            price: "₹17,999",
            productNameId: 'xiaomi-pad-6',
        }, {
            img: motorolaTabG70,
            name: "Motorola Tab G70",
            price: "₹15,999",
            productNameId: 'oneplus-pad',
        }, {
            img: samsungTabS9,
            name: "Samsung Galaxy Tab S9",
            price: "₹83,999",
            productNameId: 'samsung-tab-A9-plus',
        }, {
            img: samsungTabS8Plus,
            name: "Samsung Galaxy Tab S8+",
            price: "₹94,999",
            productNameId: 'samsung-tab-A9-plus',
        },
    ];
    const searchHeading = `Search Results for ${query}`;
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10000000);

    const handleMinValue = (e) => {
        setMinValue(e.target.value);
    }

    const handleMaxValue = (e) => {
        setMaxValue(e.target.value);
    }

    const filteredProductsData = filteredProducts.filter(productData => {
        const priceValue = parseFloat(productData.price.replace(/[^\d.]/g, ''));
        return priceValue >= minValue && priceValue <= maxValue;
    });

    return (
        <>
            <div className={styles.container}>
                <div>
                    <label className={styles.label}>Min Value:</label>
                    <input type='number' placeholder='Min Value' value={minValue} onChange={handleMinValue} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Max Value:</label>
                    <input type='number' placeholder='Min Value' value={maxValue} onChange={handleMaxValue} className={styles.input} />
                </div>
            </div>
            <div style={{ minHeight: '89vh', fontStyle: 'italic' }}>
                <Card images={filteredProductsData} heading={searchHeading} />
            </div>
        </>
    );
}

export default SearchResultPage;
