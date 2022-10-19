import Service1 from '../assets/service1.svg';
import Service2 from '../assets/service2.svg';
import Service3 from '../assets/service3.svg';
import Service4 from '../assets/service4.svg';

type ServiceItem = { title: string; logo: string };

function Service() {
  const serviceItems: ServiceItem[] = [
    { title: 'Fast & Free Shipping', logo: Service1 },
    { title: 'Assembly Product', logo: Service2 },
    { title: 'Design Interior', logo: Service3 },
    { title: '24/7 Customer Service', logo: Service4 }
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-24">
      <div className="w-[23rem] text-center space-y-2 pb-24">
        <p className="text-vivid-tangelo-500 text-xl font-semibold">What we Offer</p>
        <p className="font-semibold text-4xl">Our Service</p>
        <p className="text-philippine-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="flex gap-8">
        {serviceItems.map((item, index) => (
          <ServiceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function ServiceItem(props: ServiceItem) {
  return (
    <div className="p-8">
      <div className="space-y-3 mb-8">
        <div className="h-16 w-16 bg-dark-gunmetal-500 rounded-xl flex justify-center items-center">
          <img src={props.logo} alt="Logo" />
        </div>
        <p className="text-xl font-semibold">{props.title}</p>
        <p className="text-philippine-gray-500">
          Lorem Ipsum is simply dummy text of the printing & typesetting industry.
        </p>
      </div>
      <a href="#" className="text-vivid-tangelo-500">
        Read Details{' '}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 inline">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}

export default Service;
