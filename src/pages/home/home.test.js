import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home.js'
import homeImage from './../../assets/home.jpg'
import ShopContextProvider from '../../context/shop-context.js'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from '../shop/Shop.js'



describe('Home component is rendering correctly',() => {

    test('background image is rendered', () => {
        render(
        <Router>
            <ShopContextProvider>
                <Home />
            </ShopContextProvider>
        </Router>
        )
        const backgroundImage = screen.getByTestId("home-container")
        expect(backgroundImage).toBeInTheDocument()
        expect(backgroundImage).toHaveStyle(`background-image: url(${homeImage})`);
    })
    test('h1 Home us is present', () => {
        render(
            <Router>
                <ShopContextProvider>
                    <Home />
                </ShopContextProvider>
            </Router>
            )
        const h1 = screen.getByText(/Welcome to Fruit Market/i)
        expect(h1).toBeInTheDocument()
    })
    test('h2 to be rendered', () => {
        render(
            <Router>
                <ShopContextProvider>
                    <Home />
                </ShopContextProvider>
            </Router>
            )
        const h2= screen.getByText(/TODAY IN OFFER!/i)
        expect(h2).toBeInTheDocument()
    })
    test('p1 to be rendered', () => {
        render(
            <Router>
                <ShopContextProvider>
                    <Home />
                </ShopContextProvider>
            </Router>
            )
        const p1 = screen.getByText(/Take a look at our fresh fruits selection!/i)
        expect(p1).toBeInTheDocument()
    })
    test('p2 to be rendered', () => {
        render(
            <Router>
                <ShopContextProvider>
                    <Home />
                </ShopContextProvider>
            </Router>
            )
        const p2 = screen.getByText(/Come in the online store and take a look at our daily offers/i)
        expect(p2).toBeInTheDocument()
    })
    test('div hierarchical structure', () => {
        render(
            <Router>
                <ShopContextProvider>
                    <Home />
                </ShopContextProvider>
            </Router>
            )
        const container = screen.getByTestId("home-container")
        expect(container).toHaveClass("home-container")
        expect(container).toContainElement(screen.getByText(/Welcome to Fruit Market/i))
        expect(container).toContainElement(screen.getByText(/TODAY IN OFFER!/i))
        expect(container).toContainElement(screen.getByText(/Take a look at our fresh fruits selection!/i))
        expect(container).toContainElement(screen.getByText(/Come in the online store and take a look at our daily offers/i))
        expect(container).toContainElement(screen.getByRole("button", {name: "Online Store"}))
    })
    test('click on Online Store button and go there', () => {
        render(
            <ShopContextProvider>
                <Router>
                    <Routes>
                        <Route path="/shop" element={<Shop />} />
                    </Routes>
                <Home />
                </Router>
            </ShopContextProvider>
            )
        const shopButton = screen.getByRole("button", {name: "Online Store"})
        fireEvent.click(shopButton)
        expect(screen.getByText(/Online Shop/i)).toBeInTheDocument()
    })
});
