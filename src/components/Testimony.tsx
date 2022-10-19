import Stars from '../assets/stars.png';

function Testimony() {
  return (
    <div className="container mx-auto ">
      <div className="flex pb-24 items-center">
        <div className="flex-1">
          <div className="space-y-2 mb-10 w-80">
            <p className="text-xl font-semibold text-vivid-tangelo-500">What Are They Saying</p>
            <p className="font-semibold text-4xl">Happy Customers</p>
            <p className="text-philippine-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <a href="#" className="text-vivid-tangelo-500 hover:text-vivid-tangelo-700">
            View All &gt;
          </a>
        </div>
        <div className="flex-1">
          <TestimonyItem />
        </div>
        <div className="flex-1">
          <TestimonyItem />
        </div>
      </div>
    </div>
  );
}

function TestimonyItem() {
  return (
    <div className="p-10">
      <div className="flex items-center">
        <div className="h-16 w-16 rounded-full bg-slate-800 mr-4 overflow-clip">
          <img src="https://placekitten.com/400/400" alt="" />
        </div>
        <div>
          <p className="font-semibold ">Nana Nia</p>
          <p className="text-[#4E616D] font-medium">UI Designer, Google</p>
        </div>
      </div>
      <div className="mt-5 mb-2">
        <img src={Stars} alt="Rating" />
      </div>
      <p className="text-[#4E616D] font-medium">
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s."
      </p>
    </div>
  );
}

export default Testimony;
