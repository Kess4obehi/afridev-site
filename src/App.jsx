import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Reviews />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;