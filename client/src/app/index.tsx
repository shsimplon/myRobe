/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Loadable';
import { useTranslation } from 'react-i18next';
import '../styles/index.scss';
import FormRegister from './pages/pageAuthentification/form/FormRegister';
import FormLogin from './pages/pageAuthentification/form/FormLogin';
import modaleAuthentification from './pages/pageAuthentification/form/modaleAuthentification';
export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/authentification/"
          component={modaleAuthentification}
        />
        <Route
          exact
          path="/authentification/register"
          component={FormRegister}
        />
        <Route exact path="/authentification/login" component={FormLogin} />

        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
