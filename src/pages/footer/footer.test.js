import { render, screen } from '@testing-library/react';
import Footer from './Footer.js'
import {HashRouter as Router} from 'react-router-dom'
import ShopContextProvider from '../../context/shop-context.js';



describe('Footer component is rendering correctly',() => {

    test('Footer is present', () => {
        render(
            <ShopContextProvider>
                <Router>
                    <Footer />
                </Router>
            </ShopContextProvider>)
        const footerContainer = screen.getByTestId("footer-container")
        expect(footerContainer).toBeInTheDocument()
        expect(footerContainer).toContainElement(screen.getByTestId("logos-container"))
        expect(footerContainer).toContainElement(screen.getByText(/fruit market/i))
    })
    test('logos-container to be rendered and contain all the links', () => {
        render(<ShopContextProvider>
                    <Router>
                        <Footer />
                    </Router>
                </ShopContextProvider>)
        const logosContainer= screen.getByTestId("logos-container")
        expect(logosContainer).toBeInTheDocument()

        const links = screen.getAllByRole("link")
        expect(logosContainer).toContainElement(links[0])
        expect(logosContainer).toContainElement(links[1])
        expect(logosContainer).toContainElement(links[2])
        expect(logosContainer).toContainElement(links[3])
        expect(links).toHaveLength(4)
        expect(links[0]).toContainHTML("<svg ")
        expect(links[1]).toContainHTML("<svg ")
        expect(links[2]).toContainHTML("<svg ")
        expect(links[3]).toContainHTML("<svg ")
    })
    test('p to be rendered', () => {
        render(<ShopContextProvider>
                <Router>
                    <Footer />
                </Router>
            </ShopContextProvider>)
        const p = screen.getByText(/fruit market/i)
        expect(p).toBeInTheDocument()
    })
});
