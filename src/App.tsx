import Bottom from './components/bottom/Bottom';
import Hero from './components/hero/Hero';
import Navbar from './components/Navbar/Navbar';
import SectionOne from './components/section_one/SectionOne';
import SectionThree from './components/section_three/SectionThree';
import SectionTwo from './components/section_two/SectionTwo';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <div className="App font-poppins">
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Subscribe />
      <SectionThree />
      <Bottom />
    </div>
  );
}

export default App;
