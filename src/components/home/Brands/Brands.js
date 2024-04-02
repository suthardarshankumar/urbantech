import React from 'react';
import styles from './Brands.module.css';
import AppleLogo from '../../../assets/Img/HomeImg/BrandsImg/apple.webp';
import DellLogo from '../../../assets/Img/HomeImg/BrandsImg/dell.webp';
import HpLogo from '../../../assets/Img/HomeImg/BrandsImg/hp.webp';
import JblLogo from '../../../assets/Img/HomeImg/BrandsImg/jbl.webp';
import LenovoLogo from '../../../assets/Img/HomeImg/BrandsImg/lenovo.webp';
import MiLogo from '../../../assets/Img/HomeImg/BrandsImg/mi.webp';
import OppoLogo from '../../../assets/Img/HomeImg/BrandsImg/oppo.webp';
import RealmeLogo from '../../../assets/Img/HomeImg/BrandsImg/realme.webp';
import SamsungLogo from '../../../assets/Img/HomeImg/BrandsImg/samsung.webp';
import SonyLogo from '../../../assets/Img/HomeImg/BrandsImg/sony.webp';
import VivoLogo from '../../../assets/Img/HomeImg/BrandsImg/vivo.webp';

const Brands = () => {

    const BrandsLogo = [AppleLogo, DellLogo, HpLogo, JblLogo, LenovoLogo, MiLogo, OppoLogo, RealmeLogo, SamsungLogo, SonyLogo, VivoLogo];

    return (
        <>
            <div className={`${styles['container']}`}>
                <h1 className={`${styles['heading']}`}>Top Brands</h1>
                <div className={`${styles['row']}`}>
                    {BrandsLogo.map((images, index) => (
                        <img className={`${styles['img']}`} src={images} alt='' key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Brands;