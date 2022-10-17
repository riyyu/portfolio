import { ReactNode } from 'react';

function NavItem(props: { children: ReactNode; isActive?: boolean }) {
  let className = `text-yankees-blue-200`;
  if (props.isActive) className = `text-yankees-blue-500 border-b-2 border-yankees-blue-500`;

  return (
    <li>
      <a href="#" className={`${className} py-3`}>
        {props.children}
      </a>
    </li>
  );
}

export default NavItem;
