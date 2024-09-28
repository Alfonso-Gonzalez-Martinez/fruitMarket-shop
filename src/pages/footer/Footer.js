import {Link} from 'react-router-dom'
import {FacebookLogo, InstagramLogo, YoutubeLogo, PinterestLogo} from 'phosphor-react'
import './footer.css'



function Footer(){
    return(
        <div className="footer-container">
            <div className="logos-container">
                <Link><FacebookLogo size={40} /></Link>
                <Link><InstagramLogo size={40} /></Link>
                <Link><YoutubeLogo size={40} /></Link>
                <Link><PinterestLogo size={40} /></Link>
            </div>
            <p>&#169; Fruit Market</p>
        </div>
    )
}

export default Footer;