import NavItems from './NavItems';
import NavSmall from './NavSmall';
import Logo from '../../assets/logo.svg';
import MyAccountButton from './MyAccountButton';

function NavBig() {
  return (
    <div className="container mx-auto p-4 items-center flex justify-between">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <NavItems />
      </div>
      <div>
        <MyAccountButton />
      </div>
    </div>
  );
}

export default NavBig;
