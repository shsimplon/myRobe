import { logout } from 'features/user.slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userServices } from 'services';
import { userStore } from 'types/user';
import { HiOutlineLogout } from 'react-icons/hi';

import { Navigation, MenuBurger, img } from './navigation.style';
const NavigationComponent = () => {
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const userState = useSelector((state: { user: userStore }) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers();
  }, []);
  const logoutUser = async () => {
    await dispatch(logout());
    navigate('/authentification');
  };
  const getUsers = async () => {
    try {
      const response = await userServices.getAllUsers();
      setUsers(response.data);
    } catch (error: any) {
      if (error.hasRefreshedToken) getUsers();
      else {
        dispatch(logout());
        navigate('/authentification');
      }
    }
  };

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
        <Link to="/dress/favoris">
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/dd011da0-9f6a-4023-9d03-f71c4f8b1f9f.svg"
          />
        </Link>
        <Link to="dress/panier">
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
        {userState.user && (
          <HiOutlineLogout
            style={{ color: '#BB8A5D', fontSize: '1.7rem', cursor: 'pointer' }}
            onClick={logoutUser}
          />
        )}
      </div>
    </Navigation>
  );
};

export default NavigationComponent;
