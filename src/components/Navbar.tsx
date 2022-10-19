import { useEffect, useState } from 'react';
import LogoDark from '../assets/logo_dark.png';

function Navbar() {
  const [nav, setNav] = useState('');

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 30 ? setNav('shadow') : setNav('');
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`transition-all sticky top-0 bg-white z-50 ${nav}`}>
      <div className={`container mx-auto flex justify-between p-4 items-center `}>
        <div>
          <img src={LogoDark} alt="" />
        </div>
        <div className="flex items-center gap-6">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Product</a>
          </div>
          <div>
            <a href="#">Room</a>
          </div>
          <div>
            <a href="#">Service</a>
          </div>
          <div>
            <a href="#">Download App</a>
          </div>
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <button className="text-vivid-tangelo-500 px-8 py-2 rounded-md font-medium bg-opacity-20 bg-vivid-tangelo-600">
            My Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
