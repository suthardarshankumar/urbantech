import React from 'react';
import styles from './ColorShow.module.css';

const ColorShow = ({ backgroundColor }) => {

    const colorStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <>
            <div style={colorStyle} className={styles.colorShow}></div>
        </>
    )
}

export default ColorShow;