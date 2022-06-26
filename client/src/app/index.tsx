/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Loadable';
import { useTranslation } from 'react-i18next';
import '../styles/index.scss';
import FormRegister from './pages/pageAuthentification/form/FormRegister';
import FormLogin from './pages/pageAuthentification/form/FormLogin';
import modaleAuthentification from './pages/pageAuthentification/form/modaleAuthentification';
import CardDressDetails from './pages/pageDresses/CardDressDetails';
import { useSelector } from 'react-redux';
import { userStore } from 'types/user';
import Home from './components/templates/Home';
import ModaleAuthentification from './pages/pageAuthentification/form/modaleAuthentification';

export function App() {
  const { i18n } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/authentification/" element={<ModaleAuthentification />} />
      <Route path="/" element={<Home />} />

      <Route
        path="/dress/editDress"
        element={<CardDressDetails dress={undefined} />}
      />
    </Routes>
  );
}
const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
  const userState = useSelector((state: { user: userStore }) => state.user);
  return !userState.isLogged ? <Home /> : Component;
};
