// src/components/CheckboxLabels.js
import React from 'react';
import './CheckboxLabels.css'

const CheckboxLabels = ({ selectedBrands, handleBrandChange, isVisible }) => {
    const brands = ['Samsung', 'Apple', 'OnePlus', 'Vivo', 'Lava', 'Oppo', 'Realme', 'Redmi', 'Poco', 'iQOO', 'Honor', 'Nothing', 'Motorola'];

    return (
        <div className="box-container">
            {brands.map((brand) => (
                <label key={brand} className="label-container">
                    <input
                        type="checkbox"
                        value={brand}
                        onChange={() => handleBrandChange(brand)}
                        checked={selectedBrands.includes(brand)}
                        className="checkbox"
                    />
                    {brand}
                </label>
            ))}
        </div>
    )
};

export default CheckboxLabels;
