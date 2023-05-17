
import Navbar from './Components/Navbar';
import Catchy from './Components/Catchy';
import About from './Components/About';
import Services from './Components/Services';
import Marquee from './Components/Marquee';
import Getintouch from './Components/Getintouch';
import Footer from './Components/Footer';
import Why from './Components/Why';
import Work from './Components/Work';
import Life from './Components/Life@dcs';
import Rolling from './Components/rolling';
import Coe from './Components/Coe';
import Industries from './Components/Industries';
import Servicess from './Components/Servicess';

function App() {
  return (
    <div>
      <Navbar />
      <Catchy />
      <About />
      <Coe/>
      <Services />
      {/* <Servicess/> */}
      <Why/>
      <Industries/>
      <Marquee />
      <Life/>
      <Work/>
      <Getintouch />
      <Footer />
      {/* <Rolling/> */}

    </div>
  );
}

export default App;
