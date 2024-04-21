import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './AddToCart.module.css';
import { Link } from 'react-router-dom';

const AddToCart = () => {
    const { cartItems, clearCart } = useCart();

    return (
        <div className={styles.container}>
            {cartItems.length === 0 ? (
                <h1 className={styles.heading}>Your Cart is Empty</h1>
            ) : (
                <div>
                    <h1 className={styles.heading}>Your Cart</h1>
                    <div className={styles.row}>
                        {cartItems.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <Link to={`/product-details/${item.productNameId}`} className={styles.cardLink}>
                                    <div className={styles.imageContainer}>
                                        <img className={styles.cardImage} src={item.img} alt="" />
                                    </div>
                                </Link>
                                <div className={styles.cardDetail}>
                                    <div className={styles.cardLeft}>
                                        <h1 className={styles.cardHeading}>{item.name}</h1>
                                        <h3 className={styles.price}>{item.price}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {cartItems.length > 0 && (
                <button
                    className={styles.clearCartBtn}
                    onClick={clearCart}>Clear All Items</button>
            )}
        </div>
    );
};

export default AddToCart;
