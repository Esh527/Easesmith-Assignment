import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './product.css';

const products = [
  { id: 1, name: 'Monsterra', price: 299, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729407952/Easesmith%20Assignment/e1ce63ff429a0c018fd6e2e5dd614458_pekyro.jpg' },
  { id: 2, name: 'Monsterra', price: 399, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408492/Easesmith%20Assignment/7973d62829a030074ad8b6ad34_wbdupl.jpg' },
  { id: 3, name: 'Monsterra', price: 499, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408491/Easesmith%20Assignment/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu.jpg' },
  { id: 4, name: 'Monsterra', price: 599, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408491/Easesmith%20Assignment/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu.jpg' },
  { id: 5, name: 'Monsterra', price: 699, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729407952/Easesmith%20Assignment/e1ce63ff429a0c018fd6e2e5dd614458_pekyro.jpg' },
  { id: 6, name: 'Monsterra', price: 799, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408491/Easesmith%20Assignment/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu.jpg' },
  { id: 7, name: 'Monsterra', price: 299, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729407952/Easesmith%20Assignment/e1ce63ff429a0c018fd6e2e5dd614458_pekyro.jpg' },
  { id: 8, name: 'Monsterra', price: 399, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408492/Easesmith%20Assignment/7973d62829a030074ad8b6ad34_wbdupl.jpg' },
  { id: 9, name: 'Monsterra', price: 499, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408491/Easesmith%20Assignment/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu.jpg' },
  { id: 10, name: 'Monsterra', price: 599, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408491/Easesmith%20Assignment/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu.jpg' },
  { id: 11, name: 'Monsterra', price: 699, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729407952/Easesmith%20Assignment/e1ce63ff429a0c018fd6e2e5dd614458_pekyro.jpg' },
  { id: 12, name: 'Monsterra', price: 799, discount: 359, text: "Indoor Plant, Low maintenance", rattingImage: 'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg', ratting: 4.9, image: 'https://res.cloudinary.com/draisdub8/image/upload/v1729408491/Easesmith%20Assignment/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu.jpg' },
];

const ProductList = ({ onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(3); 
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const currentProducts = filteredProducts.slice(0, visibleCount);

  
  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 3); 
  };

  
  return (
    <div className="product-list">
      <h1>Products</h1>
      <input
        type="text" className='search-items'
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='containers'>
      <div>
        <aside>
          <img src='https://res.cloudinary.com/draisdub8/image/upload/v1729414701/Easesmith%20Assignment/Component_4_mpkjxw.jpg'/>
        </aside>
      </div>
      <div className="product-grid">
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      </div>

      {visibleCount < filteredProducts.length && ( 
        <div className="pagination">
          <button onClick={handleViewMore} className="view-more-button">View More</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
