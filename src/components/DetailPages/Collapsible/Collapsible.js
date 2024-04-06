import React, { useState } from 'react';

//icons
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";


import styles from './Collapsible.module.css';

const Collapsible = ({ heading, data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`${styles['productDetailsContainer']}`}>
                <div className={`${styles['productDetailsSection']}`} onClick={toggleCollapsible}>
                    <div className={`${styles['productHeading']}`}>{heading}</div>
                    <div className={`${styles['iconsProduct']}`}>
                        {isOpen ? <FiMinus className={`${styles['productIcon']}`} /> : <IoMdAdd className={`${styles['productIcon']}`} />}
                    </div>
                </div>
                <div className={`${styles['tableContainer']} ${isOpen ? styles.open : styles.close}`}>
                    <table className={`${styles['table']}`}>
                        {data.map((item, index) => (
                            <tr key={index} className={`${styles['tableRow']}`}>
                                <th className={`${styles['rowHeading']}`}>{item.label}</th>
                                <td className={`${styles['rowData']}`}>{item.value}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Collapsible;