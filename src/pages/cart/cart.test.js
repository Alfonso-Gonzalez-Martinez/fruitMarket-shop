import { render, screen, fireEvent } from '@testing-library/react';
import { ShopContext } from '../../context/shop-context';
import { MemoryRouter } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from './Cart';
import Shop from '../shop/Shop'


jest.mock('../../products', () => ({
    PRODUCTS: [
      { id: 1, productName: 'Pineapples', price: 25, productImage: '/pineapple.jpg' },
      { id: 2, productName: 'Bananas', price: 15, productImage: '/banana.jpg' },
    ],
}));

const mockCartItems = {
  1: 2,
  2: 3,
};
const mockGetTotalAmount = jest.fn();

const ShopContextProvider = ({children, cartItems = mockCartItems }) => {
    return (
        <ShopContext.Provider value={{ getTotalAmount: mockGetTotalAmount, cartItems }}>
            {children}
        </ShopContext.Provider>
    )
}

describe('Cart Component', () => {
  test('renders cart items when cart is not empty', () => {
    mockGetTotalAmount.mockImplementationOnce(() => 95); 
    render(
        <MemoryRouter>
            <ShopContextProvider>
                <Cart />
            </ShopContextProvider>
        </MemoryRouter>
    )

    expect(screen.getByText('Your Cart items')).toBeInTheDocument();
    expect(screen.getByText('Pineapples')).toBeInTheDocument();
    expect(screen.getByText('Bananas')).toBeInTheDocument();

    expect(screen.getByText('Subtotal: 95€')).toBeInTheDocument();
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Continue Shopping')).toBeInTheDocument();
  });
});

  test('shows "You haven\'t added any items yet." when cart is empty', async () => {
    const emptyCart = { 1: 0, 2: 0 };
    render(
      <MemoryRouter>
          <ShopContextProvider cartItems={emptyCart}>
              <Cart />
          </ShopContextProvider>
      </MemoryRouter>
  )
    expect(screen.getByText("You haven't added any items yet.")).toBeInTheDocument();
    expect(screen.queryByText('Checkout')).not.toBeInTheDocument();
  });


  test('checkout button calls the correct function when clicked', () => {

    mockGetTotalAmount.mockImplementationOnce(() => 95); 
    render(
      <MemoryRouter>
          <ShopContextProvider>
              <Cart />
          </ShopContextProvider>
      </MemoryRouter>
  )
    const checkoutButton = screen.getByText('Checkout');
    window.alert = jest.fn();
    checkoutButton.click();
    expect(window.alert).toHaveBeenCalledWith('Thank you very much for your order, the final price is 95');

});

  test('check that the Continue Shopping button reroutes us to the Shop', () => {

    mockGetTotalAmount.mockImplementationOnce(() => 95);
    render(
      <ShopContextProvider>
        <Router>
            <Routes>
              <Route path="/shop" element={<Shop />} />
            </Routes>
            <Cart />
          </Router>
      </ShopContextProvider>
  )
  const continueShoppingButton = screen.getByText('Continue Shopping')
  fireEvent.click(continueShoppingButton)
  expect(screen.getByText("Online Shop")).toBeInTheDocument()
  })

