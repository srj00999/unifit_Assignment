import React, { useEffect, useState } from 'react';
import '../Styles/ProductsList.css';
import Loader from './Loader';
import Modal from './Modal';

const ProductsList = ({ selectedCategory, selectedPriceRange, selectedRating }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const productsData = await res.json();
            setProducts(productsData);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    
    const filteredProducts = products.filter(product => {
        const meetsCategory = selectedCategory === "all" || product.category === selectedCategory;
        const meetsPrice = (() => {
            if (selectedPriceRange === "all") return true;
            const price = product.price;
            if (selectedPriceRange === "0-50") return price >= 0 && price <= 50;
            if (selectedPriceRange === "50-100") return price > 50 && price <= 100;
            if (selectedPriceRange === "100-200") return price > 100 && price <= 200;
            if (selectedPriceRange === "200") return price > 200;
        })();
        const meetsRating = selectedRating === "all" || product.rating.rate >= parseInt(selectedRating);

        return meetsCategory && meetsPrice && meetsRating;
    });

    
    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };
    console.log("...", isModalOpen)

    return (
        <div className='pdmaincontainer'>
            {loading ? (
                <Loader />
            ) : (
                <div className='pdboxcontainer'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className='pdcard'>
                                <div className='imgContainer'>
                                    <img src={product.image} alt={product.title} width="100" />
                                </div>
                                <div className='pddetails'>
                                    <h4>{product.title}</h4>
                                    <p>${product.price}</p>
                                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            )}
            {isModalOpen && (
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                    product={selectedProduct} 
                />
            )}
        </div>
    );
};

export default ProductsList;
