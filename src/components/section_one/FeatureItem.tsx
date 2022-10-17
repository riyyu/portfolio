import { ReactNode } from 'react';

function FeatureItem(props: { icon: string; title: string; content: string }) {
  return (
    <div className="w-[23rem] rounded-2xl space-y-2 text-white px-14 py-8 bg-yankees-blue-500 flex flex-col items-center">
      <img src={props.icon} alt="" />
      <p className="text-xl font-semibold">{props.title}</p>
      <p className="text-center">{props.content}</p>
    </div>
  );
}

export default FeatureItem;
