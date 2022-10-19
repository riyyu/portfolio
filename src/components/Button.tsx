import { ReactNode } from 'react';

function Button({ children }: { children: ReactNode }) {
  return <button>{children}</button>;
}

export default Button;
