import React from 'react';
import './CheckboxLabels.css'

const CheckboxLabels = ({ selectedBrands, handleBrandChange, brand }) => {
    const brands = Array.isArray(brand) ? brand : [];

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
    );
};

export default CheckboxLabels;