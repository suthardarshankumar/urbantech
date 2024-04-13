import React from 'react'
import Card from '../common/Card/Card';
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


const ComputerAccessories = () => {

    const computerHeading = 'All Computer Accessories';
    const computerAccessoriesDataSet = [
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
    ]

    return (
        <>
            <Card images={computerAccessoriesDataSet} heading={computerHeading} />
        </>
    )
}

export default ComputerAccessories;