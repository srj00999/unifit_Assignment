import React from 'react';
import  "../Styles/filter.css"

const Filter = ({ 
    selectedCategory, setSelectedCategory, 
    selectedPriceRange, setSelectedPriceRange, 
    selectedRating, setSelectedRating 
}) => {
    return (
        <div className=' filtercontainer'>
            <div>
                <label>Category</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>
            <div>
                <label>Price</label>
                <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200">$200+</option>
                </select>
            </div>
            <div>
                <label>Rating</label>
                <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
                    <option value="all">All</option>
                    <option value="4"> ★★★★</option>
                    <option value="3">★★★</option>
                    <option value="2">★★</option>
                    <option value="1">★</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
