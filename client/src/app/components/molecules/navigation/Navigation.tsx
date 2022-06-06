import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, MenuBurger, img } from './navigation.style';

const NavigationComponent = () => {
  return (
    <Navigation>
      <div style={{ display: 'flex', gap: '50px' }}>
        <MenuBurger
          alt=""
          src="https://static.overlay-tech.com/assets/6cfd6b5a-bf15-40b5-88c3-a71f437407bd.svg"
        />
        <img src="../logo.png" alt="" />
      </div>
      <div style={{ display: 'flex', gap: '50px' }}>
        <Link to={undefined}>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/dd011da0-9f6a-4023-9d03-f71c4f8b1f9f.svg"
          />
        </Link>
        <Link to={undefined}>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/cdb01ef3-6f67-477a-a321-2f3877f665fc.svg"
          />
        </Link>
        <Link to="/authentification">
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/42a6309f-f647-42fb-b109-44552601b9de.svg"
          />
        </Link>
      </div>
    </Navigation>
  );
};

export default NavigationComponent;
