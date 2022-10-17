import NavItem from './NavItem';

function NavItems() {
  return (
    <div>
      <ul className="flex space-x-6">
        <NavItem isActive={true}>Home</NavItem>
        <NavItem>Feature</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>About Us</NavItem>
      </ul>
    </div>
  );
}

export default NavItems;
