import Button from '../Button';

function Subscribe() {
  return (
    <>
      {/* <div className="h-[40rem]"></div> */}
      <div className="relative ">
        <div className="h-[18rem]"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-[url('/assets/images/subs_bg.png')] h-[26rem] w-[80rem] bg-no-repeat m-auto rounded-2xl flex flex-col space-y-6 justify-center items-center">
          <p className="text-4xl font-semibold">Up to date with the latest startup news</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="flex gap-2">
            <input
              type="text"
              className="rounded-full px-3 placeholder:text-yankees-blue-400 "
              placeholder="Enter your email"
            />
            <Button type="outline-blue">Subscribe</Button>
          </div>
          <p className="text-sm font-light">
            Plus nothing but quality news in your inbox every week.
          </p>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
