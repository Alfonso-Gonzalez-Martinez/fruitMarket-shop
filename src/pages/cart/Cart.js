import { PRODUCTS } from "../../products";
import { ShopContext } from '../../context/shop-context';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import './Cart.css'


function Cart(){

    const {cartItems, getTotalAmount} = useContext(ShopContext) // from shop-context.
    const navigate = useNavigate() // Navigation button.
    const checkOut = () => {
        alert(`Thank you very much for your order, the final price is ${totalAmount}`)
    };

    const totalAmount = getTotalAmount() // Get the result of the function.
    return(
        <div className="cart">
            <div>
                <h1>Your Cart items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: {totalAmount}€</p>
                    <button onClick={() => navigate("/shop")}> Continue Shopping</button>
                    <button onClick={() => checkOut()}> Checkout </button>
                </div>
            ) : (
                <h1 id="cart-empty"> You haven't added any items yet. </h1>
            )}
        </div>
    )
}

export default Cart;

// We map PRODUCTS and we conditionally render (if the id in the cartItems matches one of the products in PRODUCT and is not 0) the <CarItem />
// Ternary operator to display the total amount and the continue Shopping button.