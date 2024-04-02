import React from 'react';
import { PiShoppingCart } from "react-icons/pi";
import styles from './Card.module.css';

const Cart = ({ title, heading, images }) => {
    return (
        <>
            <div className={`${styles['container']}`}>
                <h1 className={styles.heading}>{heading} <span className={styles.atheading}></span>
                    <span className={`${styles['title']}`}>{title}</span>
                </h1>
                <div className={styles.row}>
                    {images.map((image, index) => (

                        <div className={styles.card} key={index}>
                            <div className={styles.imageContainer}>
                                <img className={styles.cardImage} src={image.img} alt="" />
                            </div>
                            <div className={styles.cardDetail}>
                                <div className={styles.cardLeft}>
                                    <h1 className={styles.cardHeading}>{image.name}</h1>
                                    <h3 className={styles.price}>{image.price}</h3>
                                </div>
                                <div className={styles.cardRight}>
                                    <span className={styles.iconContain}>
                                        <PiShoppingCart className={styles.cartIcon} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cart;
