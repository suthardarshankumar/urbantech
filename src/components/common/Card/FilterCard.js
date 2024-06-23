import React, { useState } from 'react';
import { PiShoppingCart } from "react-icons/pi";
import styles from './FilterCard.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import CheckboxLabels from '../CheckboxLabels/CheckboxLabels';


const FilterCard = ({ title, heading, images, brands }) => {
    const { addToCart } = useCart();
    const [visibleCount, setVisibleCount] = useState(8);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands((prevSelectedBrands) =>
            prevSelectedBrands.includes(brand)
                ? prevSelectedBrands.filter((b) => b !== brand)
                : [...prevSelectedBrands, brand]
        );
    };

    const filteredProducts = selectedBrands.length
        ? images.filter((product) => selectedBrands.includes(product.brand))
        : images;

    return (
        <div className={styles.container}>
            <div className={styles.secContainer}>
                <h1 className={styles.heading}>
                    {heading} <span className={styles.atheading}></span>
                    <span className={styles.title}>{title}</span>
                </h1>
            </div>
            <div className={styles.mainRow}>
                <CheckboxLabels
                    selectedBrands={selectedBrands}
                    handleBrandChange={handleBrandChange}
                    brand={brands}
                />
                <div className={styles.row}>
                    {filteredProducts.slice(0, visibleCount).map((image, index) => (
                        <div className={styles.card} key={index}>
                            <Link to={`/product-details/${image.productNameId}`} className={styles.cardLink}>
                                <div className={styles.imageContainer}>
                                    <img className={styles.cardImage} src={image.img} alt="" />
                                </div>
                            </Link>
                            <div className={styles.cardDetail}>
                                <div className={styles.cardLeft}>
                                    <h1 className={styles.cardHeading}>{image.name}</h1>
                                    <h3 className={styles.price}>{image.price}</h3>
                                </div>
                                <div className={styles.cardRight}>
                                    <span className={styles.iconContain}>
                                        <button className={styles.cartButton} onClick={() => addToCart(image)}>
                                            <PiShoppingCart className={styles.cartIcon} />
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.btnRow}>
                {images.length > visibleCount && (
                    <button onClick={handleViewMore} className={styles.btn}>View More</button>
                )}
            </div>
        </div>
    );
};

export default FilterCard;

