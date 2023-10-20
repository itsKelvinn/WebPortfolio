import './assets/styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import Aboutme from './components/sections/Aboutme';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />        
      <Footer />      
    </>
  );
}

export default App;
