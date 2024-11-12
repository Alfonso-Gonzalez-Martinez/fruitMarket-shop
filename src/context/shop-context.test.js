import { render, screen, fireEvent } from '@testing-library/react';
import ShopContextProvider, { ShopContext } from '../context/shop-context';
import { useContext } from 'react';

jest.mock('../products', () => ({
    PRODUCTS: [
        { id: 1, productName: 'Pineapples', price: 25 },
        { id: 2, productName: 'Bananas', price: 15 },
    ],
}));

const TestComponent = () => {
    const { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalAmount } = useContext(ShopContext);
    return (
        <div>
            <button onClick={() => addToCart(1)}>Add Pineapple</button>
            <button onClick={() => removeFromCart(1)}>Remove Pineapple</button>
            <button onClick={() => updateCartItemAmount(3, 1)}>Set Pineapple to 3</button>
            <div>Cart Item 1: {cartItems[1]}</div>
            <div>Total Amount: {getTotalAmount()}</div>
        </div>
    );
};

describe('ShopContext', () => {
    test('adds item to cart', () => {
        render(
            <ShopContextProvider>
                <TestComponent />
            </ShopContextProvider>
        );

        expect(screen.getByText('Cart Item 1: 0')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Add Pineapple'));
        expect(screen.getByText('Cart Item 1: 1')).toBeInTheDocument();
    });

    test('removes item from cart', () => {
        render(
            <ShopContextProvider>
                <TestComponent />
            </ShopContextProvider>
        );

        fireEvent.click(screen.getByText('Add Pineapple'));
        fireEvent.click(screen.getByText('Add Pineapple'));
        fireEvent.click(screen.getByText('Remove Pineapple'));
        expect(screen.getByText('Cart Item 1: 1')).toBeInTheDocument();
    });

    test('updates item amount in cart', () => {
        render(
            <ShopContextProvider>
                <TestComponent />
            </ShopContextProvider>
        );

        fireEvent.click(screen.getByText('Set Pineapple to 3'));
        expect(screen.getByText('Cart Item 1: 3')).toBeInTheDocument();
    });

    test('calculates total amount correctly', () => {
        render(
            <ShopContextProvider>
                <TestComponent />
            </ShopContextProvider>
        );

        fireEvent.click(screen.getByText('Add Pineapple'));
        fireEvent.click(screen.getByText('Add Pineapple'));
        expect(screen.getByText('Total Amount: 50')).toBeInTheDocument();
    });
});