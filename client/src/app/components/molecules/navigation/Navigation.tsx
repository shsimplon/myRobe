import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navigation,
  MenuBurger,
  MyRobe,
  Vector,
  VectorTwo,
  VectorThree,
} from './navigation.style';

const NavigationComponent = () => {
  return (
    <Navigation>
      <MenuBurger
        alt=""
        src="https://static.overlay-tech.com/assets/36e4bf75-2e92-44f8-92ec-d33b7cf5c193.svg"
      />
      <Link to="/">
        <MyRobe>MyRobe</MyRobe>
      </Link>

      <Vector
        alt=""
        src="https://static.overlay-tech.com/assets/1a3304ef-ad4d-43fa-abab-b679c83efc40.svg"
      />

      <VectorTwo
        alt=""
        src="https://static.overlay-tech.com/assets/4c62e92a-fd25-44e3-b9ad-6beff34efdba.svg"
      />
      <VectorThree
        alt=""
        src="https://static.overlay-tech.com/assets/2aa5594a-851d-482a-a5eb-337f201de273.svg"
      />
    </Navigation>
  );
};

export default NavigationComponent;
