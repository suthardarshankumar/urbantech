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
    const MacBookAirM2Chip = {
        name: 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Starlight​',
        price: '₹1,25,999',
        mrp: '₹,135,999',
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
            default:
                return null;
        }
    };

    const productDetails = getProductByName(productNameId);;


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

    if (!productDetails) {
        return <div>Error: Product details not found</div>;
    }

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
