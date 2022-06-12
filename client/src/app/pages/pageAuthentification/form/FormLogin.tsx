import Button from 'app/components/atoms/button/Button';
import FormMolecule from 'app/components/molecules/label-input/FormsMolecule';
import { login } from 'features/user.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userServices } from '../../../../services/index';

const FormLogin = props => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async e => {
    e.preventDefault();

    try {
      const response = await userServices.signIn({ email, password });
      const user = response.data;

      console.log('user:', user);

      dispatch(login(user));
      history.push('/');
    } catch (error: any) {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <form>
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

export default FormLogin;
