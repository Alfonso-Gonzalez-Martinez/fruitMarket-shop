import { createContext, useState } from "react"
import {PRODUCTS} from '../products.js'

export const ShopContext = createContext(null);

const getDefaultCart = () => { // Creates the initial object that tracks the number of items according to their id
                               // and gives them an initial value of 0.
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};


function ShopContextProvider(props){ // HOC context approach. 

    const [cartItems, setCartItems] = useState(getDefaultCart()); // State of the cart with initial values.

    const getTotalAmount = () => { // Final price, using find to get the price of the products in relation to their id. It works because they are ordered. 
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0){ // If there are any items in cartItems, the value to the id is the amount. 
                                      // We find the product that has that id in PRODUCTS and access its price.
                                      // We multiply the price by the value stored in the value in cartItems[price].
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount;
    }

    const addToCart = (itemId) => { // It gets the previous state of CartItems and adds 1 to the id where the button was clicked.
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) => { // It gets the previous state of CartItems and takes 1 to the id where the button was clicked.
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemAmount = (newAmount, itemId) => { // It uses the input as a source to overwrite the id in the state.
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalAmount} // Everything that we share through context. 

    return(

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

// We use the Context as the source of state and utilities for the other components. 