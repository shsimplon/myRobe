import * as React from 'react';

type Props = {
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className: string;
  children: React.ReactNode;
};
const Textarea = (props: Props) => {
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

export default Textarea;
