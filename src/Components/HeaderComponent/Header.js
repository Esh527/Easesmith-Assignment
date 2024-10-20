import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartCount }) => {
    
  return (
    <div className='header-container'>
        
      <nav>
        <ul>
          <li>
            <img 
              src='https://res.cloudinary.com/draisdub8/image/upload/v1729265048/Easesmith%20Assignment/image_55_ijmivu.png' 
              alt="Chaperone Logo" 
            />
            <p>Chaperone</p>
          </li>
          <li><Link><a href="#home">Home</a></Link></li>
          <li><a href="#plants">Plants & Pots</a></li>
          <li>
            <a href="#tools">Tools</a>
            <ul>
              <li><a href="#gardening-tools">Gardening Tools</a></li>
              <li><a href="#pest-control">Pest Control</a></li>
              <li><a href="#fertilizers">Fertilizers</a></li>
              <li><a href="#watering-cans">Watering Cans</a></li>
              <li><a href="#accessories">Gardening Accessories</a></li>
            </ul>
          </li>
          <li>
            <a href="#services">Our Services</a>
            <ul>
              <li><a href="#book-maali">Book a Maali</a></li>
              <li><a href="#day-care">Plant Day Care</a></li>
              <li><a href="#rent-plants">Rent Plants</a></li>
            </ul>
          </li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#our-story">Our Story</a></li>
          <li><a href="#faqs">FAQ's</a></li>
        </ul>
      </nav>

      <div className='icon-container'>
        <div className='icon-item'>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <span>Profile</span>
        </div>
        <div className='icon-item'>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <span>Cart ({cartCount})</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
