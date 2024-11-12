import React from 'react';
import '../Styles/Modal.css';

const Modal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Product has been added to the cart!</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
