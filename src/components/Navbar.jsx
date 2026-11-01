import linkedin from '../assets/linkedin.svg'
import logo from '../assets/logo.svg'
import twitter from '../assets/twitter.svg'
import './Navbar.css'

function Navbar() {
    return (
        <header className="navbar">
            <a href="/">
                <img src={logo} alt="Afridev logo" className="logo" />
            </a>
            <nav className="navbar-links">
                <ul>
                    <li><a href="#home" className="current">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>       
                </ul>
            </nav>

            <div className="navbar-social">
                <a href="#">
                   <img src={twitter} alt="Twitter" /> 
                </a>
                <a href="#">
                    <img src={linkedin} alt="Linkedin" />
                </a>
            </div>
           
        </header>
    );
}

export default Navbar;