// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [productPageDetails, setProductPageDetails] = useState(null);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productNameId) => {
        setCartItems(cartItems.filter(item => item.productNameId !== productNameId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const productPage = (productDataSet) => {
        setProductPageDetails(productDataSet);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, productPage, productPageDetails }}>
            {children}
        </CartContext.Provider>
    );
};
