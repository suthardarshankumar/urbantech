import React, { useState } from 'react';
import { PiShoppingCart } from "react-icons/pi";
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

const Card = ({ title, heading, images }) => {
    const { addToCart } = useCart();

    const [visibleCount, setVisibleCount] = useState(8);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 8);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                {heading} <span className={styles.atheading}></span>
                <span className={styles.title}>{title}</span>
            </h1>
            <div className={styles.row}>
                {images.slice(0, visibleCount).map((image, index) => (
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
            <div className={styles.btnRow}>
                {images.length > visibleCount && (
                    <button onClick={handleViewMore} className={styles.btn}>View More</button>
                )}
            </div>
        </div>
    );
};

export default Card;
