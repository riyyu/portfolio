function TestimonyItem(props: { name: string; work: string; img: string; text: string }) {
  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-yellow-400">
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="p-6 rounded-2xl space-y-4 w-80 bg-white text-yankees-blue-500 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 bg-yankees-blue-500 rounded-full overflow-clip">
          <img src={props.img} alt="Image" />
        </div>
        <div>
          <div className="font-semibold text-clip overflow-hidden ">{props.name}</div>
          <div>
            <p className="text-clip">{props.work}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        {star}
        {star}
        {star}
        {star}
        {star}
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default TestimonyItem;
