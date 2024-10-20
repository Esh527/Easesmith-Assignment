import React from 'react';
import './modal.css';

const AddToCartModal = ({ product, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <p>Product has been added to your cart.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
