import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Cta from './components/Cta';
import Port from './components/Port';
import Count from './components/Count';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TravelButton from './components/TravelButton';

function App() {
  return (
    <div className="App" class=''>
      <Header />
      <Home />
      <About />
      <Services />
      <Cta />
      <Port />
      <Count />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
      <TravelButton />
    </div>
  );
}

export default App;

