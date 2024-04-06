import React, { useState } from 'react';
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

import styles from './QuantityBtn.module.css';

const QuantityBtn = () => {

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        };
    };

    return (
        <>
            <div className={styles.btnSection}>
                <div className={styles.btnContain}>
                    <button className={styles.minusBtn} onClick={decrementQuantity}><FiMinus className={styles.minusIcon} /></button>
                    <span className={styles.showQuantity}>{quantity}</span>
                    <button className={styles.addBtn} onClick={incrementQuantity}><IoMdAdd className={styles.addIcon} /></button>
                </div>
            </div>
        </>
    )
}

export default QuantityBtn;