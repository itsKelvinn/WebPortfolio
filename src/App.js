import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './assets/styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import Aboutme from './components/sections/Aboutme';
import Banner from './components/sections/Banner';
import Portfolio from './components/sections/Portfolio';
import Service from './components/sections/Service';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />    
      <Banner/>
      <Service/>  
      <Portfolio/>
      <Contact/>  
      <Footer />
      
    </>
  );
}

export default App;
