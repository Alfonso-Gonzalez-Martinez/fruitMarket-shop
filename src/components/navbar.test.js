import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar.js'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import ShopContextProvider from '../context/shop-context.js';
import Home from '../pages/home/Home.js'
import About from '../pages/about/About.js'
import Shop from '../pages/shop/Shop.js'
import Cart from '../pages/cart/Cart.js'
import Contact from '../pages/contact/Contact.js'


describe('routes are correctly taking me to another page', () => {

    test('Home takes me to the home page', () => {
      render(
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
            </Router>
          </ShopContextProvider>)
        const homeLink = screen.getByText("Home")
        fireEvent.click(homeLink)
        expect(screen.getByText(/Welcome to Fruit Market/i)).toBeInTheDocument()
      })

    test('About takes me to the about page', () => {
      render(
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
            </Router>
          </ShopContextProvider>)
      const aboutLink = screen.getByText("About")
      fireEvent.click(aboutLink)
      expect(screen.getByText(/About Us/i)).toBeInTheDocument()
    })

    test('Shop takes me to the shop page', () => {
      render(
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
            </Router>
          </ShopContextProvider>)
      const shopLink = screen.getByText("Shop")
      fireEvent.click(shopLink)
      expect(screen.getByText(/Online Shop/i)).toBeInTheDocument()
    })

    test('Cart takes me to the cart page', () => {
      render(
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
            </Router>
          </ShopContextProvider>)
      const cartLink = screen.getByTestId("cart-link")
      fireEvent.click(cartLink)
      expect(screen.getByText(/your cart items/i)).toBeInTheDocument()
    })
})