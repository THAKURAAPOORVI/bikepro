import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Guide from './components/Guide';
import Wall from './components/Wall';
import Review from './components/Review';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Contact/>
      <Explore/>
      
      <Guide/>

      <Wall/>
      <Review/>
      <Social/>
      <Footer/>
    </>
  );
}

export default App;
