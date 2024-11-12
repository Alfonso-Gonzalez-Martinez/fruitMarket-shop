import {PRODUCTS} from '../../products.js'
import Product from './Product.js';
import './Shop.css'


function Shop(){
    return(
        <div className="shop-container" data-testid="shop-container">
            <div className="shop-title">
                <h1>Online Shop</h1>
            </div>
            <div className="shop-products" data-testid="shop-products">{PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
            </div>
        </div>
    )
}

export default Shop;

// The Shop maps the PRODUCTS constant (array of objects) as products into the Product component and passes the data through props.