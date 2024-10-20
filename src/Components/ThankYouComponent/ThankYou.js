import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Use useNavigate
import './thankyou.css';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate hook
  const productName = location.state?.productName || 'Product';

  const handleContinueShopping = () => {
    navigate('/');  // Use navigate to redirect to the home page
  };

  return (
    <div className='thank-you-container'>
      <span className='you-cart'>Your Cart</span>
      <hr className='horizontal' />
      <h1 className='heading'>Thank you for your interest in {productName}!</h1>
      <img className='img' alt='plant-img' src=' https://res.cloudinary.com/draisdub8/image/upload/v1729255305/Easesmith%20Assignment/plant_1_ytsfdt.jpg' />
      <p className='text'>We will soon get in touch with you!</p>
      <button className='button' onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default ThankYou;
