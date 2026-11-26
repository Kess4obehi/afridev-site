import './Hero.css'
import heroPhoto1 from '../assets/hero-1.jpg'
import heroPhoto2 from '../assets/hero-2.jpg'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>We Help Build Great Software</h1>
                    <p>We're dedicated to delivering excellence, raising the bar for your business. Our pre-vetted professionals bring a proven track record, ensuring top-quality results for every project.</p>
                </div>
                <a className="btn" href="#contact">
                    Contact Us
                </a>
            </div>
            <div className="hero-images">
                <img src={heroPhoto1} alt="" className="hero-photo hero-photo-1"/>
                <img src={heroPhoto2} alt="" className="herp-photo hero-photo-2"/>
            </div>
        </section>
    );
}

export default Hero;