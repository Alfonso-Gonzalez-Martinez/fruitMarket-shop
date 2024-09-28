import aboutImage from './../../assets/about.jpg'
import './about.css'

function About(){
    return(
        <div className="about-container">
            <div className="image-container" style={{backgroundImage: `url(${aboutImage})`}}>
            </div>
            <div className="text-container">
                <div className="card-container">
                <h1>About Us</h1>
                <h2>Welcome to Fruit Market!</h2>
                <p> We are dedicated to providing our community with the freshest, high-quality fruits, sourced directly from local farmers.<br/>
                    Our mission is to promote healthy eating and support local agriculture. Thank you for choosing Fruit Market, where freshness meets convenience!</p>

                </div>
            </div>
        </div>
    )
}

export default About;