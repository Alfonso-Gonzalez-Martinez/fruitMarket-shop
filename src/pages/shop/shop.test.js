import { screen, render } from '@testing-library/react'
import Shop from './Shop.js'

jest.mock('../../products.js', () => ({ // Mock the products array
    PRODUCTS: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ]
}))

jest.mock('./Product.js', () => ({data}) => <div data-testid="product">{data.name}</div>) // Mock the Product nested component and simplify it

describe('Correct render of the elements in the Shop componet', () => {
    test('Does the form image display correctly', () => {
        render(<Shop />)
        const shopContainer = screen.getByTestId("shop-container")
        expect(shopContainer).toContainElement(screen.getByText(/online shop/i))
        expect(shopContainer).toContainElement(screen.getByTestId("shop-products"))
    })
    test('Render of the shop title', () => {
        render(<Shop />)
        const shopTitle = screen.getByText(/online shop/i)
        expect(shopTitle).toBeInTheDocument()
    })
    test('Render all the products according to my mock PRODUCTS file', () => {
        render(<Shop />)
        const products = screen.getAllByTestId("product");
        expect(products).toHaveLength(3)
    })
    test('Render each component with the correct data', () => {
        render(<Shop />)
        const products = screen.getAllByTestId("product");
        expect(products[0]).toHaveTextContent("Product 1")
        expect(products[1]).toHaveTextContent("Product 2")
        expect(products[2]).toHaveTextContent("Product 3")
    })
})