import Button from '../Button';
import Logos from '../../assets/logos.png';
import Video from '../../assets/video.png';

function Hero() {
  return (
    <div className="bg-yankees-blue-500 flex flex-col text-white justify-center items-center pt-20 pb-48 ">
      <p className="text-5xl text-center font-bold leading-[5rem] mb-5">
        Start Your Own Business<span className="block">Together With Us!</span>
      </p>

      <p className="text-center mb-10">
        Lorem Ipsum is simply dummy text of the
        <span className="block">printing and typesetting industry.</span>
      </p>
      <Button type="yellow">Get Started</Button>
      <img className="mt-10 w-[48rem]" src={Logos} alt="" />
      <img className="absolute top-[40rem]" src={Video}></img>
    </div>
  );
}

export default Hero;
