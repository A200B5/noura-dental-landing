import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TrustStrip from './components/TrustStrip/TrustStrip';
import Services from './components/Services/Services';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
