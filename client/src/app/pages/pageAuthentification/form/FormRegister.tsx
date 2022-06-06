import Button from 'app/components/atoms/button/Button';
import FormMolecule from 'app/components/molecules/label-input/FormsMolecule';
import React, { useState } from 'react';

const Form = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  //   const [role, setRole] = useState('user');
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    throw new Error('Function not implemented.');
  }
  return (
    <form>
      <div>
        <FormMolecule
          id="name"
          type="name"
          name="Prenom"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <FormMolecule
          type="email"
          name="Email"
          id="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <FormMolecule
          type="password"
          name="Mot de passe"
          id="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <FormMolecule
          type="address"
          name="Adresse"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <FormMolecule
          type="phone"
          name="Télephone"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {/* <FormMolecule
          type="role"
          name="Role"
          id="Role"
          value={role}
          onChange={e => setRole(e.target.value)}
        /> */}
      </div>
      <Button type="submit" className="button" onClick={e => handleClick(e)}>
        {' '}
        Envoyer
      </Button>
    </form>
  );
};

export default Form;
