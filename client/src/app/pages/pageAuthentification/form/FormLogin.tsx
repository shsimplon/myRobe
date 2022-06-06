import Button from 'app/components/atoms/button/Button';
import FormMolecule from 'app/components/molecules/label-input/FormsMolecule';
import React, { useState } from 'react';

const FormLogin = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    throw new Error('Function not implemented.');
  }
  return (
    <form>
      <div>
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
      </div>
      <Button type="submit" className="button" onClick={e => handleClick(e)}>
        {' '}
        Envoyer
      </Button>
    </form>
  );
};

export default FormLogin;
