import NavBig from './NavBig';
import NavSmall from './NavSmall';

function Navbar() {
  return (
    <>
      <div className="block md:hidden">
        <NavSmall />
      </div>
      <div className="hidden md:block">
        <NavBig />
      </div>
    </>
  );
}

export default Navbar;
