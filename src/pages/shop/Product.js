import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

function Product(props){

    const {id, productName, price, productImage} = props.data // from Shop.
    const {addToCart, cartItems} = useContext(ShopContext) // from shop-context.

    const cartItemAmount = cartItems[id]

    return(
        <div className="product">
            <img src={productImage} alt=''/>
            <div>
                <p>{productName}</p>
                <p> {price}€/kg</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    )
}

export default Product;

// This is the component that renders the product using the data from product.js through props.data
// The onClick is connected to the addToCart that comes from the Context.
// {cartItemAmount > 0 && <>({cartItemAmount})</>} -- If cartItemAmount is not 0, render the cartItemAmount in parenthesis.