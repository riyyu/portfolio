import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

import Phone1 from '../assets/phone.png';
import Phone2 from '../assets/phone2.png';
import Phone3 from '../assets/phone3.png';
import Phone4 from '../assets/phone4.png';

type Step = { number: string; text: string };

function Step() {
  const items: Step[] = [
    { number: '01', text: 'Choose the Items Needed' },
    { number: '02', text: 'Add Your Items to Cart' },
    { number: '03', text: 'Enter The Required Data' },
    { number: '04', text: 'Goods Ready to Ship' }
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="my-3 rounded-3xl bg-dark-gunmetal-500 p-10 flex text-white items-center">
        <div className="w-[30rem] mx-20">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            onChange={(index) => {
              setSlideIndex(index);
            }}>
            <div>
              <img src={Phone1} alt="Phone" className="" />
            </div>
            <div>
              <img src={Phone2} alt="Phone" className="" />
            </div>
            <div>
              <img src={Phone3} alt="Phone" className="" />
            </div>
            <div>
              <img src={Phone4} alt="Phone" className="" />
            </div>
          </Carousel>
        </div>
        <div className="pl-10 pr-20">
          <div className="mb-20 space-y-2">
            <p className="text-xl text-vivid-tangelo-500 font-semibold">Easy-to-Use</p>
            <p className="text-4xl font-semibold">How It Works</p>
            <p className="text-[#989EA8]">Order our products via smartphone</p>
          </div>

          <div className="grid grid-cols-2 gap-x-28 gap-y-20">
            {items.map((item, index) => (
              <StepItem number={item.number} title={item.text} isActive={index === slideIndex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepItem(props: { title: string; number: string; isActive?: boolean }) {
  return (
    <div className="space-y-2">
      <div
        className={`h-[76px] w-[76px] rounded-full  flex justify-center items-center transition-all font-semibold text-2xl ${
          props.isActive ? 'text-white bg-vivid-tangelo-500' : 'bg-white text-dark-gunmetal-500'
        }`}>
        {props.number}
      </div>
      <p className="text-xl font-semibold ">{props.title}</p>
      <p className="text-[#989EA8]">
        Lorem Ipsum is simply dummy text of the printing & typesetting industry.
      </p>
    </div>
  );
}

export default Step;
