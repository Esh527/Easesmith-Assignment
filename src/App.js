import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import ProductList from './Components/ProductComponent/ProductList';
import ThankYou from './Components/ThankYouComponent/ThankYou';
import Nursery from './Components/NurseryComponent/Nursery';
import PlantPots from './Components/PlantPlotsComponent/PlantPots'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Handler to add items to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <p className='header-top-sections'>
          Free Shipping on orders above 999/- <span>Call us on: +91 9876805120</span>
        </p>
        <Header cartCount={cartItems.length} />
        <PlantPots/>
        <Nursery/>
        <Routes>
          
          <Route 
            path="/" 
            element={<ProductList onAddToCart={handleAddToCart} />} 
          />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/HeaderComponent/Header';
// import Footer from './Components/FooterComponent/Footer';
// import ProductList from './Components/ProductComponent/ProductList';
// import ThankYou from './Components/ThankYouComponent/ThankYou';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <p className='header-top-sections'>Free Shipping on orders above 999/- <span>Call us on: +91 9876805120</span></p>
//         <Header />
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/thankyou" element={<ThankYou />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
