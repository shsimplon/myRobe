import React from 'react';

type Props = {
  type: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
};

const Button = (props: Props) => {
  const { onClick, className } = props;

  return <button onClick={onClick} className={className}></button>;
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
