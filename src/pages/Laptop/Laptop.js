import React from 'react';
import styles from './Laptop.module.css';
import LatestLaptops from '../../components/laptop/LatestLaptops/LatestLaptops';
import MacBooks from '../../components/laptop/laptops/MacBooks';
import Window from '../../components/laptop/laptops/Window';
import SearchBar from '../../components/common/SearchBar/SearchBar';


const Laptop = () => {
    return (
        <>
            <div className={styles.container}>
                <SearchBar />
                <LatestLaptops />
                <MacBooks />
                <Window />
            </div>
        </>
    )
}

export default Laptop;