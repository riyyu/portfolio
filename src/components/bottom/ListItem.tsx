import { ReactNode } from 'react';

function ListItem(props: { isHeader: boolean; children: ReactNode }) {
  return (
    <li>
      {!props.isHeader ? (
        <a href="#" className={`hover:text-pale-goldenrod-600`}>
          {props.children}
        </a>
      ) : (
        <p className="font-semibold">{props.children}</p>
      )}
    </li>
  );
}

export default ListItem;
