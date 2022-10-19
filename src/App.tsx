import { Fade } from 'react-awesome-reveal';
import Bottom from './components/Bottom';
import Collection from './components/Collection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Step from './components/Step';
import Testimony from './components/Testimony';

function App() {
  return (
    <div>
      <Navbar />
      <Fade triggerOnce={true}>
        <Hero />
        <Service />
        <Step />
        <Collection />
        <Testimony />
        <Bottom />
      </Fade>
    </div>
  );
}

export default App;
