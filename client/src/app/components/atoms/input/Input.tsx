import * as React from 'react';
type Props = {
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className: string;
};
const Input = (props: Props) => {
  const { name, id, value, type, onChange, className } = props;
  return (
    <input
      id={id}
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
Input.defaultProps = {
  type: '',
  name: '',
  id: '',
  value: '',
  onChange: '',
  className: '',
};
export default Input;
