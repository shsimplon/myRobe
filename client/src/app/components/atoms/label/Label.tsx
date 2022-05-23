import React from 'react';

type Props = {
  htmlFor: string;
  className: string;
  children: React.ReactNode;
};

const Label = (props: Props) => {
  const { htmlFor, children, className } = props;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};
Label.defaultProps = {
  htmlFort: '',
  className: '',
  children: '',
};

export default Label;
