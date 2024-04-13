import React from 'react';
import Card from '../common/Card/Card';

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


const MobileAccessories = () => {

    const titleHeading = 'All Mobile Accessories';
    const accessoriesDataSet = [
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
    ]

    return (
        <>
            <Card images={accessoriesDataSet} heading={titleHeading} />
        </>
    )
}

export default MobileAccessories;