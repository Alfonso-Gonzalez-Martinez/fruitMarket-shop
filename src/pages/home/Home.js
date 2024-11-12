import homeImage from "./../../assets/home.jpg"
import {Link} from 'react-router-dom'
import './home.css'

function Home(){
    return(
        <div className="home-container" style={{backgroundImage: `url(${homeImage})`}} data-testid="home-container">
            <div className="welcome-container" >
                <h1>Welcome to Fruit Market</h1>
                <p>Take a look at our fresh fruits selection!</p>
            </div>
            <div className="offers-container">
                <h2>TODAY IN OFFER!</h2>
                <p>Come in the online store and take a look at our daily offers</p>
                <Link to="/shop"><button>Online Store</button></Link>
            </div>
        </div>
    )
}

export default Home;