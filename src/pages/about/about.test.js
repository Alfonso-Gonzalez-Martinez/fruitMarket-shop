import { render, screen } from '@testing-library/react';
import About from './About.js'
import aboutImage from './../../assets/about.jpg'



describe('About component is rendering correctly',() => {

    test('background image is rendered', () => {
        render(<About />)
        const backgroundImage = screen.getByTestId("about-image")
        expect(backgroundImage).toBeInTheDocument()
        expect(backgroundImage).toHaveStyle(`background-image: url(${aboutImage})`);
    })
    test('h1 About us is present', () => {
        render(<About />)
        const h1 = screen.getByText(/about us/i)
        expect(h1).toBeInTheDocument()
    })
    test('h2 to be rendered', () => {
        render(<About />)
        const h2= screen.getByText(/welcome to fruit market!/i)
        expect(h2).toBeInTheDocument()
    })
    test('p to be rendered', () => {
        render(<About />)
        const p = screen.getByText(/We are dedicated to providing/i)
        expect(p).toBeInTheDocument()
    })
    test('div hierarchical structure', () => {
        render(<About />)
        const container = screen.getByTestId("text-container")
        expect(container).toHaveClass("text-container")
        expect(container).toContainElement(screen.getByText(/about us/i))
        expect(container).toContainElement(screen.getByText(/welcome to fruit market!/i))
        expect(container).toContainElement(screen.getByText(/We are dedicated to providing/i))
    })
});