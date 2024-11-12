import React, { useState } from 'react';
import ProductsList from './ProductsList';
import Filter from './Filter';
import '../Styles/Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  return (
    <div className='home-container'>
      <div className='home-subcontainer'>
        <div className='header'>
          <span>
            <p className='brandname'>UMART STORE</p>
          </span>
        </div>
        <div className='productlistcontainer'>
          <div className='productlistsubcontainer'>
            <Filter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </div>
          <div className='productlist'>
          <div className='selecteddiv'>
            <span>Electronics</span>
            <span className='featured'><select value="featured"> <option>featured</option></select>
            </span>
          </div>
            <ProductsList
              selectedCategory={selectedCategory}
              selectedPriceRange={selectedPriceRange}
              selectedRating={selectedRating}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
