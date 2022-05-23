/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from 'app/components/atoms/button/Button';
import Input from 'app/components/atoms/input/Input';
import Label from 'app/components/atoms/label/Label';
import React from 'react';
import { useState } from 'react';
type Props = {
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: Function;
  //   className: string;
  //   children: React.ReactNode;
};
const FormMolecule = (props: Props) => {
  const { name, id, type, value } = props;

  const [query, setQuery] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

  return (
    <div className="label-input">
      <Label className="label" htmlFor={''}>
        {name}
      </Label>

      <Input
        value={query}
        id={id}
        type={type}
        name={name}
        onChange={inputHandler}
        className="input"
      />
    </div>
  );
};

export default FormMolecule;
