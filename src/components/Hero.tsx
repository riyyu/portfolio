import { Fade } from 'react-awesome-reveal';

import HeroImg from '../assets/hero.png';

import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="my-3 rounded-3xl w-full text-white bg-dark-gunmetal-500 p-20 ">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-[3.25rem] font-semibold mb-4">Upgrade Your Space More Comfortable</p>
            <p className="font-normal w-[28rem]">
              Find various Aeki collections at special prices here. Make your dream meeting room
              comfortable and fun. Create a Dream Home. Aeki Official Website.
            </p>
            <div className="flex gap-2 my-12">
              <button className="bg-vivid-tangelo-500 px-8 py-2 rounded-md font-medium">
                Get Started
              </button>
              <button className="bg-vivid-tangelo-500 px-8 py-2 rounded-md font-medium bg-opacity-20 text-vivid-tangelo-600">
                Download App
              </button>
            </div>
            <div className="flex gap-3 ">
              <img src={Logo1} alt="Logo1" />
              <img src={Logo2} alt="Logo2" />
              <img src={Logo3} alt="Logo3" />
            </div>
          </div>
          <div className="flex-1">
            <img src={HeroImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
