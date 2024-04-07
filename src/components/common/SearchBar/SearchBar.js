// SearchBar.js
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import styles from './SearchBar.module.css';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.searchContain}>
                <Link to={`/search-result?query=${encodeURIComponent(searchTerm)}`}>
                    <FaSearch className={styles.searchIcon} />
                </Link>
                <input
                    type="text"
                    placeholder="UrbanTech.in"
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SearchBar;
