import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="header">
                    <h1>We Help Build Great Software</h1>
                    <p>We're dedicated to delivering excellence, raising the bar for your business. Our pre-vetted professionals bring a proven track record, ensuring top-quality results for every project.</p>
                </div>
                <a className="btn" href="#contact">
                    Contact Us
                </a>
            </div>
        </section>
    );
}

export default Hero;