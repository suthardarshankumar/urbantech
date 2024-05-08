import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { LuPackage2 } from 'react-icons/lu';
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import styles from './ProductDetail.module.css';
import Collapsible from '../../../components/DetailPages/Collapsible/Collapsible';


// Samsung S24 Ultra
import SamsungS24Ultra1 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra.webp';
import SamsungS24Ultra2 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra2.webp';
import SamsungS24Ultra3 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra3.webp';
import SamsungS24Ultra4 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra4.webp';
import SamsungS24Ultra5 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra5.webp';

import SamsungS24Ultra11 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra11.jpg';
import SamsungS24Ultra12 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra12.jpg';
import SamsungS24Ultra13 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra13.jpg';
import SamsungS24Ultra14 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra14.jpg';
import SamsungS24Ultra15 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/samsungs24ultra15.jpg';
import SamsungS24UltraDetails11 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/11.jpg';
import SamsungS24UltraDetails21 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/21.jpg';
import SamsungS24UltraDetails22 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/22.jpg';
import SamsungS24UltraDetails23 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/23.jpg';
import SamsungS24UltraDetails31 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/31.jpg';
import SamsungS24UltraDetails32 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/32.jpg';
import SamsungS24UltraDetails33 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/33.jpg';
import SamsungS24UltraDetails34 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/34.jpg';
import SamsungS24UltraDetails41 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/41.jpg';
import SamsungS24UltraDetails42 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/42.jpg';
import SamsungS24UltraDetails43 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/43.jpg';
import SamsungS24UltraDetails44 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/44.jpg';
import SamsungS24UltraDetails51 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/51.jpg';
import SamsungS24UltraDetails52 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/52.jpg';
import SamsungS24UltraDetails53 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/53.jpg';
import SamsungS24UltraDetails54 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/54.jpg';
import SamsungS24UltraDetails61 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/61.jpg';
import SamsungS24UltraDetails62 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/62.jpg';
import SamsungS24UltraDetails63 from '../../../assets/Img//ProductDetailsImg/Mobiles/SamsungS24Ultra/detailImg/63.jpg';

// iPhone 15
import iPhone1511 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/11.webp';
import iPhone1512 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/12.jpg';
import iPhone1513 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/13.jpg';
import iPhone1514 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/14.jpg';
import iPhone1515 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/15.jpg';
import iPhone1516 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/16.jpg';
import iPhone1521 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/21.jpg';
import iPhone1522 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/22.jpg';
import iPhone1523 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/23.jpg';
import iPhone1524 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/24.jpg';
import iPhone1525 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/25.jpg';
import iPhone1526 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/26.jpg';
import iPhone1531 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/31.jpg';
import iPhone1532 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/32.jpg';
import iPhone1533 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/33.jpg';
import iPhone1534 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/34.jpg';
import iPhone1535 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/35.jpg';
import iPhone1536 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15/36.jpg';
// iPhoone 15 Pro
import iPhone15Pro11 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/11.jpg';
import iPhone15Pro12 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/12.jpg';
import iPhone15Pro13 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/13.jpg';
import iPhone15Pro14 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/14.jpg';
import iPhone15Pro15 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/15.jpg';
import iPhone15Pro16 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/16.jpg';
import iPhone15Pro21 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/21.jpg';
import iPhone15Pro22 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/22.jpg';
import iPhone15Pro23 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/23.jpg';
import iPhone15Pro24 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/24.jpg';
import iPhone15Pro25 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/25.jpg';
import iPhone15Pro26 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/26.jpg';
import iPhone15Pro31 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/31.jpg';
import iPhone15Pro32 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/32.jpg';
import iPhone15Pro33 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/33.jpg';
import iPhone15Pro34 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/34.jpg';
import iPhone15Pro35 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/35.jpg';
import iPhone15Pro36 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15Pro/36.jpg';
// iPhone 15 Pro Max
import iPhone15ProMax11 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/11.jpg';
import iPhone15ProMax12 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/12.jpg';
import iPhone15ProMax13 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/13.jpg';
import iPhone15ProMax14 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/14.jpg';
import iPhone15ProMax15 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/15.jpg';
import iPhone15ProMax16 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/16.jpg';
import iPhone15ProMax21 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/21.jpg';
import iPhone15ProMax22 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/22.jpg';
import iPhone15ProMax23 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/23.jpg';
import iPhone15ProMax24 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/24.jpg';
import iPhone15ProMax25 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/25.jpg';
import iPhone15ProMax26 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/26.jpg';
import iPhone15ProMax31 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/31.jpg';
import iPhone15ProMax32 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/32.jpg';
import iPhone15ProMax33 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/33.jpg';
import iPhone15ProMax34 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/34.jpg';
import iPhone15ProMax35 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/35.jpg';
import iPhone15ProMax36 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/36.jpg';
import iPhone15ProMax41 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/41.jpg';
import iPhone15ProMax42 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/42.jpg';
import iPhone15ProMax43 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/43.jpg';
import iPhone15ProMax44 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/44.jpg';
import iPhone15ProMax45 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/45.jpg';
import iPhone15ProMax46 from '../../../assets/Img//ProductDetailsImg/Mobiles/Iphone15ProMax/46.jpg';
// iPad Air 5th Gen
import iPadAir5ThGen11 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/11.jpg';
import iPadAir5ThGen12 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/12.jpg';
import iPadAir5ThGen13 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/13.jpg';
import iPadAir5ThGen14 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/14.jpg';
import iPadAir5ThGen15 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/15.jpg';
import iPadAir5ThGen16 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/16.jpg';
import iPadAir5ThGen21 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/21.jpg';
import iPadAir5ThGen22 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/22.jpg';
import iPadAir5ThGen23 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/23.jpg';
import iPadAir5ThGen24 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/24.jpg';
import iPadAir5ThGen25 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/25.jpg';
import iPadAir5ThGen26 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/26.jpg';
import iPadAir5ThGen31 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/31.jpg';
import iPadAir5ThGen32 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/32.jpg';
import iPadAir5ThGen33 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/33.jpg';
import iPadAir5ThGen34 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/34.jpg';
import iPadAir5ThGen35 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/35.jpg';
import iPadAir5ThGen36 from '../../../assets/Img/ProductDetailsImg/Tablets/iPadAir5thGen/36.jpg';
// APple Airpodes 2 Gen
import AppleAirPodes2Gen11 from '../../../assets/Img/ProductDetailsImg/TWS/AppleAirPode2Gen/11.jpg';
import AppleAirPodes2Gen12 from '../../../assets/Img/ProductDetailsImg/TWS/AppleAirPode2Gen/12.jpg';
import AppleAirPodes2Gen13 from '../../../assets/Img/ProductDetailsImg/TWS/AppleAirPode2Gen/13.jpg';
import AppleAirPodes2Gen14 from '../../../assets/Img/ProductDetailsImg/TWS/AppleAirPode2Gen/14.jpg';
import AppleAirPodes2Gen15 from '../../../assets/Img/ProductDetailsImg/TWS/AppleAirPode2Gen/15.jpg';
import AppleAirPodes2Gen16 from '../../../assets/Img/ProductDetailsImg/TWS/AppleAirPode2Gen/16.jpg';
// MacBook Air M2 Chip
import MacBookAirM2Chip11 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM2Chip/11.jpg';
import MacBookAirM2Chip12 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM2Chip/12.jpg';
import MacBookAirM2Chip13 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM2Chip/13.jpg';
import MacBookAirM2Chip14 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM2Chip/14.jpg';
import MacBookAirM2Chip15 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM2Chip/15.jpg';
import MacBookAirM2Chip16 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM2Chip/16.jpg';
// Apple Charger
import AppleCharger11 from '../../../assets/Img/ProductDetailsImg/Acces/AppleCharger/11.jpeg';
import AppleCharger12 from '../../../assets/Img/ProductDetailsImg/Acces/AppleCharger/12.jpeg';
import AppleCharger13 from '../../../assets/Img/ProductDetailsImg/Acces/AppleCharger/13.jpeg';
import AppleCharger14 from '../../../assets/Img/ProductDetailsImg/Acces/AppleCharger/14.jpeg';

// iPhone 14
import iPhone1411 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/11.jpg';
import iPhone1412 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/12.jpg';
import iPhone1413 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/13.jpg';
import iPhone1414 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/14.jpg';
import iPhone1415 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/15.jpg';
import iPhone1421 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/21.jpg';
import iPhone1422 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/22.jpg';
import iPhone1423 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/23.jpg';
import iPhone1424 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/24.jpg';
import iPhone1425 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/25.jpg';
import iPhone1431 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/31.jpg';
import iPhone1432 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/32.jpg';
import iPhone1433 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/33.jpg';
import iPhone1434 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/34.jpg';
import iPhone1435 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/35.jpg';
import iPhone1436 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/36.jpg';
import iPhone1441 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/41.jpg';
import iPhone1442 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/42.jpg';
import iPhone1443 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/43.jpg';
import iPhone1444 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/44.jpg';
import iPhone1445 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/45.jpg';
import iPhone1446 from '../../../assets/Img/ProductDetailsImg/Mobiles/Iphone14/46.jpg';

//realme nazro 60X 5G
import realmenarzo60X5G11 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/11.jpg';
import realmenarzo60X5G12 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/12.jpg';
import realmenarzo60X5G13 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/13.jpg';
import realmenarzo60X5G14 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/14.jpg';
import realmenarzo60X5G15 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/15.jpg';
import realmenarzo60X5G16 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/16.jpg';
import realmenarzo60X5G21 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/21.jpg';
import realmenarzo60X5G22 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/22.jpg';
import realmenarzo60X5G23 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/23.jpg';
import realmenarzo60X5G24 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/24.jpg';
import realmenarzo60X5G25 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/25.jpg';
import realmenarzo60X5G26 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/26.jpg';
import realmenarzo60X5GSlider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/11.jpg';
import realmenarzo60X5GSlider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/21.jpg';
import realmenarzo60X5GSlider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/22.jpg';
import realmenarzo60X5GSlider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/31.jpg';
import realmenarzo60X5GSlider32 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/32.jpg';
import realmenarzo60X5GSlider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/41.jpg';
import realmenarzo60X5GSlider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/42.jpg';
import realmenarzo60X5GSlider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/51.jpg';
import realmenarzo60X5GSlider52 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60X5G/detailsImg/52.jpg';

//realme nazro 60
import realmenarzo6011 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/11.jpg';
import realmenarzo6012 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/12.jpg';
import realmenarzo6013 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/13.jpg';
import realmenarzo6014 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/14.jpg';
import realmenarzo6015 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/15.jpg';
import realmenarzo6016 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/16.jpg';
import realmenarzo6021 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/21.jpg';
import realmenarzo6022 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/22.jpg';
import realmenarzo6023 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/23.jpg';
import realmenarzo6024 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/24.jpg';
import realmenarzo6025 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/25.jpg';
import realmenarzo6026 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/26.jpg';
import realmenarzo60Slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/detailsImg/11.jpg';
import realmenarzo60Slider12 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/detailsImg/12.jpg';
import realmenarzo60Slider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/detailsImg/22.jpg';
import realmenarzo60Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/detailsImg/21.jpg';
import realmenarzo60Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/realmeNarzo60/detailsImg/31.jpg';

// samsung m14
import samsungM1411 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/11.jpg';
import samsungM1412 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/12.jpg';
import samsungM1413 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/13.jpg';
import samsungM1414 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/14.jpg';
import samsungM1415 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/15.jpg';
import samsungM1416 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/16.jpg';
import samsungM1421 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/21.jpg';
import samsungM1422 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/22.jpg';
import samsungM1423 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/23.jpg';
import samsungM1424 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/24.jpg';
import samsungM1425 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/25.jpg';
import samsungM1426 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/26.jpg';
import samsungM1431 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/31.jpg';
import samsungM1432 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/32.jpg';
import samsungM1433 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/33.jpg';
import samsungM1434 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/34.jpg';
import samsungM1435 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/35.jpg';
import samsungM1436 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/36.jpg';
import samsungM14slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/11.jpg';
import samsungM14Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/12.jpg';
import samsungM14Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/31.jpg';
import samsungM14Slider32 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/32.jpg';
import samsungM14Slider33 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/33.jpg';
import samsungM14Slider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/41.jpg';
import samsungM14Slider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/42.jpg';
import samsungM14Slider43 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/43.jpg';
import samsungM14Slider44 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/44.jpg';
import samsungM14Slider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/51.jpg';
import samsungM14Slider52 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/52.jpg';
import samsungM14Slider53 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/53.jpg';
import samsungM14Slider61 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/61.jpg';
import samsungM14Slider62 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM14/detailsImg/62.jpg';

// iqooZ6Lite
import iqooZ6Lite11 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ6Lite/11.jpg';
import iqooZ6Lite12 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ6Lite/12.jpg';
import iqooZ6Lite13 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ6Lite/13.jpg';
import iqooZ6Lite14 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ6Lite/14.jpg';
import iqooZ6Lite15 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ6Lite/15.jpg';
import iqooZ6Lite16 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ6Lite/16.jpg';

//redmi 12
import redmi1211 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/11.jpg';
import redmi1212 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/12.jpg';
import redmi1213 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/13.jpg';
import redmi1214 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/14.jpg';
import redmi1215 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/15.jpg';
import redmi1221 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/21.jpg';
import redmi1222 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/22.jpg';
import redmi1223 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/23.jpg';
import redmi1224 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/24.jpg';
import redmi1225 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/25.jpg';
import redmi1231 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/31.jpg';
import redmi1232 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/32.jpg';
import redmi1233 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/33.jpg';
import redmi1234 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/34.jpg';
import redmi1235 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/35.jpg';
import redmi12Silder11 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/11.jpg';
import redmi12Silder12 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/12.jpg';
import redmi12Silder13 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/13.jpg';
import redmi12Silder14 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/14.jpg';
import redmi12Silder21 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/21.jpg';
import redmi12Silder22 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/22.jpg';
import redmi12Silder23 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/23.jpg';
import redmi12Silder24 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/24.jpg';
import redmi12Silder31 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/31.jpg';
import redmi12Silder32 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/32.jpg';
import redmi12Silder41 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/41.jpg';
import redmi12Silder42 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/42.jpg';
import redmi12Silder43 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/43.jpg';
import redmi12Silder44 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/44.jpg';
import redmi12Silder51 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/51.jpg';
import redmi12Silder52 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/52.jpg';
import redmi12Silder53 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/53.jpg';
import redmi12Silder54 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/54.jpg';
import redmi12Silder55 from '../../../assets/Img/ProductDetailsImg/Mobiles/redmi12/detailsImg/55.jpg';

// onePlus Nord CE 3 Lite
import onePlusNordCE3Lite11 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/11.jpg';
import onePlusNordCE3Lite12 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/12.jpg';
import onePlusNordCE3Lite13 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/13.jpg';
import onePlusNordCE3Lite14 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/14.jpg';
import onePlusNordCE3Lite15 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/15.jpg';
import onePlusNordCE3Lite16 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/16.jpg';
import onePlusNordCE3Lite21 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/21.jpg';
import onePlusNordCE3Lite22 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/22.jpg';
import onePlusNordCE3Lite23 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/23.jpg';
import onePlusNordCE3Lite24 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/24.jpg';
import onePlusNordCE3Lite25 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/25.jpg';
import onePlusNordCE3Lite26 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/26.jpg';
import onePlusNordCE3LiteSlider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/11.jpg';
import onePlusNordCE3LiteSlider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/21.jpg';
import onePlusNordCE3LiteSlider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/31.jpg';
import onePlusNordCE3LiteSlider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/41.jpg';
import onePlusNordCE3LiteSlider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/42.jpg';
import onePlusNordCE3LiteSlider43 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/43.jpg';
import onePlusNordCE3LiteSlider44 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/44.jpg';
import onePlusNordCE3LiteSlider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/51.jpg';
import onePlusNordCE3LiteSlider61 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3Lite/detailImg/61.jpg';

// onePlus Nord CE 3
import onePlusNordCE311 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/11.jpg';
import onePlusNordCE312 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/12.jpg';
import onePlusNordCE313 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/13.jpg';
import onePlusNordCE314 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/14.jpg';
import onePlusNordCE315 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/15.jpg';
import onePlusNordCE321 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/21.jpg';
import onePlusNordCE322 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/22.jpg';
import onePlusNordCE323 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/23.jpg';
import onePlusNordCE324 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/24.jpg';
import onePlusNordCE325 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/25.jpg';
import onePlusNordCE3Slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/11.jpg';
import onePlusNordCE3Slider12 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/12.jpg';
import onePlusNordCE3Slider13 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/13.jpg';
import onePlusNordCE3Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/21.jpg';
import onePlusNordCE3Slider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/22.jpg';
import onePlusNordCE3Slider23 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/23.jpg';
import onePlusNordCE3Slider24 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/24.jpg';
import onePlusNordCE3Slider25 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/25.jpg';
import onePlusNordCE3Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/31.jpg';
import onePlusNordCE3Slider32 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/32.jpg';
import onePlusNordCE3Slider33 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/33.jpg';
import onePlusNordCE3Slider34 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/34.jpg';
import onePlusNordCE3Slider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/41.jpg';
import onePlusNordCE3Slider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/42.jpg';
import onePlusNordCE3Slider43 from '../../../assets/Img/ProductDetailsImg/Mobiles/onePlusNordCE3/detailImg/43.jpg';

//iqoo Z7 Pro 
import iqooZ7Pro11 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/11.jpg';
import iqooZ7Pro12 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/12.jpg';
import iqooZ7Pro13 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/13.jpg';
import iqooZ7Pro14 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/14.jpg';
import iqooZ7Pro21 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/21.jpg';
import iqooZ7Pro22 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/22.jpg';
import iqooZ7Pro23 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/23.jpg';
import iqooZ7Pro24 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/24.jpg';
import iqooZ7ProSlider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/11.jpg';
import iqooZ7ProSlider12 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/12.jpg';
import iqooZ7ProSlider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/21.jpg';
import iqooZ7ProSlider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/22.jpg';
import iqooZ7ProSlider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/31.jpg';
import iqooZ7ProSlider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/41.jpg';
import iqooZ7ProSlider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/42.jpg';
import iqooZ7ProSlider43 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/43.jpg';
import iqooZ7ProSlider44 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/44.jpg';
import iqooZ7ProSlider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqooZ7Pro/detailImg/51.jpg';


