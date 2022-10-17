import { ReactNode } from 'react';

interface Types {
  [key: string]: string;
}

function Button(props: { type: string; children: ReactNode }) {
  const types: Types = {
    blue: 'bg-yankees-blue-400 text-white hover:bg-yankees-blue-500',
    yellow: 'bg-pale-goldenrod-400 text-yankees-blue-500 hover:bg-pale-goldenrod-500',
    outline: 'border-2 border-white text-white hover:border-gray-200 hover:text-gray-200',
    'outline-blue':
      'border-2 border-yankees-blue-400 text-yankees-blue-400 hover:border-yankees-blue-500 hover:text-yankees-blue-500',
    'outline-yellow': ''
  };
  return (
    <button className={`${types[props.type]} text-sm px-4 py-2 rounded-full`}>
      {props.children}
    </button>
  );
}

export default Button;
