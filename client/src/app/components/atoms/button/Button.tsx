import React, { ReactNode } from 'react';

type Props = {
  type: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  children: ReactNode;
  id?: string;
  style?: React.CSSProperties | undefined;
};

const Button: React.FC<Props> = ({ onClick, className, children, style }) => {
  return (
    <button onClick={onClick} className={className} style={style}>
      {' '}
      {children}
    </button>
  );
};

export default Button;