// samsung M34
import samsungM3411 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/11.jpg';
import samsungM3412 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/12.jpg';
import samsungM3413 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/13.jpg';
import samsungM3414 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/14.jpg';
import samsungM3415 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/15.jpg';
import samsungM3421 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/21.jpg';
import samsungM3422 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/22.jpg';
import samsungM3423 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/23.jpg';
import samsungM3424 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/24.jpg';
import samsungM3425 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/25.jpg';
import samsungM34Slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/11.jpg';
import samsungM34Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/21.jpg';
import samsungM34Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/31.jpg';
import samsungM34Slider32 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/32.jpg';
import samsungM34Slider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/41.jpg';
import samsungM34Slider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/42.jpg';
import samsungM34Slider43 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/43.jpg';
import samsungM34Slider44 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/44.jpg';
import samsungM34Slider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/51.jpg';
import samsungM34Slider52 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/52.jpg';
import samsungM34Slider53 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/53.jpg';
import samsungM34Slider54 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/54.jpg';
import samsungM34Slider55 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/55.jpg';
import samsungM34Slider61 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/61.jpg';
import samsungM34Slider62 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/62.jpg';
import samsungM34Slider63 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/63.jpg';
import samsungM34Slider64 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungM34/detailImg/64.jpg';

// oneplus 12R
import oneplus12R11 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r.webp';
import oneplus12R12 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r2.webp';
import oneplus12R13 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r3.webp';
import oneplus12R14 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r4.webp';
import oneplus12R15 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r5.webp';
import oneplus12R21 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r11.webp';
import oneplus12R22 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r12.webp';
import oneplus12R23 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r13.webp';
import oneplus12R24 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r14.webp';
import oneplus12R25 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/oneplus12r15.webp';
import oneplus12RSlider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/11.webp';
import oneplus12RSlider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/21.webp';
import oneplus12RSlider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/22.webp';
import oneplus12RSlider23 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/23.webp';
import oneplus12RSlider24 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/24.webp';
import oneplus12RSlider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/31.webp';
import oneplus12RSlider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/41.webp';
import oneplus12RSlider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/42.webp';
import oneplus12RSlider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/51.webp';
import oneplus12RSlider52 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/52.webp';
import oneplus12RSlider53 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/53.webp';
import oneplus12RSlider61 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/61.webp';
import oneplus12RSlider62 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/62.webp';
import oneplus12RSlider63 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/63.webp';
import oneplus12RSlider71 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/71.webp';
import oneplus12RSlider72 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/72.webp';
import oneplus12RSlider73 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12r/detailImg/73.webp';

// oneplus 12
import oneplus1211 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/11.webp';
import oneplus1212 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/12.webp';
import oneplus1213 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/13.webp';
import oneplus1214 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/14.webp';
import oneplus1215 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/15.webp';
import oneplus1221 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/21.jpg';
import oneplus1222 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/22.webp';
import oneplus1223 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/23.webp';
import oneplus1224 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/24.webp';
import oneplus1225 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/25.webp';
import oneplus12Slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/1.webp';
import oneplus12Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/21.webp';
import oneplus12Slider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/22.webp';
import oneplus12Slider23 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/23.webp';
import oneplus12Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/31.webp';
import oneplus12Slider32 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/32.webp';
import oneplus12Slider33 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/33.webp';
import oneplus12Slider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/41.webp';
import oneplus12Slider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/42.webp';
import oneplus12Slider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/51.webp';
import oneplus12Slider52 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/52.webp';
import oneplus12Slider53 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/53.webp';
import oneplus12Slider61 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/61.webp';
import oneplus12Slider62 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/62.webp';
import oneplus12Slider63 from '../../../assets/Img/ProductDetailsImg/Mobiles/oneplus12/detailImg/63.webp';

// samsungZ flip 5
import samsungZFlip511 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/11.jpg';
import samsungZFlip512 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/12.jpg';
import samsungZFlip513 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/13.jpg';
import samsungZFlip514 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/14.jpg';
import samsungZFlip521 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/21.jpg';
import samsungZFlip5Slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/11.jpg';
import samsungZFlip5Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/21.jpg';
import samsungZFlip5Slider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/22.jpg';
import samsungZFlip5Slider23 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/23.jpg';
import samsungZFlip5Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/31.jpg';
import samsungZFlip5Slider32 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/32.jpg';
import samsungZFlip5Slider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/41.jpg';
import samsungZFlip5Slider42 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/42.jpg';
import samsungZFlip5Slider43 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/43.jpg';
import samsungZFlip5Slider44 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/44.jpg';
import samsungZFlip5Slider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/51.jpg';
import samsungZFlip5Slider52 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/52.jpg';
import samsungZFlip5Slider53 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/53.jpg';
import samsungZFlip5Slider61 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/61.jpg';
import samsungZFlip5Slider62 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungflip5/detailImg/62.jpg';

//iqoo 12
import iqoo1211 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/11.jpg';
import iqoo1212 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/12.jpg';
import iqoo1213 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/13.jpg';
import iqoo1214 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/14.jpg';
import iqoo1215 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/15.jpg';
import iqoo1221 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/21.jpg';
import iqoo1222 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/22.jpg';
import iqoo1223 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/23.jpg';
import iqoo1224 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/24.jpg';
import iqoo1225 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/25.jpg';
import iqoo12Slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/11.jpg';
import iqoo12Slider12 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/12.jpg';
import iqoo12Slider13 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/13.jpg';
import iqoo12Slider14 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/14.jpg';
import iqoo12Slider15 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/15.jpg';
import iqoo12Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/21.jpg';
import iqoo12Slider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/22.jpg';
import iqoo12Slider23 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/23.jpg';
import iqoo12Slider24 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/24.jpg';
import iqoo12Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/31.jpg';
import iqoo12Slider32 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/32.jpg';
import iqoo12Slider33 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/33.jpg';
import iqoo12Slider34 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/34.jpg';
import iqoo12Slider35 from '../../../assets/Img/ProductDetailsImg/Mobiles/iqoo12/detailImg/35.jpg';

// samsungZ fold 5
import samsungZfold511 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/fold11.jpg';
import samsungZfold512 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/fold12.jpg';
import samsungZfold513 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/fold13.jpg';
import samsungZfold514 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/fold14.jpg';
import samsungZfold521 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/fold21.jpg';
import samsungZFold5Slider11 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/11.jpg';
import samsungZFold5Slider21 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/21.jpg';
import samsungZFold5Slider22 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/22.jpg';
import samsungZFold5Slider23 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/23.jpg';
import samsungZFold5Slider24 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/24.jpg';
import samsungZFold5Slider31 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/31.jpg';
import samsungZFold5Slider41 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/41.jpg';
import samsungZFold5Slider51 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/51.jpg';
import samsungZFold5Slider61 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/61.jpg';
import samsungZFold5Slider62 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/62.jpg';
import samsungZFold5Slider63 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/63.jpg';
import samsungZFold5Slider64 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/64.jpg';
import samsungZFold5Slider65 from '../../../assets/Img/ProductDetailsImg/Mobiles/samsungfold5/detailImg/65.jpg';

// Latops Images

// Macbook Air M1 Chip
import MacbookAirM1Chip11 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/11.jpg';
import MacbookAirM1Chip12 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/12.jpg';
import MacbookAirM1Chip13 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/13.jpg';
import MacbookAirM1Chip14 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/14.jpg';
import MacbookAirM1Chip15 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/15.jpg';
import MacbookAirM1Chip16 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/16.jpg';
import MacbookAirM1Chip21 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/21.jpg';
import MacbookAirM1Chip22 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/22.jpg';
import MacbookAirM1Chip23 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/23.jpg';
import MacbookAirM1Chip24 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/24.jpg';
import MacbookAirM1Chip25 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/25.jpg';
import MacbookAirM1Chip26 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM1Chip/26.jpg';

// Macbook Air M2 Chip
import MacbookAirM3Chip11 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/11.jpg';
import MacbookAirM3Chip12 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/12.jpg';
import MacbookAirM3Chip13 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/13.jpg';
import MacbookAirM3Chip14 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/14.jpg';
import MacbookAirM3Chip15 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/15.jpg';
import MacbookAirM3Chip16 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/16.jpg';
import MacbookAirM3Chip21 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/21.jpg';
import MacbookAirM3Chip22 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/22.jpg';
import MacbookAirM3Chip23 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/23.jpg';
import MacbookAirM3Chip24 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/24.jpg';
import MacbookAirM3Chip25 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/25.jpg';
import MacbookAirM3Chip26 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/26.jpg';
import MacbookAirM3Chip31 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/31.jpg';
import MacbookAirM3Chip32 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/32.jpg';
import MacbookAirM3Chip33 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/33.jpg';
import MacbookAirM3Chip34 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/34.jpg';
import MacbookAirM3Chip35 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/35.jpg';
import MacbookAirM3Chip36 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3Chip/36.jpg';

// Macbook Pro M3Max Chip
import MacbookProM3MaxChip11 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3MaxChip/11.jpg';
import MacbookProM3MaxChip12 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3MaxChip/12.jpg';
import MacbookProM3MaxChip13 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3MaxChip/13.jpg';
import MacbookProM3MaxChip14 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3MaxChip/14.jpg';
import MacbookProM3MaxChip15 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3MaxChip/15.jpg';
import MacbookProM3MaxChip16 from '../../../assets/Img/ProductDetailsImg/Laptop/MacBookAirM3MaxChip/16.jpg';

//Dell 15
import Dell1511 from '../../../assets/Img/ProductDetailsImg/Laptop/Dell15/11.jpg';
import Dell1512 from '../../../assets/Img/ProductDetailsImg/Laptop/Dell15/12.jpg';
import Dell1513 from '../../../assets/Img/ProductDetailsImg/Laptop/Dell15/13.jpg';
import Dell1514 from '../../../assets/Img/ProductDetailsImg/Laptop/Dell15/14.jpg';
import Dell1515 from '../../../assets/Img/ProductDetailsImg/Laptop/Dell15/15.jpg';
import Dell1516 from '../../../assets/Img/ProductDetailsImg/Laptop/Dell15/16.jpg';

//LenovoIdeaPadSlim3
import LenovoIdeaPadSlim311 from '../../../assets/Img/ProductDetailsImg/Laptop/LenovoIdeaPadSlim3/11.jpg';
import LenovoIdeaPadSlim312 from '../../../assets/Img/ProductDetailsImg/Laptop/LenovoIdeaPadSlim3/12.jpg';
import LenovoIdeaPadSlim313 from '../../../assets/Img/ProductDetailsImg/Laptop/LenovoIdeaPadSlim3/13.jpg';
import LenovoIdeaPadSlim314 from '../../../assets/Img/ProductDetailsImg/Laptop/LenovoIdeaPadSlim3/14.jpg';
import LenovoIdeaPadSlim315 from '../../../assets/Img/ProductDetailsImg/Laptop/LenovoIdeaPadSlim3/15.jpg';
import LenovoIdeaPadSlim316 from '../../../assets/Img/ProductDetailsImg/Laptop/LenovoIdeaPadSlim3/16.jpg';

//AsusVivobook14
import AsusVivobook1411 from '../../../assets/Img/ProductDetailsImg/Laptop/AsusVivobook14/11.jpg';
import AsusVivobook1412 from '../../../assets/Img/ProductDetailsImg/Laptop/AsusVivobook14/12.jpg';
import AsusVivobook1413 from '../../../assets/Img/ProductDetailsImg/Laptop/AsusVivobook14/13.jpg';
import AsusVivobook1414 from '../../../assets/Img/ProductDetailsImg/Laptop/AsusVivobook14/14.jpg';
import AsusVivobook1415 from '../../../assets/Img/ProductDetailsImg/Laptop/AsusVivobook14/15.jpg';
import AsusVivobook1416 from '../../../assets/Img/ProductDetailsImg/Laptop/AsusVivobook14/16.jpg';
import AsusVivobook1417 from '../../../assets/Img/ProductDetailsImg/Laptop/AsusVivobook14/17.jpg';

//AcerAspireLite12ThGen
import AcerAspireLite12ThGen11 from '../../../assets/Img/ProductDetailsImg/Laptop/AcerAspireLite12ThGen/11.jpg';
import AcerAspireLite12ThGen12 from '../../../assets/Img/ProductDetailsImg/Laptop/AcerAspireLite12ThGen/12.jpg';
import AcerAspireLite12ThGen13 from '../../../assets/Img/ProductDetailsImg/Laptop/AcerAspireLite12ThGen/13.jpg';
import AcerAspireLite12ThGen14 from '../../../assets/Img/ProductDetailsImg/Laptop/AcerAspireLite12ThGen/14.jpg';
import AcerAspireLite12ThGen15 from '../../../assets/Img/ProductDetailsImg/Laptop/AcerAspireLite12ThGen/15.jpg';
import AcerAspireLite12ThGen16 from '../../../assets/Img/ProductDetailsImg/Laptop/AcerAspireLite12ThGen/16.jpg';
import AcerAspireLite12ThGen17 from '../../../assets/Img/ProductDetailsImg/Laptop/AcerAspireLite12ThGen/17.jpg';

// Tablets 

// Samsung Tab A9 Plus
import SamsungTabA9Plus11 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/11.jpg';
import SamsungTabA9Plus12 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/12.jpg';
import SamsungTabA9Plus13 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/13.jpg';
import SamsungTabA9Plus14 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/14.jpg';
import SamsungTabA9Plus15 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/15.jpg';
import SamsungTabA9Plus16 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/16.jpg';
import SamsungTabA9Plus21 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/21.jpg';
import SamsungTabA9Plus22 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/22.jpg';
import SamsungTabA9Plus23 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/23.jpg';
import SamsungTabA9Plus24 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/24.jpg';
import SamsungTabA9Plus25 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/25.jpg';
import SamsungTabA9Plus26 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/26.jpg';
import SamsungTabA9PlusSlider11 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/11.jpg';
import SamsungTabA9PlusSlider21 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/21.jpg';
import SamsungTabA9PlusSlider22 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/22.jpg';
import SamsungTabA9PlusSlider31 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/31.jpg';
import SamsungTabA9PlusSlider32 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/32.jpg';
import SamsungTabA9PlusSlider41 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/41.jpg';
import SamsungTabA9PlusSlider51 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/51.jpg';
import SamsungTabA9PlusSlider61 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/61.jpg';
import SamsungTabA9PlusSlider71 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/71.jpg';
import SamsungTabA9PlusSlider72 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/72.jpg';
import SamsungTabA9PlusSlider73 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/73.jpg';
import SamsungTabA9PlusSlider74 from '../../../assets/Img/ProductDetailsImg/Tablets/samsungTabA9Plus/detailImg/74.jpg';

// OnePlus Pad
import onePlusPad11 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/11.jpg';
import onePlusPad12 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/12.jpeg';
import onePlusPad13 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/13.jpeg';
import onePlusPad14 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/14.jpg';
import onePlusPad15 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/15.jpg';
import onePlusPad16 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/16.jpg';
import onePlusPadSlider11 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/11.jpg';
import onePlusPadSlider21 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/21.jpg';
import onePlusPadSlider31 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/31.jpg';
import onePlusPadSlider32 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/32.jpg';
import onePlusPadSlider33 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/33.jpg';
import onePlusPadSlider41 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/41.jpg';
import onePlusPadSlider42 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/42.jpg';
import onePlusPadSlider43 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/43.jpg';
import onePlusPadSlider51 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/51.jpg';
import onePlusPadSlider52 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/52.jpg';
import onePlusPadSlider53 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/53.jpg';
import onePlusPadSlider54 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/54.jpg';
import onePlusPadSlider61 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/61.jpg';
import onePlusPadSlider62 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/62.jpg';
import onePlusPadSlider63 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/63.jpg';
import onePlusPadSlider64 from '../../../assets/Img/ProductDetailsImg/Tablets/onePlusPad/detailImg/64.jpg';

// Xiaomi Pad 6
import xiaomiPad611 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/11.jpg';
import xiaomiPad612 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/12.jpg';
import xiaomiPad613 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/13.jpg';
import xiaomiPad614 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/14.jpg';
import xiaomiPad615 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/15.jpg';
import xiaomiPad616 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/16.jpg';
import xiaomiPad621 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/21.jpg';
import xiaomiPad622 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/22.jpg';
import xiaomiPad623 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/23.jpg';
import xiaomiPad624 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/24.jpg';
import xiaomiPad625 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/25.jpg';
import xiaomiPad626 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/26.jpg';
import xiaomiPad6Slider11 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/11.jpg';
import xiaomiPad6Slider21 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/21.jpg';
import xiaomiPad6Slider22 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/22.jpg';
import xiaomiPad6Slider23 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/23.jpg';
import xiaomiPad6Slider31 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/31.jpg';
import xiaomiPad6Slider32 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/32.jpg';
import xiaomiPad6Slider41 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/41.jpg';
import xiaomiPad6Slider42 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/42.jpg';
import xiaomiPad6Slider43 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/43.jpg';
import xiaomiPad6Slider44 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/44.jpg';
import xiaomiPad6Slider45 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/45.jpg';
import xiaomiPad6Slider46 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/46.jpg';
import xiaomiPad6Slider51 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/51.jpg';
import xiaomiPad6Slider52 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/52.jpg';
import xiaomiPad6Slider61 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/61.jpg';
import xiaomiPad6Slider71 from '../../../assets/Img/ProductDetailsImg/Tablets/XiaomiPad6/detailsImg/71.jpg';

// iPad 10Th Gen with A14 Chip
import iPad10ThGen11 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/11.jpg';
import iPad10ThGen12 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/12.jpg';
import iPad10ThGen13 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/13.jpg';
import iPad10ThGen14 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/14.jpg';
import iPad10ThGen15 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/15.jpg';
import iPad10ThGen16 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/16.jpg';
import iPad10ThGen21 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/21.jpg';
import iPad10ThGen22 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/22.jpg';
import iPad10ThGen23 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/23.jpg';
import iPad10ThGen24 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/24.jpg';
import iPad10ThGen25 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/25.jpg';
import iPad10ThGen26 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/26.jpg';
import iPad10ThGen31 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/31.jpg';
import iPad10ThGen32 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/32.jpg';
import iPad10ThGen33 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/33.jpg';
import iPad10ThGen34 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/34.jpg';
import iPad10ThGen35 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/35.jpg';
import iPad10ThGen36 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad10Gen/36.jpg';

//ipad 11 Pro 4th Gen
import iPad11Pro4ThGen11 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/11.jpg';
import iPad11Pro4ThGen12 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/12.jpg';
import iPad11Pro4ThGen13 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/13.jpg';
import iPad11Pro4ThGen14 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/14.jpg';
import iPad11Pro4ThGen15 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/15.jpg';
import iPad11Pro4ThGen16 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/16.jpg';
import iPad11Pro4ThGen17 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/17.jpg';
import iPad11Pro4ThGen21 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/21.jpg';
import iPad11Pro4ThGen22 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/22.jpg';
import iPad11Pro4ThGen23 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/23.jpg';
import iPad11Pro4ThGen24 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/24.jpg';
import iPad11Pro4ThGen25 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/25.jpg';
import iPad11Pro4ThGen26 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/26.jpg';
import iPad11Pro4ThGen27 from '../../../assets/Img/ProductDetailsImg/Tablets/iPad11Pro4Gen/27.jpg';

