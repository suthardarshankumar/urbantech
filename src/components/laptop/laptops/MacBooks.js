import React from 'react';
import Card from '../../common/Card/Card';
import Apple2022MacBookAirLaptopwithM2chip from '../../../assets/Img/Laptops/MacBooks/Apple2022MacBookAirLaptopwithM2chip.png';
import Apple2023MacBookAir15inchM2chip from '../../../assets/Img/Laptops/MacBooks/Apple2023MacBookAir15inchM2chip.png';
import Apple2023MacBookPro14inchM3chip from '../../../assets/Img/Laptops/MacBooks/Apple2023MacBookPro14inchM3chip.png';
import Apple2023MacBookPro16inchM3Maxchip from '../../../assets/Img/Laptops/MacBooks/Apple2023MacBookPro16inchM3Maxchip.png';
import Apple2023MacBookPro16inchM3Prochip from '../../../assets/Img/Laptops/MacBooks/Apple2023MacBookPro16inchM3Prochip.png';
import Apple2024MacBookAir15inchLaptopwithM3chip from '../../../assets/Img/Laptops/MacBooks/Apple2024MacBookAir15inchLaptopwithM3chip.png';
import MacBookAir13inchLaptopwithM3chip from '../../../assets/Img/Laptops/MacBooks/MacBookAir13inchLaptopwithM3chip.png';
import MacBookAirLaptopM1chip from '../../../assets/Img/Laptops/MacBooks/MacBookAirLaptopM1chip.png';

const MacBooks = () => {

    const macbookHeading = 'MacBook';
    const macbookDataSet = [
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
    ]

    return (
        <>
            <Card images={macbookDataSet} heading={macbookHeading} />
        </>
    )
}

export default MacBooks;