import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react' // logo from phosphor library
import './Navbar.css'
import logo from './../assets/logo.png'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-right">
                <Link to="/"><img src={logo} alt='Fruit Market Logo'></img></Link>
            </div>
            <div className="navbar-left">
                <ul className="links-container">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link id="cart-link" to="/cart" data-testid="cart-link"><ShoppingCart id="cart-logo" size={32}/></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;