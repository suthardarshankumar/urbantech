import React from 'react';
import Card from '../../common/Card/Card';
import iPad10thGenA14 from '../../../assets/Img/TabletsAndiPads/iPads/iPad10thGenA14.png';
import iPadMini6thGenA15 from '../../../assets/Img/TabletsAndiPads/iPads/iPadMini6thGenA15.png';
import iPadPro114thGen from '../../../assets/Img/TabletsAndiPads/iPads/iPadPro114thGen.png';
import iPadPro116thGen from '../../../assets/Img/TabletsAndiPads/iPads/iPadPro116thGen.png';
import iPad9thGen from '../../../assets/Img/TabletsAndiPads/iPads/iPad9thGen.png';
import iPadPro2021 from '../../../assets/Img/TabletsAndiPads/iPads/iPadPro2021.png';
import iPadAir5thGen from '../../../assets/Img/TabletsAndiPads/iPads/iPadAir5thGen.png';

// import  from '../../../assets/Img/TabletsAndiPads/iPads';
// {
//     img: ,
//     name: "",
//     price: "₹",
// },

const Ipads = () => {

    const iPadsTitle = 'Apple iPad';
    const iPadsDataSet = [
        {
            img: iPad10thGenA14,
            name: "Apple iPad (10th Generation): with A14 Bionic chip",
            price: "₹36,999",
        }, {
            img: iPadPro114thGen,
            name: "Apple iPad Pro 11″ (4th Generation): with M2 chip",
            price: "₹89,999",
        }, {
            img: iPadPro116thGen,
            name: "Apple iPad Pro 12.9″ (6th Generation): with M2 chip",
            price: "₹1,12,999",
        }, {
            img: iPadMini6thGenA15,
            name: "Apple iPad Mini (6th Generation): with A15 Bionic chip",
            price: "₹49,999",
        },
        {
            img: iPadAir5thGen,
            name: "Apple iPad Air (5th Generation): with M1 chip",
            price: "₹72,999",
        },
        {
            img: iPad9thGen,
            name: "Apple iPad (9th Generation): with A13 Bionic chip",
            price: "₹29,999",
        },
        {
            img: iPadPro2021,
            name: "Apple 2021 iPad Pro M1 chip",
            price: "₹1,36,999",
        },
    ];

    return (
        <>
            <Card images={iPadsDataSet} heading={iPadsTitle} />
        </>
    )
}

export default Ipads;