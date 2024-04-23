import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './AddToCart.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";

const AddToCart = () => {
    const { cartItems, clearCart, removeFromCart } = useCart();
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/[₹,]/g, '')), 0);

    return (
        <div className={styles.container}>
            {cartItems.length === 0 ? (
                <h1 className={styles.heading}>Your Cart is Empty</h1>
            ) : (
                <div>
                    <div className={styles.headingContain}>
                        <h1 className={styles.heading}>Your Cart</h1> <h1 className={styles.totalPrice}>Total Price: ₹{totalPrice.toFixed(2)}</h1>
                    </div>
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
                                    <div className={styles.cardRight}>
                                        <span className={styles.iconContain}>
                                            <button
                                                className={styles.cartButton}
                                                onClick={() => removeFromCart(item.productNameId)}>
                                                <AiOutlineDelete className={styles.cartIcon} />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {cartItems.length > 0 && (
                <div className={styles.btnContainer}>
                    <button
                        className={styles.clearCartBtn}
                        onClick={clearCart}>Clear All Items</button>
                    <Link to='/shipping-address'>
                        <button
                            className={styles.buyBtn}>Buy</button>
                    </Link>
                </div>
            )}

        </div>
    );
};

export default AddToCart;
