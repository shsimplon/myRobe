import * as React from 'react';
type Props = {
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className: string;
};
const Input: React.FC<Props> = ({
  name,
  id,
  value,
  type,
  onChange,
  className,
}) => {
  return (
    <input
      id={id}
      type={type}
      className="input"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
