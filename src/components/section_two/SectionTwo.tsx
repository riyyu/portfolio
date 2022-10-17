import Image from '../../assets/section_two.png';
import Button from '../Button';

function SectionTwo() {
  return (
    <div className="container mx-auto py-20 flex justify-between items-center px-20">
      <div className="w-[30rem] text-yankees-blue-500 space-y-4">
        <p className="bg-pale-goldenrod-500  w-[10rem] text-center rounded-full">
          Straight to Focus
        </p>
        <p className="text-4xl font-semibold">Make Your Company More Productive!</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s
        </p>
        <Button type="outline-blue">Get started</Button>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </div>
  );
}

export default SectionTwo;
