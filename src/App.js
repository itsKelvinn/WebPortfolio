import './assets/styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import Aboutme from './components/sections/Aboutme';
import Banner from './components/sections/Banner';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />    
      <Banner/>
      <Footer />      
    </>
  );
}

export default App;
