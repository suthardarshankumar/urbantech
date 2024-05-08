import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { LuPackage2 } from 'react-icons/lu';
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import styles from './ProductDetail.module.css';
import Collapsible from '../../../components/DetailPages/Collapsible/Collapsible';
import Slider from '../../../components/DetailPages/Slider/Slider';
import { useCart } from '../../../context/CartContext';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const { productPageDetails } = useCart(); // Changed from { ProductPage } to { productPageDetails }

    // Ensure productPageDetails is defined before accessing its properties
    const firstImgData = productPageDetails?.imgData?.[0];
    const firstImgData2 = productPageDetails?.imgData2?.[0];
    const firstImgData3 = productPageDetails?.imgData3?.[0];
    const [mainImg, setMainImg] = useState(firstImgData || null);
    const [imgShow, setImgShow] = useState(productPageDetails?.imgData || []);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleColorChange = (index) => {
        switch (index) {
            case 0:
                setImgShow(productPageDetails?.imgData);
                setMainImg(firstImgData);
                break;
            case 1:
                setImgShow(productPageDetails?.imgData2);
                setMainImg(firstImgData2);
                break;
            case 2:
                setImgShow(productPageDetails?.imgData3);
                setMainImg(firstImgData3);
                break;
            default:
                break;
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
                    <h1 className={styles.productName}>{productPageDetails?.name}</h1>
                    <div className={styles.priceSection}>
                        <div className={styles.priceRow}>
                            {productPageDetails?.price}
                            <div className={styles.mrpPrice}>M.R.P.: <span className={styles.realPrice}>{productPageDetails?.mrp}</span></div>
                            <div className={styles.tax}>{productPageDetails?.tax}</div>
                        </div>
                    </div>
                    <div className={styles.sizeContainer}>
                        <div className={styles.heading}>{productPageDetails?.size}</div>
                        <div className={styles.sizeNumberContain}>
                            {productPageDetails?.sizeOptions.map((sizeNo, index) => (
                                <span className={styles.sizeNumber} key={index}>{sizeNo}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.colorContainer}>
                        <div className={styles.heading}>{productPageDetails?.color}</div>
                        <div className={styles.colorContain}>
                            {productPageDetails?.colorOptions.map((colorImgs, index) => (
                                <img
                                    src={colorImgs}
                                    className={styles.colorImg}
                                    key={index}
                                    alt={productPageDetails?.name}
                                    onClick={() => handleColorChange(index)}
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
                        <div className={`${styles.serviceRow} ${styles.top}`}>
                            <div className={styles.iconContainer}>
                                <MdOutlineLocalShipping className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.headingCS}>Free Delivery</div>
                                <div className={styles.para}>Enter your Postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div className={`${styles.serviceRow} ${styles.bottom}`}>
                            <div className={styles.iconContainer}>
                                <LuPackage2 className={styles.icon} />
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.headingCS}>Return Delivery</div>
                                <div className={styles.para}>Free 10 days Delivery Return. <span className={styles.detailSpan}>Details</span></div>
                            </div>
                        </div>
                    </div>
                    <Collapsible data={productPageDetails?.productData} heading='Product Details' />
                    <Collapsible data={productPageDetails?.technicalData} heading='Technical Details' />
                </div>
            </div>
            <Slider dataImgSlider={productPageDetails} />
        </>
    );
};

export default ProductPage;
