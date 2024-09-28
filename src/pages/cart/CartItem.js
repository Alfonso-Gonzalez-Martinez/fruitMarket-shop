import { useContext } from "react";
import { ShopContext } from '../../context/shop-context';

function CartItem(props){
    const {id, productName, price, productImage} = props.data // from Cart.
    const {cartItems, addToCart, removeFromCart, updateCartItemAmount} = useContext(ShopContext) // from shop-context.


    return(
        <div className="cartItem">
            <img src={productImage}/>
            <div className="description">
                <p>{productName}</p>
                <p>{price} €/kg</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;