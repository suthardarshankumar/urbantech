import React from 'react';
import Card from '../../common/Card/Card';

import AcerAspireLite12Gen from '../../../assets/Img/Laptops/Window/AcerAspireLite12Gen.png';
import ASUSROGStrixG17 from '../../../assets/Img/Laptops/Window/ASUSROGStrixG17.png';
import ASUSVivobook14 from '../../../assets/Img/Laptops/Window/ASUSVivobook14.png';
import ASUSVivobook15 from '../../../assets/Img/Laptops/Window/ASUSVivobook15.png';
import Dell15 from '../../../assets/Img/Laptops/Window/Dell15.png';
import HONORMagicBookX16 from '../../../assets/Img/Laptops/Window/HONORMagicBookX16.png';
import HP14s from '../../../assets/Img/Laptops/Window/HP14s.png';
import HP15s from '../../../assets/Img/Laptops/Window/HP15s.png';
import LenovoIdeaPad311thGen from '../../../assets/Img/Laptops/Window/LenovoIdeaPad311thGen.png';
import LenovoIdeaPadSlim3 from '../../../assets/Img/Laptops/Window/LenovoIdeaPadSlim3.png';
import LenovoThinkBook15 from '../../../assets/Img/Laptops/Window/LenovoThinkBook15.png';
import LenovoThinkPadE14 from '../../../assets/Img/Laptops/Window/LenovoThinkPadE14.png';
import MicrosoftNewSurfaceLaptop5 from '../../../assets/Img/Laptops/Window/MicrosoftNewSurfaceLaptop5.png';


const Window = () => {

    const windowHeading = 'Window Laptops';
    const windowLaptopDataSet = [
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
    ]

    return (
        <>
            <Card images={windowLaptopDataSet} heading={windowHeading} />
        </>
    )
}

export default Window;