import React from 'react';
import Card from '../../common/Card/Card';
import samsungTabA9Plus from '../../../assets/Img/TabletsAndiPads/Tablets/samsungTabA9Plus.png';
import OnePlusPadGo from '../../../assets/Img/TabletsAndiPads/Tablets/OnePlusPadGo.png'
import XiaomiPad6 from '../../../assets/Img/TabletsAndiPads/Tablets/XiaomiPad6.png';
import OnePlusPad from '../../../assets/Img/TabletsAndiPads/Tablets/OnePlusPad.png';
import samsungTabS9FEPlus from '../../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9FEPlus.png';
import samsungTabS9FE from '../../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9FE.png';
import honorPad8 from '../../../assets/Img/TabletsAndiPads/Tablets/honorPad8.png';
import LenovoTabM11 from '../../../assets/Img/TabletsAndiPads/Tablets/LenovoTabM11.png';
import motorolaTabG70 from '../../../assets/Img/TabletsAndiPads/Tablets/motorolaTabG70.png';
import samsungTabS9 from '../../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9.png';
import samsungTabS9Plus from '../../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9Plus.png';
import samsungTabS9Ultra from '../../../assets/Img/TabletsAndiPads/Tablets/samsungTabS9Ultra.png';
import samsungTabS8Plus from '../../../assets/Img/TabletsAndiPads/Tablets/samsungTabS8Plus.png';

const Tablets = () => {

    const tabletsTitle = 'Tablets';
    const tabletsDataSet = [
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

    ]

    return (
        <>
            <Card images={tabletsDataSet} heading={tabletsTitle} />
        </>
    )
}

export default Tablets;