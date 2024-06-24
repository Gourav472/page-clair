import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Herosection from './components/Herosection';
import About from './components/About';
import Address from './components/Address';
import Tokenmics from './components/Tokenmics';
import Secure from './components/Secure';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from './components/Faq';
import Footer from './components/Footer';
import Social from './components/Social';
import Roadmap from './components/Roadmap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      easing: "ease-in-out",
    });

  }, [])
  return (
    <div className=' overflow-hidden'>
      <Herosection />
      <About />
      <Address />
      <Tokenmics />
      <Secure />
      <Roadmap />
      <Faq />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