// Audio Product

// OnePlus Buds 3
import OnePlusBuds311 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/11.jpg';
import OnePlusBuds312 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/12.jpg';
import OnePlusBuds313 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/13.jpg';
import OnePlusBuds314 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/14.jpg';
import OnePlusBuds315 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/15.jpg';
import OnePlusBuds316 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/16.jpg';
import OnePlusBudsSlider11 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/11.jpg';
import OnePlusBudsSlider21 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/21.jpg';
import OnePlusBudsSlider22 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/22.jpg';
import OnePlusBudsSlider23 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/23.jpg';
import OnePlusBudsSlider31 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/31.jpg';
import OnePlusBudsSlider32 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/32.jpg';
import OnePlusBudsSlider33 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/33.jpg';
import OnePlusBudsSlider41 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/41.jpg';
import OnePlusBudsSlider42 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/42.jpg';
import OnePlusBudsSlider43 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/43.jpg';
import OnePlusBudsSlider51 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/51.jpg';
import OnePlusBudsSlider52 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/52.jpg';
import OnePlusBudsSlider53 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/53.jpg';
import OnePlusBudsSlider54 from '../../../assets/Img/ProductDetailsImg/TWS/OnePlusBuds3/detailsImg/54.jpg';

// JBL Wave Flex
import JBLWaveFlex11 from '../../../assets/Img/ProductDetailsImg/TWS/JBLWaveFlex/11.jpg';
import JBLWaveFlex12 from '../../../assets/Img/ProductDetailsImg/TWS/JBLWaveFlex/12.jpg';
import JBLWaveFlex13 from '../../../assets/Img/ProductDetailsImg/TWS/JBLWaveFlex/13.jpg';
import JBLWaveFlex14 from '../../../assets/Img/ProductDetailsImg/TWS/JBLWaveFlex/14.jpg';
import JBLWaveFlex15 from '../../../assets/Img/ProductDetailsImg/TWS/JBLWaveFlex/15.jpg';
import JBLWaveFlex16 from '../../../assets/Img/ProductDetailsImg/TWS/JBLWaveFlex/16.jpg';

// realmeBudsT300
import realmeBudsT30011 from '../../../assets/Img/ProductDetailsImg/TWS/realmeBudsT300/11.jpg';
import realmeBudsT30012 from '../../../assets/Img/ProductDetailsImg/TWS/realmeBudsT300/12.jpg';
import realmeBudsT30013 from '../../../assets/Img/ProductDetailsImg/TWS/realmeBudsT300/13.jpg';
import realmeBudsT30014 from '../../../assets/Img/ProductDetailsImg/TWS/realmeBudsT300/14.jpg';
import realmeBudsT30015 from '../../../assets/Img/ProductDetailsImg/TWS/realmeBudsT300/15.jpg';
import realmeBudsT30016 from '../../../assets/Img/ProductDetailsImg/TWS/realmeBudsT300/16.jpg';

// boatAirdopes141
import boatAirdopes14111 from '../../../assets/Img/ProductDetailsImg/TWS/boatAirdopes141/11.jpg';
import boatAirdopes14112 from '../../../assets/Img/ProductDetailsImg/TWS/boatAirdopes141/12.jpg';
import boatAirdopes14113 from '../../../assets/Img/ProductDetailsImg/TWS/boatAirdopes141/13.jpg';
import boatAirdopes14114 from '../../../assets/Img/ProductDetailsImg/TWS/boatAirdopes141/14.jpg';
import boatAirdopes14115 from '../../../assets/Img/ProductDetailsImg/TWS/boatAirdopes141/15.jpg';
import boatAirdopes14116 from '../../../assets/Img/ProductDetailsImg/TWS/boatAirdopes141/16.jpg';

// zebronicsThunder
import zebronicsThunder11 from '../../../assets/Img/ProductDetailsImg/TWS/zebronicsThunder/11.jpg';
import zebronicsThunder12 from '../../../assets/Img/ProductDetailsImg/TWS/zebronicsThunder/12.jpg';
import zebronicsThunder13 from '../../../assets/Img/ProductDetailsImg/TWS/zebronicsThunder/13.jpg';
import zebronicsThunder14 from '../../../assets/Img/ProductDetailsImg/TWS/zebronicsThunder/14.jpg';
import zebronicsThunder15 from '../../../assets/Img/ProductDetailsImg/TWS/zebronicsThunder/15.jpg';
import zebronicsThunder16 from '../../../assets/Img/ProductDetailsImg/TWS/zebronicsThunder/16.jpg';

// boat Rockerz 550
import boatRockerz55011 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/11.jpg';
import boatRockerz55012 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/12.jpg';
import boatRockerz55013 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/13.jpg';
import boatRockerz55014 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/14.jpg';
import boatRockerz55015 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/15.jpg';
import boAtRockerz550Slider11 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/detailsImg/11.jpg';
import boAtRockerz550Slider12 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/detailsImg/12.jpg';
import boAtRockerz550Slider13 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/detailsImg/13.jpg';
import boAtRockerz550Slider21 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/detailsImg/21.jpg';
import boAtRockerz550Slider31 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/detailsImg/31.jpg';
import boAtRockerz550Slider32 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/detailsImg/32.jpg';
import boAtRockerz550Slider33 from '../../../assets/Img/ProductDetailsImg/TWS/boatRockerz550/detailsImg/33.jpg';

// JBLTune510BT
import JBLTune510BT11 from '../../../assets/Img/ProductDetailsImg/TWS/JBLTune510BT/11.jpg';
import JBLTune510BT12 from '../../../assets/Img/ProductDetailsImg/TWS/JBLTune510BT/12.jpg';
import JBLTune510BT13 from '../../../assets/Img/ProductDetailsImg/TWS/JBLTune510BT/13.jpg';
import JBLTune510BT14 from '../../../assets/Img/ProductDetailsImg/TWS/JBLTune510BT/14.jpg';
import JBLTune510BT15 from '../../../assets/Img/ProductDetailsImg/TWS/JBLTune510BT/15.jpg';
import JBLTune510BT16 from '../../../assets/Img/ProductDetailsImg/TWS/JBLTune510BT/16.jpg';


import Slider from '../../../components/DetailPages/Slider/Slider';


