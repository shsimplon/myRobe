import Button from 'app/components/atoms/button/Button';
import FormMolecule from 'app/components/molecules/label-input/FormsMolecule';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userServices } from 'services';
import { notifySuccess } from 'utils/toastify';
import { userComplete } from '../../../../types/user';

const Form = signup => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  //   const [role, setRole] = useState('user');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleClick = async e => {
    e.preventDefault();
    try {
      const role = '';
      if (email === '' || email == null) {
        setMessage('Email est invalid');
        setError(true);
      } else if (name === '' || name == null) {
        setMessage('Prénom est invalid');
        setError(true);
      } else if (password === '' || password == null) {
        setMessage('Prénom est invalid');
        setError(true);
      } else {
        setMessage('');
        setError(false);
      }

      console.log(e.target.value);

      const response = await userServices.signUp({
        name,
        address,
        phone,
        email,
        password,
        role,
      });
      console.log('datattttt', response.data);
      const user = response.data;
      notifySuccess('Votre compte est enregistré, veuillez vous connectez!');

      history.push('/authentification');
    } catch (error: any) {
      setError(true);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <form>
          <input
            id="name"
            type="name"
            name="Prenom"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="address"
            name="Adresse"
            id="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <input
            type="phone"
            name="Télephone"
            id="phone"
            value={phone}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPhone(e.target.value)}
          />
          <input
            type="email"
            name="Email"
            id="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="Mot de passe"
            id="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {/* <FormMolecule
          type="role"
          name="Role"
          id="Role"
          value={role}
          onChange={e => setRole(e.target.value)}
        /> */}

          <button
            type="submit"
            className="button"
            onClick={e => handleClick(e)}
          >
            {' '}
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
