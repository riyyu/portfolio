import LogoLight from '../assets/logo_light.png';

type BottomItem = {
  text: string;
  isHeader?: boolean;
};

function Bottom() {
  const items: BottomItem[][] = [
    [
      { text: 'Pages Menus', isHeader: true },
      { text: 'Home' },
      { text: 'Our Product' },
      { text: 'Rooms' },
      { text: 'Services' }
    ],
    [
      { text: 'Our Services', isHeader: true },
      { text: 'Design Interior' },
      { text: 'Assembly Product' },
      { text: 'Free Shipping' },
      { text: 'Customer Center' }
    ],
    [
      { text: 'Support', isHeader: true },
      { text: 'Help Center' },
      { text: 'Contact Us' },
      { text: 'Carrers' },
      { text: 'FAQ' }
    ],
    [
      { text: 'Our Social', isHeader: true },
      { text: 'Instagram' },
      { text: 'Twitter' },
      { text: 'Medium' },
      { text: 'Feedback' }
    ]
  ];

  return (
    <div className="py-24 bg-dark-gunmetal-500 text-white">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-4 items-center">
          <img src={LogoLight} alt="Logo" />
          <p className="text-[#989EA8]">Copyright © 2022. All Rights Reserved.</p>
        </div>

        <div className="flex gap-3 justify-center mt-14">
          {items.map((item, index) => (
            <BottomLink items={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BottomLink(props: { items: BottomItem[] }) {
  return (
    <div className="w-60 flex flex-col items-center gap-3 ">
      {props.items.map((item, index) => {
        if (item.isHeader) return <p key={index}>{item.text}</p>;
        return (
          <a href="#" key={index} className="text-[#989EA8] hover:text-[#797e85]">
            {item.text}
          </a>
        );
      })}
    </div>
  );
}

export default Bottom;
