import Button from 'app/components/atoms/button/Button';
import FormMolecule from 'app/components/molecules/label-input/FormsMolecule';
import React, { useState } from 'react';

const Form = props => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user');
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    throw new Error('Function not implemented.');
  }
  return (
    <>
      <div>
        <FormMolecule
          id="name"
          type="name"
          name="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <FormMolecule
          type="role"
          name="Role"
          id="Role"
          value={role}
          onChange={e => setRole(e.target.value)}
        />

        <FormMolecule
          type="email"
          name="Email"
          id="Email"
          value={email}
          onChange={e => setRole(e.target.value)}
        />

        <FormMolecule
          type="password"
          name="Password"
          id="Password"
          value={password}
          onChange={e => setRole(e.target.value)}
        />
      </div>
      <Button type="submit" className="button" onClick={e => handleClick(e)} />
    </>
  );
};

export default Form;
