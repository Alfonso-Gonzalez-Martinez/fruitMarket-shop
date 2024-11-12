import { screen, render } from '@testing-library/react'
import Product from './Product'
import { ShopContext } from '../../context/shop-context';
import userEvent from '@testing-library/user-event';


const mockAddToCart = jest.fn();
const mockCartItems = { 1: 2 }

const ShopContextProvider = ({children}) => {
    return (
        <ShopContext.Provider value={{addToCart: mockAddToCart, cartItems: mockCartItems}}>
            {children}
        </ShopContext.Provider>
    )
}

describe('Check that the component renders correctly with all of its elements', () => {
    const productData = {
        id: 1,
        productName: "Apple",
        price: 355,
        productImage: 'https://example.com/apple.jpg'
    }

    test('Renders information of the product correctly', () => {
        render(
            <ShopContextProvider>
                <Product data={productData}/>
            </ShopContextProvider>
        )

        expect(screen.getByText("Apple")).toBeInTheDocument()
        expect(screen.getByText(/355/)).toBeInTheDocument()
        const image = screen.getByAltText('')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', 'https://example.com/apple.jpg')
        expect(screen.getByRole('button', {name: /Add to Cart/})).toBeInTheDocument()
    })

    test('Displays item count if present', () => {
        render(
            <ShopContextProvider>
                <Product data={productData}/>
            </ShopContextProvider>
        )
        expect(screen.getByRole('button', {name: "Add to Cart (2)"})).toBeInTheDocument()
    })

    test('addToCart is called when the button is clicked', () => {
        render(
            <ShopContextProvider>
                <Product data={productData}/>
            </ShopContextProvider>
        )
        const addButton = screen.getByRole('button', {name: "Add to Cart (2)"})
        userEvent.click(addButton)
        expect(mockAddToCart).toHaveBeenCalledTimes(1)
        expect(mockAddToCart).toHaveBeenCalledWith(1)
    })
})