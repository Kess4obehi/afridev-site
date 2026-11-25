import './Hero.css'
import hero1 from '../assets/hero-1.jpg'

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
                <img src={hero1} alt="" className='hero1'/>
            </div>
        </section>
    );
}

export default Hero;