const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const { productNameId } = useParams();
    const samsungS24Ultra = {
        name: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage)',
        price: '₹1,39,999',
        mrp: '₹1,49,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            SamsungS24Ultra1,
            SamsungS24Ultra2,
            SamsungS24Ultra3,
            SamsungS24Ultra4,
            SamsungS24Ultra5,
        ],
        imgData2: [
            SamsungS24Ultra11,
            SamsungS24Ultra12,
            SamsungS24Ultra13,
            SamsungS24Ultra14,
            SamsungS24Ultra15,
        ],
        productData: [
            { label: 'Brand', value: 'Samsung' },
            { label: 'Model Name', value: 'Galaxy S24 Ultra' },
            { label: 'Display', value: 'Dynamic AMOLED 2X, 6.8-inch, 3120 x 1440 (Quad HD+)' },
            { label: 'Processor', value: 'Snapdragon 8 Gen 3' },
            { label: 'Operating System', value: 'Android 14' },
            { label: 'Cellular Technology', value: '5G (model dependent)' },
            { label: 'Network Service Provider', value: 'Unlocked (varies by retailer)' },
            { label: 'Battery Capacity', value: '5000mAh' }
        ],
        technicalData: [
            { label: 'OS', value: 'Android 14.0' },
            { label: 'Product Dimensions', value: '0.9 x 7.9 x 16.2 cm; 232 Grams' },
            { label: 'Batteries', value: '1 Lithium Ion batteries required. (included)' },
            { label: 'Item model number', value: 'S928BZ' },
            { label: 'Wireless communication technologies', value: 'Cellular' },
            { label: 'Connectivity technologies', value: 'Bluetooth, Wi-Fi, USB, NFC' },
            { label: 'GPS', value: 'True' },
            { label: 'Special features', value: 'Fast Charging Support, Dual SIM, Always On Display, Built-In GPS, Mobile Hotspot Capability' },
            { label: 'Other display features', value: 'Wireless' },
            { label: 'Device interface - primary', value: 'Touchscreen with Stylus Support' },
            { label: 'Resolution', value: 'QHD+ 3120 x 1440' },
            { label: 'Other camera features', value: 'Rear, Front' },
            { label: 'Audio Jack', value: 'USB Type C' },
            { label: 'Form factor', value: 'Bar' },
            { label: 'Colour', value: 'Titanium Black' },
            { label: 'Battery Power Rating', value: '5000' },
            { label: 'Whats in the box', value: 'User Manual, SIM Ejector Pin, Stylus Pen, Smartphone, Data Cable (Type C-to-C)' },
            { label: 'Manufacturer', value: 'Samsung India Electronics Pvt.' },
            { label: 'Country of Origin', value: 'India' },
            { label: 'Item Weight', value: '232 g' }
        ],
        sizeOptions: [
            '12GB + 256GB',
            '12GB + 512GB',
            '12GB + 1TB',
        ],
        colorOptions: [
            SamsungS24Ultra1,
            SamsungS24Ultra11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
        ],
        sliderImgSet: [
            { img: [SamsungS24UltraDetails11] },
            { img: [SamsungS24UltraDetails21, SamsungS24UltraDetails22, SamsungS24UltraDetails23] },
            { img: [SamsungS24UltraDetails31, SamsungS24UltraDetails32, SamsungS24UltraDetails33, SamsungS24UltraDetails34] },
            { img: [SamsungS24UltraDetails41, SamsungS24UltraDetails42, SamsungS24UltraDetails43, SamsungS24UltraDetails44] },
            { img: [SamsungS24UltraDetails51, SamsungS24UltraDetails52, SamsungS24UltraDetails53, SamsungS24UltraDetails54] },
            { img: [SamsungS24UltraDetails61, SamsungS24UltraDetails62, SamsungS24UltraDetails63] }
        ],
        heading: 'From the manufacturer',
    };
    const iPhone15 = {
        name: 'Apple iPhone 15 (128 GB) - Black',
        price: '₹73,999',
        mrp: '₹79,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPhone1511,
            iPhone1512,
            iPhone1513,
            iPhone1514,
            iPhone1515,
            iPhone1516,
        ],
        imgData2: [
            iPhone1521,
            iPhone1522,
            iPhone1523,
            iPhone1524,
            iPhone1525,
            iPhone1526,
        ],
        imgData3: [
            iPhone1531,
            iPhone1532,
            iPhone1533,
            iPhone1534,
            iPhone1535,
            iPhone1536,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPhone 15" },
            { "label": "Display", "value": "6.1-inch Super Retina XDR OLED" },
            { "label": "Processor", "value": "Apple A16 Bionic chip" },
            { "label": "Operating System", "value": "iOS 17" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Up to 20 hours of video playback (typical)" }
        ],
        technicalData: [
            { "label": "OS", "value": "iOS 17 (expected)" },
            { "label": "Product Dimensions", "value": "Height: 146.7 mm (5.78 inches), Width: 71.5 mm (2.81 inches), Depth: 7.81 mm (0.31 inches)" },
            { "label": "Batteries", "value": "Non-removable, rechargeable lithium-ion battery" },
            { "label": "Wireless communication technologies", "value": "Cellular, Wi-Fi, Bluetooth 5.3" },
            { "label": "GPS", "value": "Yes" },
            { "label": "Special features", "value": "Face ID, Crash Detection, MagSafe charging" },
            { "label": "Other display features", "value": "HDR, True Tone, Haptic Touch" },
            { "label": "Main Camera", "value": "48-megapixel wide, 12-megapixel ultrawide" },
            { "label": "Front Camera", "value": "12-megapixel TrueDepth" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Form factor", "value": "Bar" },
            { "label": "Colour", "value": "Multiple colors available (subject to change)" },
            { "label": "Whats in the box", "value": "iPhone with iOS, USB-C to Lightning Cable, Documentation" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPhone1511,
            iPhone1521,
            iPhone1531,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ],
        heading: '',

    };
    const iPhone15Pro = {
        name: 'Apple iPhone 15 Pro (128 GB) - Natural Titanium',
        price: '₹1,25,999',
        mrp: '₹1,30,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPhone15Pro11,
            iPhone15Pro12,
            iPhone15Pro13,
            iPhone15Pro14,
            iPhone15Pro15,
            iPhone15Pro16,
        ],
        imgData2: [
            iPhone15Pro21,
            iPhone15Pro22,
            iPhone15Pro23,
            iPhone15Pro24,
            iPhone15Pro25,
            iPhone15Pro26,
        ],
        imgData3: [
            iPhone15Pro31,
            iPhone15Pro32,
            iPhone15Pro33,
            iPhone15Pro34,
            iPhone15Pro35,
            iPhone15Pro36,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPhone 15 Pro" },
            { "label": "Display", "value": "6.1-inch or 6.7-inch Super Retina XDR OLED" },
            { "label": "Processor", "value": "Apple A17 Bionic chip" },
            { "label": "Operating System", "value": "iOS 17" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Up to xx hours of video playback (typical)" }
        ],
        technicalData: [
            { "label": "OS", "value": "iOS 17" },
            { "label": "Product Dimensions", "value": "Varying depending on model (check Apple website for details)" },
            { "label": "Batteries", "value": "Non-removable, rechargeable lithium-ion battery" },
            { "label": "Wireless communication technologies", "value": "Cellular, Wi-Fi, Bluetooth 5.3" },
            { "label": "GPS", "value": "Yes" },
            { "label": "Special features", "value": "Face ID, Crash Detection, MagSafe charging, ProRes video recording" },
            { "label": "Other display features", "value": "HDR, True Tone, Haptic Touch, Always-On display (possible)" },
            { "label": "Main Camera", "value": "48-megapixel wide, 12-megapixel ultrawide, new telephoto lens (details not confirmed yet)" },
            { "label": "Front Camera", "value": "12-megapixel TrueDepth" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Form factor", "value": "Bar" },
            { "label": "Colour", "value": "Multiple colors available (subject to change)" },
            { "label": "Whats in the box", "value": "iPhone with iOS, USB-C to Lightning Cable, Documentation" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPhone15Pro11,
            iPhone15Pro21,
            iPhone15Pro31,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ],
        heading: '',
    };
    const iPhone15ProMax = {
        name: 'Apple iPhone 15 Pro Max (1 TB) - Blue Titanium',
        price: '₹1,49,999',
        mrp: '₹1,59,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPhone15ProMax11,
            iPhone15ProMax12,
            iPhone15ProMax13,
            iPhone15ProMax14,
            iPhone15ProMax15,
            iPhone15ProMax16,
        ],
        imgData2: [
            iPhone15ProMax21,
            iPhone15ProMax22,
            iPhone15ProMax23,
            iPhone15ProMax24,
            iPhone15ProMax25,
            iPhone15ProMax26,
        ],
        imgData3: [
            iPhone15ProMax31,
            iPhone15ProMax32,
            iPhone15ProMax33,
            iPhone15ProMax34,
            iPhone15ProMax35,
            iPhone15ProMax36,
        ],
        imgData4: [
            iPhone15ProMax41,
            iPhone15ProMax42,
            iPhone15ProMax43,
            iPhone15ProMax44,
            iPhone15ProMax45,
            iPhone15ProMax46,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPhone 15 Pro Max" },
            { "label": "Display", "value": "6.7-inch Super Retina XDR OLED" },
            { "label": "Processor", "value": "Apple A17 Bionic chip" },
            { "label": "Operating System", "value": "iOS 17" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Up to xx hours of video playback (typical)" }
        ],
        technicalData: [
            { "label": "OS", "value": "iOS 17" },
            { "label": "Product Dimensions", "value": "Varying depending on model (check Apple website for details)" },
            { "label": "Batteries", "value": "Non-removable, rechargeable lithium-ion battery" },
            { "label": "Wireless communication technologies", "value": "Cellular, Wi-Fi, Bluetooth 5.3" },
            { "label": "GPS", "value": "Yes" },
            { "label": "Special features", "value": "Face ID, Crash Detection, MagSafe charging, ProRes video recording" },
            { "label": "Other display features", "value": "HDR, True Tone, Haptic Touch, Always-On display (possible)" },
            { "label": "Main Camera", "value": "48-megapixel wide, 12-megapixel ultrawide, new telephoto lens with improved zoom (details not confirmed yet)" },
            { "label": "Front Camera", "value": "12-megapixel TrueDepth" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Form factor", "value": "Bar" },
            { "label": "Colour", "value": "Multiple colors available (subject to change)" },
            { "label": "Whats in the box", "value": "iPhone with iOS, USB-C to Lightning Cable, Documentation" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPhone15ProMax11,
            iPhone15ProMax21,
            iPhone15ProMax31,
            iPhone15ProMax41,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
            () => {
                setImgShow(productDetails.imgData4);
                setMainImg(firstImgData4);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const iPadAir5ThGen = {
        name: 'Apple iPad Air (5th Generation): with M1 chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue',
        price: '₹54,999',
        mrp: '₹59,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPadAir5ThGen11,
            iPadAir5ThGen12,
            iPadAir5ThGen13,
            iPadAir5ThGen14,
            iPadAir5ThGen15,
            iPadAir5ThGen16,
        ],
        imgData2: [
            iPadAir5ThGen21,
            iPadAir5ThGen22,
            iPadAir5ThGen23,
            iPadAir5ThGen24,
            iPadAir5ThGen25,
            iPadAir5ThGen26,
        ],
        imgData3: [
            iPadAir5ThGen31,
            iPadAir5ThGen32,
            iPadAir5ThGen33,
            iPadAir5ThGen34,
            iPadAir5ThGen35,
            iPadAir5ThGen36,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPad Air (5th Generation)" },
            { "label": "Chip", "value": "Apple M1 chip" },
            { "label": "Display", "value": "10.9-inch Liquid Retina display" },
            { "label": "Operating System", "value": "iPadOS 17 (expected)" },
            { "label": "Cellular Technology", "value": "Wi-Fi or Wi-Fi + Cellular (model dependent)" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Life", "value": "Up to all-day battery life (typical)" }
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in various capacities (check Apple website for details)" },
            { "label": "Front Camera", "value": "12MP Ultra Wide" },
            { "label": "Rear Camera", "value": "12MP Wide" },
            { "label": "Apple Pencil Support", "value": "Yes (2nd generation)" },
            { "label": "Magic Keyboard Support", "value": "Yes" },
            { "label": "Audio", "value": "Stereo speakers" },
            { "label": "Connectivity", "value": "USB-C connector" },
            { "label": "Fingerprint Sensor", "value": "Touch ID integrated in top button" },
            { "label": "Material", "value": "Aluminum enclosure" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPadAir5ThGen11,
            iPadAir5ThGen21,
            iPadAir5ThGen31,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const AppleAirPodsPro2Gen = {
        name: 'Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​',
        price: '₹12,999',
        mrp: '₹15,999',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color:',
        imgData: [
            AppleAirPodes2Gen11,
            AppleAirPodes2Gen12,
            AppleAirPodes2Gen13,
            AppleAirPodes2Gen14,
            AppleAirPodes2Gen15,
            AppleAirPodes2Gen16,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "AirPods Pro (2nd Generation) with MagSafe Charging Case (USB-C)" },
            { "label": "Active Noise Cancellation", "value": "Yes, with transparency mode" },
            { "label": "Spatial Audio", "value": "Personalized spatial audio with dynamic head tracking" },
            { "label": "Fit", "value": "Customizable fit with included silicone ear tips" },
            { "label": "Sweat and Water Resistant", "value": "Yes (both AirPods and charging case)" },
            { "label": "Battery Life", "value": "Up to 5 hours of listening time (up to 4.5 hours with Spatial Audio), up to 24 hours with charging case" },
        ],
        technicalData: [
            { "label": "Charging Case", "value": "MagSafe Charging Case (USB-C) for wireless charging" },
            { "label": "H2 Chip", "value": "Apple-designed H2 chip for improved sound quality and noise cancellation" },
            { "label": "Audio Sharing", "value": "Yes, share audio with another pair of AirPods" },
            { "label": "Connectivity", "value": "Bluetooth 5.3" },
            { "label": "Voice Control", "value": "Hey Siri" },
        ],
        sizeOptions: [],
        colorOptions: [
            AppleAirPodes2Gen11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const AppleCharger = {
        name: 'Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)​',
        price: '₹1,699',
        mrp: '₹1,799',
        tax: 'Inclusive of all taxes',
        size: '',
        color: '',
        imgData: [
            AppleCharger11,
            AppleCharger12,
            AppleCharger13,
            AppleCharger14,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "20W USB-C Power Adapter" },
            { "label": "Power Output", "value": "20W" },
            { "label": "Output Port", "value": "USB-C" },
            { "label": "Compatible Devices", "value": "iPhone 8 or later, iPad Pro, iPad Air, AirPods (with optional Lightning case)" },
        ],
        technicalData: [
            { "label": "Input Voltage", "value": "100-240V AC" },
            { "label": "Cable", "value": "Charging cable sold separately" },
            { "label": "Dimensions", "value": "Check Apple website for details" },
            { "label": "Weight", "value": "Check Apple website for details" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [
                    AppleCharger11,
                    AppleCharger12,
                    AppleCharger13,
                    AppleCharger14,
                ]
            },
        ]
    };
    const iPhone14 = {
        name: 'Apple iPhone 14 (128 GB) - Blue',
        price: '₹59,999',
        mrp: '₹62,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPhone1411,
            iPhone1412,
            iPhone1413,
            iPhone1414,
            iPhone1415,
        ],
        imgData2: [
            iPhone1421,
            iPhone1422,
            iPhone1423,
            iPhone1424,
            iPhone1425,
        ],
        imgData3: [
            iPhone1431,
            iPhone1432,
            iPhone1433,
            iPhone1434,
            iPhone1435,
            iPhone1436,
        ],
        imgData4: [
            iPhone1441,
            iPhone1442,
            iPhone1443,
            iPhone1444,
            iPhone1445,
            iPhone1446,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPhone 14" },
            { "label": "Display", "value": "6.1-inch or 6.7-inch Super Retina XDR OLED (depending on model)" },
            { "label": "Processor", "value": "Apple A15 Bionic chip" },
            { "label": "Operating System", "value": "iOS 16 (expected)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Up to xx hours of video playback (typical)" }
        ],
        technicalData: [
            { "label": "OS", "value": "iOS 16 (expected)" },
            { "label": "Product Dimensions", "value": "Varying depending on model (check Apple website for details)" },
            { "label": "Batteries", "value": "Non-removable, rechargeable lithium-ion battery" },
            { "label": "Wireless communication technologies", "value": "Cellular, Wi-Fi, Bluetooth 5.3" },
            { "label": "GPS", "value": "Yes" },
            { "label": "Special features", "value": "Face ID, Emergency SOS, Crash Detection" },
            { "label": "Other display features", "value": "HDR, True Tone, Haptic Touch" },
            { "label": "Main Camera", "value": "Dual-camera system: 12MP wide and ultrawide" },
            { "label": "Front Camera", "value": "12MP TrueDepth" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Form factor", "value": "Bar" },
            { "label": "Colour", "value": "Multiple colors available (subject to change)" },
            { "label": "Whats in the box", "value": "iPhone with iOS, USB-C to Lightning Cable, Documentation" }
        ],

        sizeOptions: [
            '128GB',
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            iPhone1411,
            iPhone1421,
            iPhone1431,
            iPhone1441,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
            () => {
                setImgShow(productDetails.imgData4);
                setMainImg(firstImgData4);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const realmenarzo60X5G = {
        name: 'realme narzo 60X 5G (Nebula Purple 4GB, 128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge',
        price: '₹14,999',
        mrp: '₹12,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            realmenarzo60X5G11,
            realmenarzo60X5G12,
            realmenarzo60X5G13,
            realmenarzo60X5G14,
            realmenarzo60X5G15,
            realmenarzo60X5G16,
        ],
        imgData2: [
            realmenarzo60X5G21,
            realmenarzo60X5G22,
            realmenarzo60X5G23,
            realmenarzo60X5G24,
            realmenarzo60X5G25,
            realmenarzo60X5G26,
        ],
        productData: [
            { "label": "Brand", "value": "Realme" },
            { "label": "Model Name", "value": "Narzo 60X 5G" },
            { "label": "Display", "value": "6.72-inch Dynamic Ultra Smooth Display (up to 120Hz)" },
            { "label": "Processor", "value": "MediaTek Dimensity 6100+ 5G Chipset (6nm process)" },
            { "label": "Operating System", "value": "realme UI 4.0 (based on Android 13)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "5000mAh (typical)" }
        ],
        technicalData: [
            { "label": "RAM", "value": "4GB or 6GB LPDDR4X" },
            { "label": "Storage", "value": "128GB" },
            { "label": "Expandable Storage", "value": "Up to 2TB microSD card (sold separately)" },
            { "label": "Rear Camera", "value": "50MP AI Primary Camera" },
            { "label": "Front Camera", "value": " unspecified" }, { "label": "Charging", "value": "33W SUPERVOOC Charge" },
            { "label": "Dimensions", "value": "165.7mm x 76.0mm x 7.89mm" },
            { "label": "Weight", "value": " unspecified" }, { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor (expected)" }, { "label": "GPS", "value": "Yes (GPS/AGPS, Beidou, GLONASS, Galileo)" },
            { "label": "Audio Jack", "value": "No" },
            { "label": "Operating System Updates", "value": "Uncertain (depends on Realme update policy)" },
            { "label": "Water Resistance", "value": "Not water resistant (refer to official website for confirmation)" }],

        sizeOptions: [
            '6GB + 128GB',
            '8GB + 128GB',
        ],
        colorOptions: [
            realmenarzo60X5G11,
            realmenarzo60X5G21,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [
                    realmenarzo60X5GSlider11
                ]
            },
            {
                img: [realmenarzo60X5GSlider21, realmenarzo60X5GSlider22]
            },
            {
                img: [realmenarzo60X5GSlider31, realmenarzo60X5GSlider32]
            },
            {
                img: [realmenarzo60X5GSlider41, realmenarzo60X5GSlider42]
            },
            {
                img: [realmenarzo60X5GSlider51, realmenarzo60X5GSlider52]
            }

        ],
        heading: 'From the manufacturer',

    };
    const realmenarzo60 = {
        name: 'realme narzo 60 5G (Cosmic Black,8GB+128GB) | 90Hz Super AMOLED Display | Ultra Sharp 64 MP Camera | with 33W SUPERVOOC Charger',
        price: '₹14,999',
        mrp: '₹19,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            realmenarzo6011,
            realmenarzo6012,
            realmenarzo6013,
            realmenarzo6014,
            realmenarzo6015,
            realmenarzo6016,
        ],
        imgData2: [
            realmenarzo6021,
            realmenarzo6022,
            realmenarzo6023,
            realmenarzo6024,
            realmenarzo6025,
            realmenarzo6026,
        ],
        productData: [
            { "label": "Brand", "value": "Realme" },
            { "label": "Model Name", "value": "Narzo 60" },
            { "label": "Display", "value": "6.43-inch Super AMOLED display" },
            { "label": "Processor", "value": "MediaTek Dimensity 6000 or Dimensity 7000 (depending on variant)" },
            { "label": "Operating System", "value": "Android 12" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Storage Capacity", "value": "Available in various configurations (check retailer websites for details)" },
            { "label": "RAM", "value": "Available in various configurations (check retailer websites for details)" },
            { "label": "Battery Capacity", "value": "5000mAh" },
        ],
        technicalData: [
            { "label": "Rear Camera", "value": "64MP main sensor with additional lenses (details may vary)" },
            { "label": "Front Camera", "value": "16MP (possible, based on some sources)" },
            { "label": "Charging", "value": "33W SUPERVOOC fast charging" },
            { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor (possible, based on some sources)" },
            { "label": "Other Features", "value": "Wi-Fi, Bluetooth 5.1, GPS" }
        ],

        sizeOptions: [
            '6GB + 128GB',
            '8GB + 128GB',
        ],
        colorOptions: [
            realmenarzo6011,
            realmenarzo6021,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [
                    realmenarzo60Slider11, realmenarzo60Slider12
                ]
            },
            {
                img: [realmenarzo60Slider21, realmenarzo60Slider22]
            },
            {
                img: [realmenarzo60Slider31]
            }
        ],
        heading: 'From the manufacturer',

    };
    const samsungM14 = {
        name: 'Samsung Galaxy M14 5G (Smoky Teal,6GB,128GB)|50MP Triple Cam|Segments Only 6000 mAh 5G SP| 5nm Processor| 2 Gen.OS Upgrade & 4 Year Security Update | 12GB RAM with RAM Plus | Android 13 | Without Charger',
        price: '₹13,999',
        mrp: '₹18,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            samsungM1411,
            samsungM1412,
            samsungM1413,
            samsungM1414,
            samsungM1415,
            samsungM1416,
        ],
        imgData2: [
            samsungM1421,
            samsungM1422,
            samsungM1423,
            samsungM1424,
            samsungM1425,
            samsungM1426,
        ],
        imgData3: [
            samsungM1431,
            samsungM1432,
            samsungM1433,
            samsungM1434,
            samsungM1435,
            samsungM1436,
        ],
        productData: [
            { "label": "Brand", "value": "Samsung" },
            { "label": "Model Name", "value": "Galaxy M14" },
            { "label": "Display", "value": "6.6-inch Full HD+ display" },
            { "label": "Processor", "value": "Exynos 1330 or MediaTek Dimensity 6100+ (depending on variant)" },
            { "label": "Operating System", "value": "Android 13" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Storage Capacity", "value": "Available in various configurations (check retailer websites for details)" },
            { "label": "RAM", "value": "Available in various configurations (check retailer websites for details)" },
            { "label": "Battery Capacity", "value": "6000mAh" },
        ],
        technicalData: [
            { "label": "Rear Camera", "value": "Triple-camera system: 50MP main sensor with additional lenses (details may vary)" },
            { "label": "Front Camera", "value": "Possible megapixel range: 8MP - 16MP (details not confirmed yet)" },
            { "label": "Charging", "value": "Fast charging supported (exact wattage may vary)" },
            { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor (expected)" },
            { "label": "Other Features", "value": "Wi-Fi, Bluetooth, GPS" },
            { "label": "Expandable Storage", "value": "microSD card slot (possible, based on some sources)" },
        ],

        sizeOptions: [
            '4GB + 128GB',
            '6GB + 128GB',

        ],
        colorOptions: [
            samsungM1411,
            samsungM1421,
            samsungM1431,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: [
                    samsungM14slider11
                ]
            },
            {
                img: [samsungM14Slider21]
            },
            {
                img: [samsungM14Slider31, samsungM14Slider32, samsungM14Slider33]
            },
            {
                img: [samsungM14Slider41, samsungM14Slider42, samsungM14Slider43, samsungM14Slider44]
            },
            {
                img: [samsungM14Slider51, samsungM14Slider52, samsungM14Slider53]
            },
            {
                img: [samsungM14Slider61, samsungM14Slider62]
            }
        ],
        heading: 'From the manufacturer',
    };
    const iqooZ6Lite = {
        name: 'iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) with Charger | Qualcomm Snapdragon 4 Gen 1 Processor | 120Hz FHD+ Display | Travel Adaptor Included in The Box',
        price: '₹12,999',
        mrp: '₹18,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iqooZ6Lite11,
            iqooZ6Lite12,
            iqooZ6Lite13,
            iqooZ6Lite14,
            iqooZ6Lite15,
            iqooZ6Lite16,
        ],
        productData: [
            { "label": "Brand", "value": "vivo" },
            { "label": "Model Name", "value": "iQOO Z6 Lite" },
            { "label": "Display", "value": "6.58-inch 1080x2408 pixels FHD+ display" },
            { "label": "Processor", "value": "Qualcomm Snapdragon 4 Gen 1" },
            { "label": "Operating System", "value": "iQOO UI (based on Android 12)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "5000mAh" },
            { "label": "Battery Charging", "value": "18W fast charging" }
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in various configurations (check retailer websites for details)" },
            { "label": "RAM", "value": "Available in various configurations (check retailer websites for details)" },
            { "label": "Rear Camera", "value": "50MP main sensor with additional lenses (details may vary)" },
            { "label": "Front Camera", "value": "Details not confirmed yet" },
            { "label": "Fingerprint Sensor", "value": "Side-mounted fingerprint sensor (possible, based on some sources)" },
            { "label": "Other Features", "value": "Wi-Fi, Bluetooth, GPS" }
        ],

        sizeOptions: [
            '6GB + 128GB',
            '8GB + 128GB',

        ],
        colorOptions: [
            iqooZ6Lite11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            }
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }
        ]
    };
    const redmi12 = {
        name: 'Redmi 12 5G Pastel Blue 6GB RAM 128GB ROM',
        price: '₹12,999',
        mrp: '₹17,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            redmi1211,
            redmi1212,
            redmi1213,
            redmi1214,
            redmi1215,
        ],
        imgData2: [
            redmi1221,
            redmi1222,
            redmi1223,
            redmi1224,
            redmi1225,
        ],
        imgData3: [
            redmi1231,
            redmi1232,
            redmi1233,
            redmi1234,
            redmi1235,
        ],
        productData: [
            { "label": "Brand", "value": "Xiaomi" },
            { "label": "Model Name", "value": "Redmi 12" },
            { "label": "Display", "value": "6.79-inch IPS LCD display with FHD+ resolution (1080x2460 pixels)" },
            { "label": "Refresh Rate", "value": "90Hz" },
            { "label": "Processor", "value": "MediaTek Helio G88 octa-core processor" },
            { "label": "Operating System", "value": "Android 13 with MIUI 14" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Storage Capacity", "value": "Available in variants: 4GB RAM + 128GB storage, 6GB RAM + 128GB storage, 8GB RAM + 128GB storage, 8GB RAM + 256GB storage" },
            { "label": "Expandable Storage", "value": "Supports microSD card up to 1TB for additional storage (check device manual for compatibility)" },
            { "label": "Battery Capacity", "value": "5000mAh" },
            { "label": "Battery Charging", "value": "18W fast charging" },
        ],
        technicalData: [
            { "label": "Rear Camera System", "value": "Triple camera system:" },
            { "label": "Rear Camera 1", "value": "50MP main sensor with f/1.8 aperture" },
            { "label": "Rear Camera 2", "value": "8MP wide-angle sensor" },
            { "label": "Rear Camera 3", "value": "2MP macro sensor for close-up shots (details may vary)" },
            { "label": "Front Camera", "value": "8MP front-facing camera for selfies and video calls" },
            { "label": "Fingerprint Sensor", "value": "Side-mounted fingerprint sensor for secure unlocking" },
            { "label": "Water Resistance", "value": "IP53 splash and dust resistant (limited protection)" },
            { "label": "Other Features", "value": "Wi-Fi, Bluetooth 5.1, GPS, NFC (may vary depending on market)" },
            { "label": "Dimensions", "value": "168.60mm x 76.28mm x 8.17mm" },
            { "label": "Weight", "value": "198.5 grams" }
        ],

        sizeOptions: [
            '4GB + 128GB',
            '6GB + 128GB',
            '8GB + 256GB',
        ],
        colorOptions: [
            redmi1211,
            redmi1221,
            redmi1231,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            }
        ],
        sliderImgSet: [
            {
                img: [
                    redmi12Silder11, redmi12Silder12, redmi12Silder13, redmi12Silder14
                ]
            },
            {
                img: [redmi12Silder21, redmi12Silder22, redmi12Silder23, redmi12Silder24]
            },
            {
                img: [redmi12Silder31, redmi12Silder32]
            },
            {
                img: [redmi12Silder41, redmi12Silder42, redmi12Silder43, redmi12Silder44]
            },
            {
                img: [redmi12Silder51, redmi12Silder52, redmi12Silder53, redmi12Silder54, redmi12Silder55]
            }
        ],
        heading: 'From the manufacturer',
    };
    const onePlusNordCE3Lite = {
        name: 'OnePlus Nord CE 3 Lite 5G (8GB RAM, 128GB Storage)',
        price: '₹17,999',
        mrp: '₹19,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            onePlusNordCE3Lite11,
            onePlusNordCE3Lite12,
            onePlusNordCE3Lite13,
            onePlusNordCE3Lite14,
            onePlusNordCE3Lite15,
            onePlusNordCE3Lite16,
        ],
        imgData2: [
            onePlusNordCE3Lite21,
            onePlusNordCE3Lite22,
            onePlusNordCE3Lite23,
            onePlusNordCE3Lite24,
            onePlusNordCE3Lite25,
            onePlusNordCE3Lite26,
        ],
        productData: [
            { "label": "Brand", "value": "OnePlus" },
            { "label": "Model Name", "value": "Nord CE 3 Lite 5G" },
            { "label": "Display", "value": "17.07cm (6.72-inch) 120Hz display" },
            { "label": "Processor", "value": "Qualcomm® Snapdragon™ 695 5G Chipset" },
            { "label": "Operating System", "value": "OxygenOS 13.1" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "5000mAh" },
            { "label": "Battery Charging", "value": "67W SUPERVOOC Endurance Edition fast charging" },
            { "label": "Available Colors", "value": "Pastel Lime, Chromatic Gray" },
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in variants: 8GB RAM + 128GB storage, 8GB RAM + 256GB storage" },
            { "label": "Rear Camera System", "value": "Triple camera system:" },
            { "label": "Rear Camera 1", "value": "108MP main sensor with f/1.8 aperture" },
            { "label": "Rear Camera 2", "value": "2MP macro sensor for close-up shots" },
            { "label": "Rear Camera 3", "value": "2MP depth sensor" },
            { "label": "Front Camera", "value": "16MP front-facing camera for selfies and video calls" },
            { "label": "Fingerprint Sensor", "value": "Side-mounted fingerprint sensor for secure unlocking" },
            { "label": "Other Features", "value": "Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 5.1, GPS, NFC (market dependent)" },
            { "label": "Dimensions", "value": "165.5mm x 76.0mm x 8.3mm" },
            { "label": "Weight", "value": "195g" }
        ],

        sizeOptions: [
            '8GB + 128GB',
            '8GB + 256GB',
        ],
        colorOptions: [
            onePlusNordCE3Lite11,
            onePlusNordCE3Lite21,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [
                    onePlusNordCE3LiteSlider11
                ]
            },
            {
                img: [onePlusNordCE3LiteSlider21]
            },
            {
                img: [onePlusNordCE3LiteSlider31]
            },
            {
                img: [onePlusNordCE3LiteSlider41, onePlusNordCE3LiteSlider42, onePlusNordCE3LiteSlider43, onePlusNordCE3LiteSlider44]
            },
            {
                img: [onePlusNordCE3LiteSlider51]
            },
            {
                img: [onePlusNordCE3LiteSlider61]
            }
        ],
        heading: 'From the manufacturer',
    };
    const onePlusNordCE3 = {
        name: 'Oneplus Nord CE 3 5G (8GB RAM, 128GB Storage)',
        price: '₹24,999',
        mrp: '₹26,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            onePlusNordCE311,
            onePlusNordCE312,
            onePlusNordCE313,
            onePlusNordCE314,
            onePlusNordCE315,
        ],
        imgData2: [
            onePlusNordCE321,
            onePlusNordCE322,
            onePlusNordCE323,
            onePlusNordCE324,
            onePlusNordCE325,
        ],
        productData: [
            { "label": "Brand", "value": "OnePlus" },
            { "label": "Model Name", "value": "Nord CE 3 5G" },
            { "label": "Display", "value": "17.02cm (6.7”) 120Hz AMOLED display" },
            { "label": "Processor", "value": "Qualcomm® Snapdragon™ 782G Chipset" },
            { "label": "Operating System", "value": "OxygenOS 13.1" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "5000mAh" },
            { "label": "Battery Charging", "value": "80W SUPERVOOC Endurance Edition fast charging" },
            { "label": "Available Colors", "value": "Aqua Surge, Gray Shimmer" },
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in variants: 8GB RAM + 128GB storage, 12GB RAM + 256GB storage" },
            { "label": "Rear Camera System", "value": "Triple camera system:" },
            { "label": "Rear Camera 1", "value": "50MP Sony IMX890 main sensor with f/1.8 aperture" },
            { "label": "Rear Camera 2", "value": "8MP wide-angle sensor" },
            { "label": "Rear Camera 3", "value": "2MP macro sensor for close-up shots" },
            { "label": "Front Camera", "value": "16MP front-facing camera for selfies and video calls" },
            { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor for secure unlocking" },
            { "label": "Other Features", "value": "Wi-Fi 802.11 a/b/g/n/ac/ax, Bluetooth 5.3, GPS, NFC, IR blaster" },
            { "label": "Dimensions", "value": "160.6mm x 75.7mm x 8.5mm" },
            { "label": "Weight", "value": "179g" }
        ],

        sizeOptions: [
            '8GB + 128GB',
            '8GB + 256GB',
        ],
        colorOptions: [
            onePlusNordCE311,
            onePlusNordCE321,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [
                    onePlusNordCE3Slider11, onePlusNordCE3Slider12, onePlusNordCE3Slider13
                ]
            },
            {
                img: [onePlusNordCE3Slider21, onePlusNordCE3Slider22, onePlusNordCE3Slider23, onePlusNordCE3Slider24, onePlusNordCE3Slider25]
            },
            {
                img: [onePlusNordCE3Slider31, onePlusNordCE3Slider32, onePlusNordCE3Slider33, onePlusNordCE3Slider34]
            },
            {
                img: [onePlusNordCE3Slider41, onePlusNordCE3Slider42, onePlusNordCE3Slider43]
            }
        ],
        heading: 'From the manufacturer',
    };
    const iqooZ7Pro = {
        name: 'iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segments Slimmest & Lightest Smartphone',
        price: '₹24,999',
        mrp: '₹27,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iqooZ7Pro11,
            iqooZ7Pro12,
            iqooZ7Pro13,
            iqooZ7Pro14,
        ],
        imgData2: [
            iqooZ7Pro21,
            iqooZ7Pro22,
            iqooZ7Pro23,
            iqooZ7Pro24,
        ],
        productData: [
            { "label": "Brand", "value": "vivo" },
            { "label": "Model Name", "value": "iQOO Z7 Pro" },
            { "label": "Display", "value": "6.67-inch 120Hz AMOLED display" },
            { "label": "Processor", "value": "MediaTek Dimensity 7200 5G Mobile Platform" },
            { "label": "Operating System", "value": "Funtouch OS 13 (based on Android 13)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "4600mAh" },
            { "label": "Battery Charging", "value": "66W FlashCharge fast charging" },
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in variants: 8GB RAM + 128GB storage, 12GB RAM + 256GB storage" },
            { "label": "Rear Camera System", "value": "Triple camera system:" },
            { "label": "Rear Camera 1", "value": "64MP main sensor with f/1.79 aperture" },
            { "label": "Rear Camera 2", "value": "2MP depth sensor" },
            { "label": "Rear Camera 3", "value": "Details on the third sensor may vary (possible macro sensor)" },
            { "label": "Front Camera", "value": "16MP front-facing camera for selfies and video calls" },
            { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor for secure unlocking" },
            { "label": "Other Features", "value": "Wi-Fi 6, Bluetooth 5.3, GPS, Liquid Cooling System for better heat management" },
            { "label": "Dimensions", "value": "165.2mm x 76.8mm x 8.50mm" },
            { "label": "Weight", "value": "196g" }
        ],

        sizeOptions: [
            '8GB + 128GB',
            '8GB + 256GB',
        ],
        colorOptions: [
            iqooZ7Pro11,
            iqooZ7Pro21,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [iqooZ7ProSlider11, iqooZ7ProSlider12]
            },
            {
                img: [iqooZ7ProSlider21, iqooZ7ProSlider22]
            },
            {
                img: [iqooZ7ProSlider31]
            },
            {
                img: [iqooZ7ProSlider41, iqooZ7ProSlider42, iqooZ7ProSlider43, iqooZ7ProSlider44]
            },
            {
                img: [iqooZ7ProSlider51]
            }
        ],
        heading: 'From the manufacturer',
    };
    const samsungM34 = {
        name: 'Samsung Galaxy M34 5G (8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger',
        price: '₹17,999',
        mrp: '₹25,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            samsungM3411,
            samsungM3412,
            samsungM3413,
            samsungM3414,
            samsungM3415,
        ],
        imgData2: [
            samsungM3421,
            samsungM3422,
            samsungM3423,
            samsungM3424,
            samsungM3425,
        ],
        productData: [
            { "label": "Brand", "value": "vivo" },
            { "label": "Model Name", "value": "iQOO Z7 Pro" },
            { "label": "Display", "value": "6.67-inch 120Hz AMOLED display" },
            { "label": "Processor", "value": "MediaTek Dimensity 7200 5G Mobile Platform" },
            { "label": "Operating System", "value": "Funtouch OS 13 (based on Android 13)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "4600mAh" },
            { "label": "Battery Charging", "value": "66W FlashCharge fast charging" },
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in variants: 8GB RAM + 128GB storage, 12GB RAM + 256GB storage" },
            { "label": "Rear Camera System", "value": "Triple camera system:" },
            { "label": "Rear Camera 1", "value": "64MP main sensor with f/1.79 aperture" },
            { "label": "Rear Camera 2", "value": "2MP depth sensor" },
            { "label": "Rear Camera 3", "value": "Details on the third sensor may vary (possible macro sensor)" },
            { "label": "Front Camera", "value": "16MP front-facing camera for selfies and video calls" },
            { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor for secure unlocking" },
            { "label": "Other Features", "value": "Wi-Fi 6, Bluetooth 5.3, GPS, Liquid Cooling System for better heat management" },
            { "label": "Dimensions", "value": "165.2mm x 76.8mm x 8.50mm" },
            { "label": "Weight", "value": "196g" }
        ],

        sizeOptions: [
            '8GB + 128GB',
            '8GB + 256GB',
        ],
        colorOptions: [
            samsungM3411,
            samsungM3421,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [samsungM34Slider11]
            },
            {
                img: [samsungM34Slider21]
            },
            {
                img: [samsungM34Slider31, samsungM34Slider32]
            },
            {
                img: [samsungM34Slider41, samsungM34Slider42, samsungM34Slider43, samsungM34Slider44]
            },
            {
                img: [samsungM34Slider51, samsungM34Slider52, samsungM34Slider53, samsungM34Slider54, samsungM34Slider55]
            },
            {
                img: [samsungM34Slider61, samsungM34Slider62, samsungM34Slider63, samsungM34Slider64]
            }
        ],
        heading: 'From the manufacturer',
    };
    const oneplus12r = {
        name: 'OnePlus 12R (8GB RAM, 256GB Storage)',
        price: '₹42,999',
        mrp: '₹45,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            oneplus12R11,
            oneplus12R12,
            oneplus12R13,
            oneplus12R14,
            oneplus12R15,
        ],
        imgData2: [
            oneplus12R21,
            oneplus12R22,
            oneplus12R23,
            oneplus12R24,
            oneplus12R25,
        ],
        productData: [
            { "label": "Brand", "value": "OnePlus" },
            { "label": "Model Name", "value": "12R" },
            { "label": "Display", "value": "6.78-inch 1264 x 2780 pixels AMOLED display" },
            { "label": "Refresh Rate", "value": "120Hz" },
            { "label": "Processor", "value": "Qualcomm Snapdragon 8 Gen 2" },
            { "label": "Operating System", "value": "OxygenOS 14.0 (based on Android 14)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "5500mAh (typical capacity, 5360mAh rated capacity)" },
            { "label": "Battery Charging", "value": "100W SUPERVOOC fast charging" },
            { "label": "Available Colors", "value": ["Cool Blue", "Iron Gray"] },
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in variants: 8GB RAM + 128GB storage, 12GB RAM + 256GB storage, 16GB RAM + 512GB storage" },
            { "label": "Rear Camera System", "value": "Sony IMX890 flagship camera system" },
            { "label": "Rear Camera 1", "value": "Details on megapixel count not confirmed yet (possible high-resolution main sensor)" },
            { "label": "Rear Camera 2", "value": "Details on additional cameras may vary (possible ultrawide and telephoto lenses)" },
            { "label": "Front Camera", "value": "Details on megapixel count not confirmed yet" },
            { "label": "Fingerprint Sensor", "value": "Under-display fingerprint sensor for secure unlocking" },
            { "label": "Cooling System", "value": "All-new Dual Cryo-velocity VC Cooling System for improved heat management" },
            { "label": "Other Features", "value": "Wi-Fi 6E, Bluetooth 5.3, GPS, NFC (may vary depending on market)" },
            { "label": "Dimensions", "value": "Check OnePlus website for details" },
            { "label": "Weight", "value": "Check OnePlus website for details" },
        ],

        sizeOptions: [
            '8GB + 256GB',
        ],
        colorOptions: [
            oneplus12R11,
            oneplus12R21,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [oneplus12RSlider11]
            },
            {
                img: [oneplus12RSlider21, oneplus12RSlider22, oneplus12RSlider23, oneplus12RSlider24]
            },
            {
                img: [oneplus12RSlider31]
            },
            {
                img: [oneplus12RSlider41, oneplus12RSlider42]
            },
            {
                img: [oneplus12RSlider51, oneplus12RSlider52, oneplus12RSlider53]
            },
            {
                img: [oneplus12RSlider61, oneplus12RSlider62, oneplus12RSlider63]
            },
            {
                img: [oneplus12RSlider71, oneplus12RSlider72, oneplus12RSlider73]
            }
        ],
        heading: 'From the manufacturer',
    };
    const oneplus12 = {
        name: 'OnePlus 12 (Flowy Emerald, 16GB RAM, 512GB Storage)',
        price: '₹69,999',
        mrp: '₹74,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            oneplus1211,
            oneplus1212,
            oneplus1213,
            oneplus1214,
            oneplus1215,
        ],
        imgData2: [
            oneplus1221,
            oneplus1222,
            oneplus1223,
            oneplus1224,
            oneplus1225,
        ],
        productData: [
            { "label": "Brand", "value": "OnePlus" },
            { "label": "Model Name", "value": "12" },
            { "label": "Display", "value": "6.82-inch 1440 x 3168 pixels Super Fluid AMOLED display" },
            { "label": "Refresh Rate", "value": "120Hz" },
            { "label": "Processor", "value": "Qualcomm Snapdragon 8 Gen 3 Mobile Platform" },
            { "label": "Operating System", "value": "OxygenOS 14.0 (based on Android 14)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "5400mAh (typical capacity, 5260mAh rated capacity)" },
            { "label": "Battery Charging", "value": "100W SUPERVOOC fast charging + 50W AIRVOOC wireless charging" },
            { "label": "Available Colors", "value": "Details on available colors not yet confirmed" },
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in variants: Up to 16GB RAM and up to 512GB storage (specific configurations to be confirmed)" },
            { "label": "Rear Camera System", "value": "4th Generation Hasselblad Camera System for Mobile" },
            { "label": "Rear Camera 1", "value": "50MP primary sensor with OIS (Optical Image Stabilization)" },
            { "label": "Rear Camera 2", "value": "Details on additional cameras may vary (possible ultrawide and telephoto lenses)" },
            { "label": "Front Camera", "value": "Details on megapixel count not confirmed yet" },
            { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor for secure unlocking" },
            { "label": "Other Features", "value": "Wi-Fi 6E, Bluetooth 5.3, GPS, NFC (may vary depending on market)" },
            { "label": "Dimensions", "value": "Check OnePlus website for details" },
            { "label": "Weight", "value": "Check OnePlus website for details" },
        ],

        sizeOptions: [
            '16GB + 512GB',
        ],
        colorOptions: [
            oneplus1211,
            oneplus1221,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [oneplus12Slider11]
            },
            {
                img: [oneplus12Slider21, oneplus12Slider22, oneplus12Slider23]
            },
            {
                img: [oneplus12Slider31, oneplus12Slider32, oneplus12Slider33]
            },
            {
                img: [oneplus12Slider41, oneplus12Slider42]
            },
            {
                img: [oneplus12Slider51, oneplus12Slider52, oneplus12Slider53]
            },
            {
                img: [oneplus12Slider61, oneplus12Slider62, oneplus12Slider63]
            }
        ],
        heading: 'From the manufacturer',
    };
    const samsungZFlip5 = {
        name: 'Samsung Galaxy Z Flip5 5G AI Smartphone (8GB RAM, 256GB Storage)',
        price: '₹94,999',
        mrp: '₹99,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            samsungZFlip511,
            samsungZFlip512,
            samsungZFlip513,
            samsungZFlip514,
        ],
        imgData2: [
            samsungZFlip521,
            samsungZFlip512,
            samsungZFlip513,
            samsungZFlip514,
        ],
        productData: [
            { "label": "Brand", "value": "Samsung" },
            { "label": "Model Name", "value": "Galaxy Z Flip5" },
            { "label": "Display", "value": "Main: Foldable AMOLED display (size and resolution to be confirmed)" },
            { "label": "Cover Screen", "value": "Improved cover screen (size and resolution to be confirmed)" },
            { "label": "Processor", "value": "Latest Qualcomm Snapdragon 8+ Gen 1 or newer processor (to be confirmed)" },
            { "label": "Operating System", "value": "Android 13 with One UI 5.1" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Details on battery capacity not yet confirmed" },
            { "label": "Battery Charging", "value": "Fast charging supported (details to be confirmed)" },
        ],
        technicalData: [
            { "label": "Rear Camera System", "value": "Improved camera system (details to be confirmed)" },
            { "label": "Front Camera", "value": "Details on front camera not yet confirmed" },
            { "label": "Fingerprint Sensor", "value": "Side-mounted fingerprint sensor (possible in-display sensor under development)" },
            { "label": "Durability", "value": "Improved hinge and display durability (details to be confirmed)" },
            { "label": "Other Features", "value": "Wi-Fi, Bluetooth, GPS, expandable storage (possible)" },
            { "label": "Dimensions", "value": "Check Samsung website for details" },
            { "label": "Weight", "value": "Check Samsung website for details" },
        ],
        sizeOptions: [
            '8GB + 256GB',
        ],
        colorOptions: [
            samsungZFlip511,
            samsungZFlip521,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [samsungZFlip5Slider11]
            },
            {
                img: [samsungZFlip5Slider21, samsungZFlip5Slider22, samsungZFlip5Slider23]
            },
            {
                img: [samsungZFlip5Slider31, samsungZFlip5Slider32]
            },
            {
                img: [samsungZFlip5Slider41, samsungZFlip5Slider42, samsungZFlip5Slider43, samsungZFlip5Slider44]
            },
            {
                img: [samsungZFlip5Slider51, samsungZFlip5Slider52, samsungZFlip5Slider53]
            },
            {
                img: [samsungZFlip5Slider61, samsungZFlip5Slider62]
            }
        ],
        heading: 'From the manufacturer',
    };
    const iqoo12 = {
        name: 'iQOO 12 5G (12GB RAM, 256GB Storage) |India 1st Snapdragon® 8 Gen 3 Mobile Platform | India only Flagship with 50MP + 50MP + 64MP Camera',
        price: '₹62,999',
        mrp: '₹69,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iqoo1211,
            iqoo1212,
            iqoo1213,
            iqoo1214,
            iqoo1215,
        ],
        imgData2: [
            iqoo1221,
            iqoo1222,
            iqoo1223,
            iqoo1224,
            iqoo1225,
        ],
        productData: [
            { "label": "Brand", "value": "vivo" },
            { "label": "Model Name", "value": "iQOO 12" },
            { "label": "Display", "value": "6.67-inch AMOLED display with Full HD+ resolution (1080 x 2400 pixels)" },
            { "label": "Refresh Rate", "value": "90Hz" },
            { "label": "Processor", "value": "Qualcomm Snapdragon 888 Mobile Platform" },
            { "label": "Operating System", "value": "Android 10 with Funtouch OS 10 (upgradable to newer versions)" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "4000mAh" },
            { "label": "Battery Charging", "value": "120W fast charging" },
        ],
        technicalData: [
            { "label": "Storage Capacity", "value": "Available in variants: 8GB RAM + 128GB storage, 8GB RAM + 256GB storage, 12GB RAM + 256GB storage" },
            { "label": "Rear Camera System", "value": "Triple camera system:" },
            { "label": "Rear Camera 1", "value": "48MP main sensor with f/1.8 aperture" },
            { "label": "Rear Camera 2", "value": "13MP telephoto lens with 2x optical zoom" },
            { "label": "Rear Camera 3", "value": "8MP ultrawide sensor" },
            { "label": "Front Camera", "value": "16MP front-facing camera for selfies and video calls" },
            { "label": "Fingerprint Sensor", "value": "In-display fingerprint sensor for secure unlocking" },
            { "label": "Other Features", "value": "Wi-Fi 6, Bluetooth 5.1, GPS" },
            { "label": "Dimensions", "value": "162.3 x 75.8 x 8.9 mm" },
            { "label": "Weight", "value": "196g" }
        ],
        sizeOptions: [
            '12GB + 256GB',
            '16BG + 512GB',
        ],
        colorOptions: [
            iqoo1211,
            iqoo1221,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [iqoo12Slider11, iqoo12Slider12, iqoo12Slider13, iqoo12Slider14, iqoo12Slider15]
            },
            {
                img: [iqoo12Slider21, iqoo12Slider22, iqoo12Slider23, iqoo12Slider24]
            },
            {
                img: [iqoo12Slider31, iqoo12Slider32, iqoo12Slider33, iqoo12Slider34, iqoo12Slider35]
            }
        ],
        heading: 'From the manufacturer',
    };
    const samsungZFold5 = {
        name: 'Samsung Galaxy Z Fold5 5G AI Smartphone (12GB RAM, 256GB Storage)',
        price: '₹1,49,999',
        mrp: '₹1,59,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            samsungZfold511,
            samsungZfold512,
            samsungZfold513,
            samsungZfold514,
        ],
        imgData2: [
            samsungZfold521,
            samsungZfold512,
            samsungZfold513,
            samsungZfold514,
        ],
        productData: [
            { "label": "Brand", "value": "Samsung" },
            { "label": "Model Name", "value": "Galaxy Z Fold5" },
            { "label": "Display", "value": "Main: Foldable AMOLED display (expected to be around 7.6 inches)" },
            { "label": "Cover Screen", "value": "Improved cover screen (expected to be around 6.2 inches)" },
            { "label": "Refresh Rate", "value": "Both displays likely to have a 120Hz refresh rate (to be confirmed)" },
            { "label": "Processor", "value": "Latest Qualcomm Snapdragon 8+ Gen 1 or newer processor (to be confirmed)" },
            { "label": "Operating System", "value": "Android 13 with One UI 5.1" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Battery Capacity", "value": "Details on battery capacity not yet confirmed (expected to be around 4400mAh)" },
            { "label": "Battery Charging", "value": "Fast charging supported (details to be confirmed)" },
        ],
        technicalData: [
            { "label": "Rear Camera System", "value": "Improved camera system (details to be confirmed)" },
            { "label": "Front Camera", "value": "Details on front camera not yet confirmed (expected to be under the main display)" },
            { "label": "Fingerprint Sensor", "value": "Possible in-display fingerprint sensor on the main display" },
            { "label": "Durability", "value": "Improved hinge and display durability (details to be confirmed)" },
            { "label": "S Pen Support", "value": "S Pen Fold Edition support likely" },
            { "label": "Other Features", "value": "Wi-Fi, Bluetooth, GPS, expandable storage (possible)" },
            { "label": "Dimensions", "value": "Check Samsung website for details" },
            { "label": "Weight", "value": "Check Samsung website for details" },
        ],
        sizeOptions: [
            '8GB + 256GB',
            '12GB + 256GB',
            '12GB + 512GB',
        ],
        colorOptions: [
            samsungZfold511,
            samsungZfold521,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [samsungZFold5Slider11]
            },
            {
                img: [samsungZFold5Slider21, samsungZFold5Slider22, samsungZFold5Slider23, samsungZFold5Slider24]
            },
            {
                img: [samsungZFold5Slider31]
            },
            {
                img: [samsungZFold5Slider41]
            },
            {
                img: [samsungZFold5Slider51]
            },
            {
                img: [samsungZFold5Slider61, samsungZFold5Slider62, samsungZFold5Slider63, samsungZFold5Slider64, samsungZFold5Slider65]
            }
        ],
        heading: 'From the manufacturer',
    };

    // Laptops Object
    const MacBookAirM1Chip = {
        name: 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad',
        price: '₹76,999',
        mrp: '₹99,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            MacbookAirM1Chip11,
            MacbookAirM1Chip12,
            MacbookAirM1Chip13,
            MacbookAirM1Chip14,
            MacbookAirM1Chip15,
            MacbookAirM1Chip16,
        ],
        imgData2: [
            MacbookAirM1Chip21,
            MacbookAirM1Chip22,
            MacbookAirM1Chip23,
            MacbookAirM1Chip24,
            MacbookAirM1Chip25,
            MacbookAirM1Chip26,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "MacBook Air" },
            { "label": "Chip", "value": "Apple M1 chip" },
            { "label": "Display", "value": "13.3-inch Retina display with True Tone" },
            { "label": "CPU", "value": "8-core CPU" },
            { "label": "GPU", "value": "7-core GPU" },
            { "label": "Operating System", "value": "macOS Monterey (upgradable to newer versions)" },
            { "label": "Memory", "value": "Available in variants: 8GB unified memory, 16GB unified memory" },
            { "label": "Storage Capacity", "value": "Available in variants: 256GB SSD storage, 512GB SSD storage, 1TB SSD storage" },
            { "label": "Battery Life", "value": "Up to 18 hours of battery life (according to Apple)" },
        ],
        technicalData: [
            { "label": "Keyboard", "value": "Magic Keyboard with Touch ID" },
            { "label": "Trackpad", "value": "Force Touch trackpad" },
            { "label": "Ports", "value": "Two Thunderbolt / USB 4 ports" },
            { "label": "Wireless", "value": "Wi-Fi 6, Bluetooth 5.0" },
            { "label": "Camera", "value": "720p FaceTime HD camera" },
            { "label": "Dimensions", "value": "Check Apple website for details" },
            { "label": "Weight", "value": "Check Apple website for details" },
        ],
        sizeOptions: [
            '8GB + 256GB',
        ],
        colorOptions: [
            MacbookAirM1Chip11,
            MacbookAirM1Chip21,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };
    const MacBookAirM2Chip = {
        name: 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Starlight​',
        price: '₹1,25,999',
        mrp: '₹1,35,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            MacBookAirM2Chip11,
            MacBookAirM2Chip12,
            MacBookAirM2Chip13,
            MacBookAirM2Chip14,
            MacBookAirM2Chip15,
            MacBookAirM2Chip16,
        ],
        productData: [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "MacBook Air (2022)" },
            { "label": "Chip", "value": "Apple M2 chip" },
            { "label": "Display", "value": "13.6-inch Liquid Retina display with True Tone" },
            { "label": "Operating System", "value": "macOS Monterey" },
            { "label": "Storage Capacity", "value": "Available in various capacities (check Apple website for details)" },
            { "label": "Memory", "value": "Available in various configurations (check Apple website for details)" },
            { "label": "Battery Life", "value": "Up to 18 hours of battery life (typical)" },
        ],
        technicalData: [
            { "label": "Keyboard", "value": "Magic Keyboard with Touch ID" },
            { "label": "Trackpad", "value": "Force Touch trackpad" },
            { "label": "Ports", "value": "Two Thunderbolt / USB 4 ports, MagSafe 3 charging port" },
            { "label": "Camera", "value": "1080p FaceTime HD camera" },
            { "label": "Material", "value": "Sleek aluminum enclosure" },
        ],
        sizeOptions: [
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            MacBookAirM2Chip11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const MacBookAirM3Chip = {
        name: 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Starlight​',
        price: '₹1,07,999',
        mrp: '₹1,34,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            MacbookAirM3Chip11,
            MacbookAirM3Chip12,
            MacbookAirM3Chip13,
            MacbookAirM3Chip14,
            MacbookAirM3Chip15,
            MacbookAirM3Chip16,
        ],
        imgData2: [
            MacbookAirM3Chip21,
            MacbookAirM3Chip22,
            MacbookAirM3Chip23,
            MacbookAirM3Chip24,
            MacbookAirM3Chip25,
            MacbookAirM3Chip26,
        ],
        imgData3: [
            MacbookAirM3Chip31,
            MacbookAirM3Chip32,
            MacbookAirM3Chip33,
            MacbookAirM3Chip34,
            MacbookAirM3Chip35,
            MacbookAirM3Chip36,
        ],
        "productData": [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "MacBook Air" },
            { "label": "Year", "value": "2024" },
            { "label": "Chip", "value": "Apple M3 chip" },
            { "label": "Display", "value": "13.6-inch Liquid Retina display with True Tone" },
            { "label": "CPU", "value": "8-core CPU with 4 performance cores and 4 efficiency cores" },
            { "label": "GPU", "value": "Configurable: 8-core GPU or 10-core GPU" },
            { "label": "Operating System", "value": "macOS Ventura (latest version)" },
            { "label": "Memory", "value": "Available in variants: 8GB unified memory, 16GB unified memory, 24GB unified memory" },
            { "label": "Storage Capacity", "value": "Available in variants: 256GB SSD storage, 512GB SSD storage, 1TB SSD storage, 2TB SSD storage" },
            { "label": "Battery Life", "value": "Up to 18 hours of battery life (according to Apple)" },
        ],
        "technicalData": [
            { "label": "Keyboard", "value": "Magic Keyboard with Touch ID" },
            { "label": "Trackpad", "value": "Force Touch trackpad" },
            { "label": "Ports", "value": "Two Thunderbolt / USB 4 ports with support for charging and external displays" },
            { "label": "Wireless", "value": "Likely Wi-Fi 6E and Bluetooth 5.3 (official specs not yet confirmed)" },
            { "label": "Camera", "value": "1080p FaceTime HD camera" },
            { "label": "Dimensions", "value": "Check Apple website for details" },
            { "label": "Weight", "value": "Check Apple website for details" },
        ],
        sizeOptions: [
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            MacbookAirM3Chip11,
            MacbookAirM3Chip21,
            MacbookAirM3Chip31,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const MacBookProM3MaxChip = {
        name: 'Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core CPU and 40‑core GPU, 48GB Unified Memory, 1TB) - Space Black​',
        price: '₹3,49,999',
        mrp: '₹3,99,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            MacbookProM3MaxChip11,
            MacbookProM3MaxChip12,
            MacbookProM3MaxChip13,
            MacbookProM3MaxChip14,
            MacbookProM3MaxChip15,
            MacbookProM3MaxChip16,
        ],
        "productData": [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "MacBook Pro" },
            { "label": "Year", "value": "2023" },
            { "label": "Display", "value": "16.2-inch Liquid Retina XDR display with ProMotion technology" },
            { "label": "Chip", "value": "Apple M3 Max chip with 16‑core CPU and 40‑core GPU" },
            { "label": "CPU", "value": "16-core CPU" },
            { "label": "GPU", "value": "40-core GPU" },
            { "label": "Memory", "value": "48GB unified memory" },
            { "label": "Storage Capacity", "value": "1TB SSD storage" },
            { "label": "Operating System", "value": "macOS Ventura (latest version)" },
            { "label": "Color", "value": "Space Black" },
        ],
        "technicalData": [
            { "label": "Keyboard", "value": "Magic Keyboard with Touch ID and function keys" },
            { "label": "Trackpad", "value": "Force Touch trackpad" },
            { "label": "Ports", "value": "Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port" },
            { "label": "Wireless", "value": "Wi-Fi 6E and Bluetooth 5.3" },
            { "label": "Camera", "value": "1080p FaceTime HD camera with improved low-light performance (possible detail based on rumors)" },
            { "label": "Battery Life", "value": "Up to 17 hours of video playback (according to Apple)" },
            { "label": "Dimensions", "value": "Check Apple website for details" },
            { "label": "Weight", "value": "Check Apple website for details" },
        ],
        sizeOptions: [
            '256GB',
            '512GB',
            '1TB',
        ],
        colorOptions: [
            MacbookProM3MaxChip11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };

    // Window
    const Dell15 = {
        name: 'Dell 15 Laptop, Intel Core i5-1135G7 Processor/ 8GB/ 1TB+256GB SSD/15.6"(39.62cm) FHD Display/Mobile Connect/Windows 11 + MSO 21/15 Month McAfee/Spill-Resistant Keyboard/Black/Thin & Light 1.69kg​',
        price: '₹45,999',
        mrp: '₹69,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            Dell1511,
            Dell1512,
            Dell1513,
            Dell1514,
            Dell1515,
            Dell1516,
        ],
        "productData": [
            { "label": "Brand", "value": "Dell" },
            { "label": "Model Name", "value": "Dell 15" },
            { "label": "Processor", "value": "Intel Core i5-1135G7 Processor" },
            { "label": "Display", "value": "Details on display size and resolution may vary (check Dell website for available configurations)" },
            { "label": "Operating System", "value": "Windows 11 Home or Windows 10 (possible depending on retailer and purchase date)" },
            { "label": "Memory", "value": "Available in variants with varying RAM capacities (check Dell website for details)" },
            { "label": "Storage Capacity", "value": "Available in variants with varying SSD capacities (check Dell website for details)" },
            { "label": "Graphics", "value": "Intel Iris Xe Graphics" },
        ],
        "technicalData": [
            { "label": "Battery", "value": "Details on battery capacity and charging may vary (check Dell website for details)" },
            { "label": "Ports", "value": "Likely includes USB ports, HDMI port, headphone jack (specific ports may vary)" },
            { "label": "Connectivity", "value": "Possible Wi-Fi 6, Bluetooth 5.1 (check Dell website for details)" },
            { "label": "Weight", "value": "Check Dell website for details" },
            { "label": "Dimensions", "value": "Check Dell website for details" },
        ],
        sizeOptions: [
            '256GB',
            '512GB',
        ],
        colorOptions: [
            Dell1511,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const LenovoIdeaPadSlim3 = {
        name: 'Lenovo IdeaPad Slim 3 Intel Core i7 12th Gen 15.6 inch (39.62cm) FHD Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/3months Game Pass/Arctic Grey/1.63Kg), 82RK011EIN​',
        price: '₹62,999',
        mrp: '₹82,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            LenovoIdeaPadSlim311,
            LenovoIdeaPadSlim312,
            LenovoIdeaPadSlim313,
            LenovoIdeaPadSlim314,
            LenovoIdeaPadSlim315,
            LenovoIdeaPadSlim316,
        ],
        "productData": [
            { "label": "Brand", "value": "Lenovo" },
            { "label": "Model Name", "value": "IdeaPad Slim 3" },
            { "label": "Display", "value": "Available in 14-inch and 15.6-inch Full HD (1920 x 1080) display options" },
            { "label": "Processor", "value": "Available in variants with Intel Core i3, i5, or AMD Ryzen processors (specific models to be confirmed)" },
            { "label": "Operating System", "value": "Windows 11 Home in S mode or Windows 11 Home (availability may vary)" },
            { "label": "Memory", "value": "Available in variants with 4GB, 8GB, or 16GB of RAM (specific configurations to be confirmed)" },
            { "label": "Storage Capacity", "value": "Available in variants with 128GB, 256GB, or 512GB SSD storage (specific configurations to be confirmed)" },
            { "label": "Graphics", "value": "Integrated graphics (specific model to be confirmed)" },
        ],
        "technicalData": [
            { "label": "Battery Life", "value": "Up to 7 hours (according to Lenovo estimates, may vary depending on usage)" },
            { "label": "Weight", "value": "Lightweight design, weight varies depending on configuration (check Lenovo website for details)" },
            { "label": "Ports", "value": "May include USB-A ports, USB-C port, HDMI port, headphone jack (specific ports may vary)" },
            { "label": "Connectivity", "value": "Wi-Fi 5 or Wi-Fi 6 (depending on model), Bluetooth (version may vary)" },
            { "label": "Security", "value": "Fingerprint reader (optional on some models)" },
            { "label": "Camera", "value": "720p HD webcam" },
            { "label": "Dimensions", "value": "Check Lenovo website for details" },
        ],
        sizeOptions: [
            '512GB',
            '1TB',
        ],
        colorOptions: [
            LenovoIdeaPadSlim311,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const AsusVivobook14 = {
        name: 'ASUS Vivobook 14, Intel Core i3-1115G4 11th Gen, 14" (35.56 cms) FHD, Thin and Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/Indie Black/1.60 kg), X1400EA-EK323WS​',
        price: '₹31,999',
        mrp: '₹48,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            AsusVivobook1411,
            AsusVivobook1412,
            AsusVivobook1413,
            AsusVivobook1414,
            AsusVivobook1415,
            AsusVivobook1416,
            AsusVivobook1417,
        ],
        "productData": [
            { "label": "Brand", "value": "ASUS" },
            { "label": "Model Name", "value": "Vivobook 14" },
            { "label": "Processor", "value": "Intel Core i3-1115G4 Processor (3.0 GHz base clock, up to 4.1 GHz Turbo Boost, 2 cores)" },
            { "label": "Display", "value": "14.0-inch Full HD (1920 x 1080) anti-glare display" },
            { "label": "Operating System", "value": "Windows 11 Home (upgradeable to Windows 11 Pro)" },
            { "label": "Memory", "value": "8GB DDR4 RAM (4GB onboard + 4GB SO-DIMM, expandable up to 12GB)" },
            { "label": "Storage Capacity", "value": "Available in variants with 256GB SSD, 512GB SSD, or combination with an additional HDD (check retailer for details)" },
            { "label": "Graphics", "value": "Intel UHD Graphics" },
        ],
        "technicalData": [
            { "label": "Battery", "value": "Up to 16 hours (according to ASUS estimates, may vary depending on usage)" },
            { "label": "Weight", "value": "1.60 kg (lightweight design)" },
            { "label": "Ports", "value": "One USB 3.2 Gen 2 Type-C port, two USB 3.2 Gen 1 Type-A ports, one HDMI port, microSD card reader, headphone jack" },
            { "label": "Connectivity", "value": "Wi-Fi 5, Bluetooth 5.0" },
            { "label": "Camera", "value": "720p HD webcam" },
            { "label": "Storage Expansion", "value": "One M.2 2280 PCIe 3.0x2 slot and one SATA slot for additional storage" },
            { "label": "Dimensions", "value": "32.4 centimeter (W) x 21.5 centimeter (D) x 1.8 centimeter (H)" },
        ],
        sizeOptions: [
            '512GB',
            '1TB',
        ],
        colorOptions: [
            AsusVivobook1411,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };
    const AcerAspireLite12ThGen = {
        name: 'Acer Aspire Lite 12th Gen Intel Core i3-1215U Premium Metal Laptop (Windows 11 Home/8 GB RAM/512GB SSD) AL15-52, 39.62cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 Kg​',
        price: '₹31,999',
        mrp: '₹52,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            AcerAspireLite12ThGen11,
            AcerAspireLite12ThGen12,
            AcerAspireLite12ThGen13,
            AcerAspireLite12ThGen14,
            AcerAspireLite12ThGen15,
            AcerAspireLite12ThGen16,
            AcerAspireLite12ThGen17,
        ],
        "productData": [
            { "label": "Brand", "value": "Acer" },
            { "label": "Model Name", "value": "Aspire Lite" },
            { "label": "Processor", "value": "Intel Core i3-1215U Processor" },
            { "label": "Display", "value": "15.6-inch Full HD (1920 x 1080) anti-glare TFT LCD display" },
            { "label": "Operating System", "value": "Windows 11 Home" },
            { "label": "Memory", "value": "Available in variants with 8GB or 16GB DDR4 RAM" },
            { "label": "Storage Capacity", "value": "Available in variants with 256GB or 512GB PCIe Gen3 NVMe SSD" },
            { "label": "Graphics", "value": "Intel UHD Graphics" },
        ],
        "technicalData": [
            { "label": "Keyboard", "value": "Chiclet keyboard with numeric keypad (possible based on images)" },
            { "label": "Battery", "value": "Up to 7 hours (according to online sources, may vary depending on usage)" },
            { "label": "Weight", "value": "1.59 kg (lightweight design)" },
            { "label": "Ports", "value": "Likely includes USB-A ports, USB-C port, HDMI port, headphone jack (specific ports may vary)" },
            { "label": "Connectivity", "value": "Wi-Fi 5 or Wi-Fi 6 (details to be confirmed)" },
            { "label": "Camera", "value": "720p HD webcam (possible based on images)" },
            { "label": "Dimensions", "value": "36.30 cm (W) x 25.70 cm (D) x 1.93 cm (H) (approximate based on online sources)" },
        ],
        sizeOptions: [
            '512GB',
            '1TB',
        ],
        colorOptions: [
            AcerAspireLite12ThGen11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [

                ]
            }

        ]
    };

    // Tablets and iPads
    const samsungTabA9Plus = {
        name: 'Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet, Graphite',
        price: '₹19,999',
        mrp: '₹28,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            SamsungTabA9Plus11,
            SamsungTabA9Plus12,
            SamsungTabA9Plus13,
            SamsungTabA9Plus14,
            SamsungTabA9Plus15,
            SamsungTabA9Plus16,
        ],
        imgData2: [
            SamsungTabA9Plus21,
            SamsungTabA9Plus22,
            SamsungTabA9Plus23,
            SamsungTabA9Plus24,
            SamsungTabA9Plus25,
            SamsungTabA9Plus26,
        ],
        "productData": [
            { "label": "Brand", "value": "Samsung" },
            { "label": "Model Name", "value": "Galaxy Tab A9+" },
            { "label": "Display", "value": "10.5-inch or 11.0-inch WUXGA+ (1920 x 1200 or 2000 x 1200) TFT LCD display (display size may vary depending on model)" },
            { "label": "Processor", "value": "Qualcomm Snapdragon 695 5G mobile platform" },
            { "label": "Operating System", "value": "Android 12 with One UI 4.1" },
            { "label": "Cellular Technology", "value": "5G" },
            { "label": "Network Service Provider", "value": "Unlocked (varies by retailer)" },
            { "label": "Memory", "value": "Available in variants: 6GB RAM + 128GB storage, 8GB RAM + 128GB storage" },
            { "label": "Expandable Storage", "value": "MicroSD slot for expandable storage (up to 1TB)" },
            { "label": "Battery Capacity", "value": "7040mAh battery" },
        ],
        "technicalData": [
            { "label": "Rear Camera System", "value": "8MP main camera with autofocus, 5MP ultrawide camera" },
            { "label": "Front Camera", "value": "5MP front-facing camera for selfies and video calls" },
            { "label": "Fingerprint Sensor", "value": "Possible fingerprint sensor integrated into the power button" },
            { "label": "S Pen Support", "value": "Not supported" },
            { "label": "Other Features", "value": "Wi-Fi, Bluetooth 5.2, GPS" },
            { "label": "Dimensions", "value": "Check Samsung website for details (may vary depending on display size)" },
            { "label": "Weight", "value": "Check Samsung website for details (may vary depending on display size)" },
        ],

        sizeOptions: [
            '8GB + 128GB (Only WiFi)',
            '8GB + 128GB (WiFi + 5G)',
        ],
        colorOptions: [
            SamsungTabA9Plus11,
            SamsungTabA9Plus21,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            }
        ],
        sliderImgSet: [
            {
                img: [SamsungTabA9PlusSlider11]
            },
            {
                img: [SamsungTabA9PlusSlider21, SamsungTabA9PlusSlider22]
            },
            {
                img: [SamsungTabA9PlusSlider31, SamsungTabA9PlusSlider32]
            },
            {
                img: [SamsungTabA9PlusSlider41]
            },
            {
                img: [SamsungTabA9PlusSlider51]
            },
            {
                img: [SamsungTabA9PlusSlider61]
            },
            {
                img: [SamsungTabA9PlusSlider71, SamsungTabA9PlusSlider72, SamsungTabA9PlusSlider73, SamsungTabA9PlusSlider74]
            }
        ],
        heading: 'From the manufacturer',
    };
    const onePlusPad = {
        name: 'OnePlus Pad 29.49cm (11.61 inch) LCD Display, 12GB RAM,256GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet',
        price: '₹39,499',
        mrp: '₹39,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            onePlusPad11,
            onePlusPad12,
            onePlusPad13,
            onePlusPad14,
            onePlusPad15,
            onePlusPad16,
        ],
        "productData": [
            { "label": "Brand", "value": "OnePlus" },
            { "label": "Model Name", "value": "Pad" },
            { "label": "Display", "value": "11.61-inch LCD display with 144Hz refresh rate" },
            { "label": "Processor", "value": "MediaTek Dimensity 9000" },
            { "label": "Operating System", "value": "Android 13.1" },
            { "label": "Memory", "value": "Available in variants: 8GB RAM + 128GB storage, 12GB RAM + 256GB storage" },
            { "label": "Cellular Technology", "value": "Wi-Fi with Cellular Data Sharing" },
            { "label": "Battery", "value": "Large battery with 67W SUPERVOOC charging" },
        ],
        "technicalData": [
            { "label": "Rear Camera", "value": "Details on rear camera not yet confirmed" },
            { "label": "Front Camera", "value": "Details on front camera not yet confirmed" },
            { "label": "Fingerprint Sensor", "value": "Possible in-display fingerprint sensor" },
            { "label": "Connectivity", "value": "Wi-Fi 6, Bluetooth 5.3 (expected)" },
            { "label": "Other Features", "value": "Dolby Vision Atmos, Multitasking features with OnePlus Pad and phone" },
            { "label": "Dimensions", "value": "Check OnePlus website for details" },
            { "label": "Weight", "value": "Check OnePlus website for details" },
        ],
        sizeOptions: [
            '8GB + 128G',
            '12GB + 256GB',
        ],
        colorOptions: [
            onePlusPad11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [onePlusPadSlider11]
            },
            {
                img: [onePlusPadSlider21]
            },
            {
                img: [onePlusPadSlider31, onePlusPadSlider32, onePlusPadSlider33]
            },
            {
                img: [onePlusPadSlider41, onePlusPadSlider42, onePlusPadSlider43]
            },
            {
                img: [onePlusPadSlider51, onePlusPadSlider52, onePlusPadSlider53, onePlusPadSlider54]
            },
            {
                img: [onePlusPadSlider61, onePlusPadSlider62, onePlusPadSlider63, onePlusPadSlider64]
            },
        ],
        heading: 'From the manufacturer',
    };
    const xiaomiPad6 = {
        name: 'Xiaomi Pad 6| Qualcomm Snapdragon 870| Powered by HyperOS |144Hz Refresh Rate| 8GB, 256GB| 2.8K+ Display (11-inch/27.81cm) Tablet| Dolby Vision Atmos| Quad Speakers| Wi-Fi| Mist Blue',
        price: '₹27,499',
        mrp: '₹41,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            xiaomiPad611,
            xiaomiPad612,
            xiaomiPad613,
            xiaomiPad614,
            xiaomiPad615,
            xiaomiPad616,
        ],
        imgData2: [
            xiaomiPad621,
            xiaomiPad622,
            xiaomiPad623,
            xiaomiPad624,
            xiaomiPad625,
            xiaomiPad626,
        ],
        "productData": [
            { "label": "Brand", "value": "Xiaomi" },
            { "label": "Model Name", "value": "Pad 6" },
            { "label": "Display", "value": "11.0-inch 2.8K+ (2880 x 1800) LCD display with 120Hz refresh rate" },
            { "label": "Processor", "value": "Qualcomm Snapdragon 870 5G mobile platform" },
            { "label": "Operating System", "value": "Android 11 with MIUI 13 (upgradable to newer versions)" },
            { "label": "Cellular Technology", "value": "Wi-Fi only or Wi-Fi + 5G (model dependent)" },
            { "label": "Memory", "value": "Available in variants: 6GB RAM + 128GB storage, 8GB RAM + 256GB storage" },
            { "label": "Expandable Storage", "value": "Not expandable" },
            { "label": "Battery Capacity", "value": "8840mAh battery" },
        ],
        "technicalData": [
            { "label": "Rear Camera System", "value": "13MP main camera, 5MP ultrawide camera" },
            { "label": "Front Camera", "value": "8MP front-facing camera" },
            { "label": "Speakers", "value": "Quad Speakers with Dolby Atmos support" },
            { "label": "Accessories", "value": "Optional Xiaomi Smart Pen 2nd Gen and Xiaomi Pad 6 Keyboard" },
            { "label": "Fingerprint Sensor", "value": "Side-mounted fingerprint sensor" },
            { "label": "Other Features", "value": "Wi-Fi 6, Bluetooth 5.2, GPS" },
            { "label": "Dimensions", "value": "254.7 x 165.8 x 6.85 mm" },
            { "label": "Weight", "value": "490g" },
        ],
        sizeOptions: [
            '6GB + 128G',
            '8GB + 256GB',
            '12GB + 256GB',
        ],
        colorOptions: [
            xiaomiPad611,
            xiaomiPad621,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
        ],
        sliderImgSet: [
            {
                img: [xiaomiPad6Slider11]
            },
            {
                img: [xiaomiPad6Slider21, xiaomiPad6Slider22, xiaomiPad6Slider23]
            },
            {
                img: [xiaomiPad6Slider31, xiaomiPad6Slider32]
            },
            {
                img: [xiaomiPad6Slider41, xiaomiPad6Slider42, xiaomiPad6Slider43, xiaomiPad6Slider44, xiaomiPad6Slider45, xiaomiPad6Slider46]
            },
            {
                img: [xiaomiPad6Slider51, xiaomiPad6Slider52]
            },
            {
                img: [xiaomiPad6Slider61]
            },
            {
                img: [xiaomiPad6Slider71]
            }
        ],
        heading: 'From the manufacturer',
    };

    const iPad10ThGen = {
        name: 'Apple iPad (10th Generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue',
        price: '₹36,499',
        mrp: '₹39,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPad10ThGen11,
            iPad10ThGen12,
            iPad10ThGen13,
            iPad10ThGen14,
            iPad10ThGen15,
            iPad10ThGen16,
        ],
        imgData2: [
            iPad10ThGen21,
            iPad10ThGen22,
            iPad10ThGen23,
            iPad10ThGen24,
            iPad10ThGen25,
            iPad10ThGen26,
        ],
        imgData3: [
            iPad10ThGen31,
            iPad10ThGen32,
            iPad10ThGen33,
            iPad10ThGen34,
            iPad10ThGen35,
            iPad10ThGen36,
        ],
        "productData": [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPad (10th generation)" },
            { "label": "Year", "value": "2022" },
            { "label": "Chip", "value": "A14 Bionic chip" },
            { "label": "Display", "value": "10.9-inch Liquid Retina display with 2360 x 1640 resolution and True Tone" },
            { "label": "Operating System", "value": "iPadOS 16 (latest version)" },
            { "label": "Security", "value": "Touch ID fingerprint sensor" },
        ],
        "technicalData": [
            { "label": "Front Camera", "value": "12MP Ultra Wide camera with Center Stage for video calls" },
            { "label": "Rear Camera", "value": "12MP Wide camera" },
            { "label": "Battery", "value": "Up to 10 hours of battery life (according to Apple)" },
            { "label": "Storage Capacity", "value": "Available in variants: 64GB, 256GB" },
            { "label": "Connectivity", "value": "Wi-Fi 6 for fast internet" },
            { "label": "Cellular Technology", "value": "Wi-Fi only or Wi-Fi + Cellular (model dependent)" },
            { "label": "Audio", "value": "Stereo speakers" },
            { "label": "Dimensions", "value": "257.9 mm (10.15 inches) height, 173 mm (6.81 inches) width, and 7.5 mm (0.29 inches) thickness" },
            { "label": "Weight", "value": "487 grams (1.07 pounds) for Wi-Fi model, 498 grams (1.1 pounds) for Wi-Fi + Cellular model" },
            { "label": "Accessories", "value": "Compatible with Apple Pencil (1st generation) and Magic Keyboard Folio (sold separately)" },
        ],
        sizeOptions: [
            '128G',
            '256GB',
        ],
        colorOptions: [
            iPad10ThGen11,
            iPad10ThGen21,
            iPad10ThGen31,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
            () => {
                setImgShow(productDetails.imgData3);
                setMainImg(firstImgData3);
            },
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };
    const iPad11Pro4Gen = {
        name: 'Apple iPad (10th Generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue',
        price: '₹89,999',
        mrp: '₹94,999',
        tax: 'Inclusive of all taxes',
        size: 'Size:',
        color: 'Color:',
        imgData: [
            iPad11Pro4ThGen11,
            iPad11Pro4ThGen12,
            iPad11Pro4ThGen13,
            iPad11Pro4ThGen14,
            iPad11Pro4ThGen15,
            iPad11Pro4ThGen16,
            iPad11Pro4ThGen17,
        ],
        imgData2: [
            iPad11Pro4ThGen21,
            iPad11Pro4ThGen22,
            iPad11Pro4ThGen23,
            iPad11Pro4ThGen24,
            iPad11Pro4ThGen25,
            iPad11Pro4ThGen26,
            iPad11Pro4ThGen27,
        ],
        "productData": [
            { "label": "Brand", "value": "Apple" },
            { "label": "Model Name", "value": "iPad Pro 11-inch (4th generation)" },
            { "label": "Year", "value": "2023" },
            { "label": "Chip", "value": "Apple M2 chip with an 8-core CPU, 10-core GPU, and 16-core Neural Engine" },
            { "label": "Display", "value": "11-inch Liquid Retina display with 2388 x 1668 resolution, ProMotion technology (120Hz refresh rate), wide color (P3), True Tone, and fingerprint-resistant oleophobic coating" },
            { "label": "Operating System", "value": "iPadOS 16 (latest version)" },
        ],
        "technicalData": [
            { "label": "Storage Capacity", "value": "Available in variants: 128GB, 256GB, 512GB, 1TB, 2TB" },
            { "label": "Memory", "value": "8GB RAM for models with 128GB, 256GB, or 512GB storage; 16GB RAM for models with 1TB or 2TB storage" },
            { "label": "Front Camera", "value": "12MP TrueDepth camera with Center Stage for video calls" },
            { "label": "Rear Camera System", "value": "Dual-camera system with a 12MP wide camera and a 10MP ultrawide camera" },
            { "label": "Battery", "value": "Up to 10 hours of battery life (according to Apple)" },
            { "label": "Connectivity", "value": "Wi-Fi 6E for ultrafast wireless connections" },
            { "label": "Cellular Technology", "value": "Wi-Fi only or Wi-Fi + Cellular (model dependent)" },
            { "label": "Ports", "value": "Thunderbolt 4 port for charging and high-speed data transfer" },
            { "label": "Audio", "value": "Four-speaker sound system with support for Dolby Atmos" },
            { "label": "Accessories", "value": "Compatible with Apple Pencil (2nd generation) and Magic Keyboard (sold separately)" },
            { "label": "Dimensions", "value": "248.6 mm (9.79 inches) height, 167.1 mm (6.58 inches) width, and 5.9 mm (0.23 inches) thickness" },
            { "label": "Weight", "value": "466 grams (1.03 pounds) for Wi-Fi model, 512 grams (1.13 pounds) for Wi-Fi + Cellular model" },
        ],
        sizeOptions: [
            '128G',
            '256GB',
            '512GB',
        ],
        colorOptions: [
            iPad11Pro4ThGen11,
            iPad11Pro4ThGen21,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
            () => {
                setImgShow(productDetails.imgData2);
                setMainImg(firstImgData2);
            },
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };

    // Audio Product 
    const OnePlusBuds3 = {
        name: 'OnePlus Buds 3 in Ear TWS Bluetooth Earbuds with Upto 49dB Smart Adaptive Noise Cancellation,Hi-Res Sound Quality,Sliding Volume Control,10mins for 7Hours Fast Charging with Upto 44Hrs Playback',
        price: '₹5,499',
        mrp: '₹6,499',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color:',
        imgData: [
            OnePlusBuds311,
            OnePlusBuds312,
            OnePlusBuds313,
            OnePlusBuds314,
            OnePlusBuds315,
            OnePlusBuds316,
        ],
        "productData": [
            { "label": "Brand", "value": "OnePlus" },
            { "label": "Model Name", "value": "Buds 3" },
            { "label": "Form Factor", "value": "In-Ear (TWS - True Wireless Stereo)" },
            { "label": "Connectivity", "value": "Bluetooth 5.3" },
            { "label": "Audio Drivers", "value": "Dual drivers: 10.4mm woofer + 6mm tweeter" },
            { "label": "Active Noise Cancellation (ANC)", "value": "Up to 49dB" },
            { "label": "Audio Codecs", "value": "LHDC 5.0, AAC, SBC" },
            { "label": "Water Resistance", "value": "IP55 rating (water and dust resistant)" },
            { "label": "Battery Life", "value": "Up to 7 hours playback (buds only), up to 44 hours playback with charging case (according to OnePlus)" },
            { "label": "Charging", "value": "10 minutes charge for 7 hours playback" },
        ],
        "technicalData": [
            { "label": "Touch Controls", "value": "Yes (volume control, music playback, call control)" },
            { "label": "OnePlus Audio ID 2.0", "value": "Personalized audio experience" },
            { "label": "Weight", "value": "4.3 grams per bud" },
            { "label": "Colors", "value": "Splendid Blue, Metallic Gray" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
            OnePlusBuds311,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [OnePlusBudsSlider11]
            },
            {
                img: [OnePlusBudsSlider21, OnePlusBudsSlider22, OnePlusBudsSlider23]
            },
            {
                img: [OnePlusBudsSlider31, OnePlusBudsSlider32, OnePlusBudsSlider33]
            },
            {
                img: [OnePlusBudsSlider41, OnePlusBudsSlider42, OnePlusBudsSlider43]
            },
            {
                img: [OnePlusBudsSlider51, OnePlusBudsSlider52, OnePlusBudsSlider53, OnePlusBudsSlider54]
            },
        ],
        heading: 'From the manufacturer',
    };
    const JBLWaveFlex = {
        name: 'JBL Newly Launched Wave Flex in-Ear Wireless Earbuds TWS with Mic,App for Custom Extra Bass EQ, 32Hrs Battery, Quick Charge, IP54 Water & Dust Proof, Ambient Aware, Talk-Thru,Google FastPair (Black)',
        price: '₹2,999',
        mrp: '₹4,999',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color:',
        imgData: [
            JBLWaveFlex11,
            JBLWaveFlex12,
            JBLWaveFlex13,
            JBLWaveFlex14,
            JBLWaveFlex15,
            JBLWaveFlex16,
        ],
        "productData": [
            { "label": "Brand", "value": "JBL" },
            { "label": "Model Name", "value": "Wave Flex" },
            { "label": "Form Factor", "value": "In-Ear (TWS - True Wireless Stereo)" },
            { "label": "Microphone", "value": "Yes" },
            { "label": "App Support", "value": "JBL Headphones App for EQ customization and other features" },
        ],
        "technicalData": [
            { "label": "Drivers", "value": "12mm drivers" },
            { "label": "Water Resistance", "value": "IP54 rating (dust and water resistant)" },
            { "label": "Battery Life", "value": "Up to 8 hours playback (buds only), up to 24 hours playback with charging case (according to JBL)" },
            { "label": "Charging", "value": "Speed charge: 2 hours playback time in 10 minutes" },
            { "label": "Connectivity", "value": "Bluetooth (version not confirmed yet, check JBL website for details)" },
            { "label": "Special Features", "value": "Ambient Aware and TalkThru technology for situational awareness" },
            { "label": "VoiceAware", "value": "Balance your own voice during calls" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
            JBLWaveFlex11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [OnePlusBudsSlider11]
            },
            {
                img: [OnePlusBudsSlider21, OnePlusBudsSlider22, OnePlusBudsSlider23]
            },
            {
                img: [OnePlusBudsSlider31, OnePlusBudsSlider32, OnePlusBudsSlider33]
            },
            {
                img: [OnePlusBudsSlider41, OnePlusBudsSlider42, OnePlusBudsSlider43]
            },
            {
                img: [OnePlusBudsSlider51, OnePlusBudsSlider52, OnePlusBudsSlider53, OnePlusBudsSlider54]
            },
        ],
        heading: 'From the manufacturer',
    };
    const realmeBudsT300 = {
        name: 'realme Buds T300 TWS Earbuds with 40H Play time,30dB ANC, 360° Spatial Audio with Dolby Atmos, 12.4 mm Dynamic Bass Boost Driver, IP55 Water & Dust Resistant, BT v5.3 (Stylish Black)',
        price: '₹2,999',
        mrp: '₹3,999',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color',
        imgData: [
            realmeBudsT30011,
            realmeBudsT30012,
            realmeBudsT30013,
            realmeBudsT30014,
            realmeBudsT30015,
            realmeBudsT30016,
        ],
        "productData": [
            { "label": "Brand", "value": "realme" },
            { "label": "Model Name", "value": "Buds T300" },
            { "label": "Form Factor", "value": "In-Ear (TWS - True Wireless Stereo)" },
            { "label": "Battery Life", "value": "Up to 40 hours total playback (buds and charging case combined)" },
            { "label": "Charging", "value": "10 minutes charge for 7 hours playback" },
            { "label": "Active Noise Cancellation (ANC)", "value": "Yes, up to 30dB" },
            { "label": "Audio Drivers", "value": "12.4mm dynamic bass boost driver" },
            { "label": "Water Resistance", "value": "IP55 dust and water resistant" },
        ],
        "technicalData": [
            { "label": "Connectivity", "value": "Bluetooth 5.3" },
            { "label": "Audio Codecs", "value": "Supports Dolby Atmos (with compatible devices)" },
            { "label": "Latency", "value": "50ms ultra-low latency for gaming" },
            { "label": "Touch Controls", "value": "Yes (music playback, call control, volume control)" },
            { "label": "Voice Assistant", "value": "Supports voice assistant activation" },
            { "label": "Colors", "value": "Stylish Black (other colors may be available)" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
            realmeBudsT30011,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };
    const boatAirdopes141 = {
        name: 'boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)',
        price: '₹1,299',
        mrp: '₹4,499',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color',
        imgData: [
            boatAirdopes14111,
            boatAirdopes14112,
            boatAirdopes14113,
            boatAirdopes14114,
            boatAirdopes14115,
            boatAirdopes14116,
        ],
        "productData": [
            { "label": "Brand", "value": "boAt" },
            { "label": "Model Name", "value": "Airdopes 141" },
            { "label": "Form Factor", "value": "In-Ear (TWS - True Wireless Stereo)" },
            { "label": "Playtime", "value": "Up to 6 hours per charge and additional 36 hours with case (at 60% volume)" },
            { "label": "Total Playtime", "value": "Up to 42 hours" },
            { "label": "Charging", "value": "ASAP™ Charge: 75 minutes of playback with just a 5-minute charge" },
            { "label": "Drivers", "value": "8mm drivers" },
            { "label": "Water Resistance", "value": "IPX4 sweat and water resistant" },
            { "label": "Bluetooth", "value": "Bluetooth v5.0" },
            { "label": "Microphone", "value": "Yes, with ENx™ Technology for clear calling" },
        ],
        "technicalData": [
            { "label": "Connectivity Range", "value": "10 meters" },
            { "label": "Touch Controls", "value": "Yes (multiple functions like music playback, calls, and voice assistant)" },
            { "label": "Voice Assistant", "value": "Supports voice assistant activation" },
            { "label": "Low Latency Mode", "value": "Yes, for gaming" },
            { "label": "Compatibility", "value": "Wide compatibility with various devices" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
            boatAirdopes14111,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };
    const boAtRockerz550 = {
        name: 'boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Mic Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation',
        price: '₹1,999',
        mrp: '₹4,999',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color:',
        imgData: [
            boatRockerz55011,
            boatRockerz55012,
            boatRockerz55013,
            boatRockerz55014,
            boatRockerz55015,
        ],
        "productData": [
            { "label": "Brand", "value": "boAt" },
            { "label": "Model Name", "value": "Rockerz 550" },
            { "label": "Form Factor", "value": "Over-Ear" },
            { "label": "Connectivity", "value": "Bluetooth v5.0" },
            { "label": "Battery", "value": "Up to 20 hours playback time (according to boAt)" },
            { "label": "Drivers", "value": "50mm dynamic drivers" },
            { "label": "Playback Controls", "value": "Yes (on-ear cup controls)" },
            { "label": "Microphone", "value": "Yes" },
            { "label": "Water Resistance", "value": "No (check for updates on boAt website)" },
            { "label": "Noise Cancellation", "value": "No Active Noise Cancellation (ANC)" },
        ],
        "technicalData": [
            { "label": "Other Features", "value": "Ergonomic design for comfort, Dual connectivity (Bluetooth and AUX)" },
            { "label": "Weight", "value": "Available in various sources, check boAt website for details" },
            { "label": "Colors", "value": "Multiple color options available (check retailer websites)" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
            boatRockerz55011,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: [boAtRockerz550Slider11, boAtRockerz550Slider12, boAtRockerz550Slider13]
            },
            {
                img: [boAtRockerz550Slider21]
            },
            {
                img: [boAtRockerz550Slider31, boAtRockerz550Slider32, boAtRockerz550Slider33]
            }
        ],
        heading: 'From the manufacturer',
    };
    const zebronicsThunder = {
        name: 'ZEBRONICS Thunder Bluetooth 5.3 Wireless Over Ear Headphones with 60H Backup, Gaming Mode, Dual Pairing, ENC, AUX, Micro SD, Voice Assistant, Comfortable Earcups, Call Function',
        price: '₹699',
        mrp: '₹1,599',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color',
        imgData: [
            zebronicsThunder11,
            zebronicsThunder12,
            zebronicsThunder13,
            zebronicsThunder14,
            zebronicsThunder15,
            zebronicsThunder16,
        ],
        "productData": [
            { "label": "Brand", "value": "ZEBRONICS" },
            { "label": "Model Name", "value": "Thunder" },
            { "label": "Form Factor", "value": "Over-Ear" },
            { "label": "Playback Type", "value": "Wireless (Bluetooth)" },
            { "label": "Battery Life", "value": "Up to 60 hours playback time (according to ZEBRONICS)" },
            { "label": "Drivers", "value": "40mm drivers" },
            { "label": "Playback Controls", "value": "Yes (on-ear cup controls)" },
            { "label": "Microphone", "value": "Yes, with built-in mic for calls" },
            { "label": "Multiple Connectivity Options", "value": "Bluetooth 5.3, AUX input, MicroSD card slot" },
            { "label": "FM Radio", "value": "Yes" },
        ],
        "technicalData": [
            { "label": "Water Resistance", "value": "No information available (check ZEBRONICS website for updates)" },
            { "label": "Noise Cancellation", "value": "No mention of Active Noise Cancellation (ANC)" },
            { "label": "Colors", "value": "Multiple color options available (Black, Blue, Brown, Neon Yellow, Red, Sea Green, Teal Green)" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
            zebronicsThunder11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };
    const JBLTune510BT = {
        name: 'JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours Playtime, Pure Bass, Quick Charging, Dual Pairing, Bluetooth 5.0 & Voice Assistant Support for Mobile Phones',
        price: '₹3,499',
        mrp: '₹4,499',
        tax: 'Inclusive of all taxes',
        size: '',
        color: 'Color',
        imgData: [
            JBLTune510BT11,
            JBLTune510BT12,
            JBLTune510BT13,
            JBLTune510BT14,
            JBLTune510BT15,
            JBLTune510BT16,
        ],
        "productData": [
            { "label": "Brand", "value": "JBL" },
            { "label": "Model Name", "value": "Tune 510BT" },
            { "label": "Form Factor", "value": "On-Ear" },
            { "label": "Wireless Playback", "value": "Bluetooth 5.0" },
            { "label": "Battery Life", "value": "Up to 40 hours playtime (according to JBL)" },
            { "label": "Pure Bass Sound", "value": "JBL signature sound for clear audio with strong bass" },
            { "label": "Quick Charge", "value": "5-minute charge for 2 hours of playback" },
            { "label": "Multi-Point Connection", "value": "Effortlessly switch between two devices" },
            { "label": "Hands-Free Calls", "value": "Built-in microphone for easy call management" },
            { "label": "Lightweight Design", "value": "Comfortable for long listening sessions" },
        ],
        "technicalData": [
            { "label": "Voice Assistant Support", "value": "Access Siri or Google Assistant through a button" },
            { "label": "App Support", "value": "Not applicable (basic Bluetooth headphones)" },
            { "label": "Water Resistance", "value": "No information on water resistance (check JBL website for details)" },
            { "label": "Colors", "value": "Multiple color options available (check retailer websites)" },
        ],
        sizeOptions: [
        ],
        colorOptions: [
            JBLTune510BT11,
        ],
        colorChange: [
            () => {
                setImgShow(productDetails.imgData);
                setMainImg(firstImgData);
            },
        ],
        sliderImgSet: [
            {
                img: []
            },
        ],
        heading: '',
    };

    const getProductByName = (productName) => {
        switch (productName) {
            case 'samsungS24Ultra':
                return samsungS24Ultra;
            case 'iPhone15':
                return iPhone15;
            case 'iPhone14':
                return iPhone14;
            case 'iPhone15Pro':
                return iPhone15Pro;
            case 'iPhone15ProMax':
                return iPhone15ProMax;
            case 'iPadAir5thGen':
                return iPadAir5ThGen;
            case 'AppleAirPodsPro2Gen':
                return AppleAirPodsPro2Gen;
            case 'MacBookAirM2Chip':
                return MacBookAirM2Chip;
            case 'AppleCharger':
                return AppleCharger;
            case 'realmenarzo60X5G':
                return realmenarzo60X5G;
            case 'realmenarzo60':
                return realmenarzo60;
            case 'samsungM14':
                return samsungM14;
            case 'iqooZ6Lite':
                return iqooZ6Lite;
            case 'redmi12':
                return redmi12;
            case 'onePlusNordCE3Lite':
                return onePlusNordCE3Lite;
            case 'onePlusNordCE3':
                return onePlusNordCE3;
            case 'iqooZ7Pro':
                return iqooZ7Pro;
            case 'samsungM34':
                return samsungM34;
            case 'oneplus12r':
                return oneplus12r;
            case 'oneplus12':
                return oneplus12;
            case 'samsungZFlip5':
                return samsungZFlip5;
            case 'iqoo12':
                return iqoo12;
            case 'samsungZFold5':
                return samsungZFold5;
            case 'macBook-air-laptop-m1-chip':
                return MacBookAirM1Chip;
            case 'macBook-air-laptop-m3-chip':
                return MacBookAirM3Chip;
            case 'macbook-pro-m3-max-chip':
                return MacBookProM3MaxChip;
            case 'dell-15':
                return Dell15;
            case 'lenovo-ideaPad-slim-3':
                return LenovoIdeaPadSlim3;
            case 'asus-vivobook-14':
                return AsusVivobook14;
            case 'acer-aspire-lite-12th-gen':
                return AcerAspireLite12ThGen;
            case 'samsung-tab-A9-plus':
                return samsungTabA9Plus;
            case 'oneplus-pad':
                return onePlusPad;
            case 'xiaomi-pad-6':
                return xiaomiPad6;
            case 'apple-ipad-10th-gen-with-A14-bionic-chip':
                return iPad10ThGen;
            case 'apple-iPad-pro-11″-(4th-Generation):-with-M2-chip':
                return iPad11Pro4Gen;
            case 'oneplus-buds-3-in-ear-tws-bluetooth-earbuds':
                return OnePlusBuds3;
            case 'jbl-newly-launched-wave-flex-in-ear-wireless-earbuds-tws':
                return JBLWaveFlex;
            case 'realme-Buds-T300-TWS-Earbuds-with-40H-Play-time':
                return realmeBudsT300;
            case 'boAt-Airdopes-141-Bluetooth-TWS-Earbuds-with-42H-Playtime':
                return boatAirdopes141;
            case 'boAt-Rockerz-550-Bluetooth-Wireless-Over-Ear-Headphones':
                return boAtRockerz550;
            case 'zebronics-thunder':
                return zebronicsThunder;
            case 'JBL-Tune-510BT':
                return JBLTune510BT;
            default:
                return null;
        }
    };

    const productDetails = getProductByName(productNameId);


    const firstImgData = productDetails.imgData?.[0];
    const firstImgData2 = productDetails.imgData2?.[0];
    const firstImgData3 = productDetails.imgData3?.[0];
    const firstImgData4 = productDetails.imgData4?.[0];
    const [mainImg, setMainImg] = useState(firstImgData || null);
    const [imgShow, setImgShow] = useState(productDetails.imgData || []);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgSideBarContain}>
                        {imgShow.map((imgUrl, index) => (
                            <img
                                className={styles.imgSideBar}
                                src={imgUrl}
                                alt=''
                                key={index}
                                onMouseEnter={() => setMainImg(imgUrl)}
                            />
                        ))}
                    </div>
                    <div className={styles.mainImgContain}>
                        <img className={styles.mainImg} src={mainImg} alt='' />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.productName}>{productDetails.name}</h1>
                    <div className={styles.priceSection}>
                        <div className={styles.priceRow}>
                            {productDetails.price}
                            <div className={styles.mrpPrice}>M.R.P.: <span className={styles.realPrice}>{productDetails.mrp}</span></div>
                            <div className={styles.tax}>{productDetails.tax}</div>
                        </div>
                    </div>
                    <div className={styles.sizeContainer}>
                        <div className={styles.heading}>{productDetails.size}</div>
                        <div className={styles.sizeNumberContain}>
                            {productDetails.sizeOptions.map((sizeNo, index) => (
                                <span className={styles.sizeNumber} key={index}>{sizeNo}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.colorContainer}>
                        <div className={styles.heading}>{productDetails.color}</div>
                        <div className={styles.colorContain}>
                            {productDetails.colorOptions.map((colorImgs, index) => (
                                <img
                                    src={colorImgs}
                                    className={styles.colorImg}
                                    key={index}
                                    alt={productDetails.name}
                                    onClick={() => productDetails.colorChange[index]()}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.btnSection}>
                        <div className={styles.btnContain}>
                            <button className={styles.minusBtn} onClick={decrementQuantity}><FiMinus className={styles.minusIcon} /></button>
                            <span className={styles.showQuantity}>{quantity}</span>
                            <button className={styles.addBtn} onClick={incrementQuantity}><IoMdAdd className={styles.addIcon} /></button>
                        </div>
                    </div>
                    <div className={styles.buyBtnSection}>
                        <div className={styles.buyBtnContain}>
                            <button className={styles.buyBtn}>Buy Now</button>
                            <button className={styles.buyBtn}>Add to Cart</button>
                        </div>
                    </div>
                    <div className={styles.serviceContainer}>
                        <div className={`${styles['serviceRow']}  ${styles['top']}`}>
                            <div className={styles.iconContainer}>
                                <MdOutlineLocalShipping className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.headingCS}>Free Delivery</div>
                                <div className={styles.para}>Enter your Postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div className={`${styles['serviceRow']} ${styles['bottom']}`}>
                            <div className={styles.iconContainer}>
                                <LuPackage2 className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.headingCS}>Return Delivery</div>
                                <div className={styles.para}>Free 10 days Delivery Return. <span className={styles.detailSpan}>Details</span></div>
                            </div>
                        </div>
                    </div>
                    <Collapsible data={productDetails.productData} heading='Product Details' />
                    <Collapsible data={productDetails.technicalData} heading='Technical Details' />
                </div>
            </div>
            <Slider dataImgSlider={productDetails} />
        </>
    );
};

export default ProductDetail;
