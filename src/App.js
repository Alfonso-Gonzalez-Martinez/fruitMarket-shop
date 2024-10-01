import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom' // HashRouter instead of BrowserRouter for Git Pages
import Navbar from './components/Navbar.js'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Cart from './pages/cart/Cart.js'
import Shop from './pages/shop/Shop.js'
import Contact from './pages/contact/Contact.js'
import Footer from './pages/footer/Footer.js'
import ShopContextProvider from './context/shop-context.js';

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

// Basic structure: Navbar, Routes(pages), Footer.
// Everything wrapped in a HOC ShopContextProvider.

// Rendering: PRODUCTS (export) > Shop (props) > Product 
// Context: shop-context (useContext) > product (addToCart) -- Pipe to change the state in the context from product.
// We use ShopContextProvider as our external shared folder. 