import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartModal from '../ModalComponent/AddToCartModal';
import './product.css';


const ProductCard = ({ product, onAddToCart }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
  
    const viewProduct = () => {
      navigate('/thankyou', { state: { productName: product.name } });
    };
  
    const addToCart = () => {
      onAddToCart(product);  
      setModalOpen(true);
    };
  
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div><button onClick={viewProduct} className='btn'>View Product</button></div>
        <div>
        <div className='product-detail-container'> 
          <h3 className='product-detail-container'>{product.name}</h3><p className='product-para'>{product.text}</p>
        </div>
        <div className='product-rating'> <img alt='ratting-img' src={product.rattingImage} className='product-rating-img'/><p>{product.ratting}</p></div>
        <div className='product-price-container'>
          <p className='product-discount'>₹{product.discount}</p><p className='product-price'>₹{product.price}</p> 
          </div>
        </div>
        <div className="button-group">
          
          <button onClick={addToCart}  className="Add-to-Cart-button"> - Add to Cart +</button> <button  className="Buy-on-Rent-button">Buy on Rent</button>
        </div>
        {modalOpen && <AddToCartModal product={product} closeModal={() => setModalOpen(false)} />}
      </div>
    );
  };
  
  export default ProductCard;
  