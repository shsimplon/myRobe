import Button from 'app/components/atoms/button/Button';
import { use } from 'i18next';
import React from 'react';
import { useState } from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

const ModaleAuthentification = props => {
  const [signup, setSignup] = useState<boolean>(true);

  return (
    <div className="authentification">
      <div className="connect-modal">
        <div className="header-btn">
          <Button
            style={{
              background: signup ? 'rgb(187,138,93)' : 'rgb(187,138,93,0.4)',
            }}
            className="button-login"
            type={''}
            onClick={() => {
              setSignup(true);
            }}
          >
            S'enregistrer
          </Button>
          <Button
            style={{
              background: signup ? 'rgb(187,138,93,0.4)' : 'rgb(187,138,93)',
            }}
            type={''}
            onClick={() => {
              setSignup(false);
            }}
            id="signup"
          >
            Se Connecter
          </Button>
        </div>
        {signup ? <FormRegister /> : <FormLogin />}
      </div>
    </div>
  );
};

export default ModaleAuthentification;
