import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm';
import PrivateRoute from '../containers/PrivateRoute';
import LoadedEvents from '../containers/LoadedEvents';
import Header from './Header';
import Footer from './Footer';
import Event from './Event';

import style from './Nyan.less';

const pageFactory = (HeaderComponent, PageComponent) => ({user, match}) => (
  <div className={style.nyan}>
    <HeaderComponent user={user} />
    <section className={style.content}>
      <PageComponent match={match} />
    </section>
    <Footer />
  </div>
);git

export default () => (
  <Switch>
    <PrivateRoute path="/events" component={pageFactory(Header, LoadedEvents)} />
    <PrivateRoute path="/event/:id" component={pageFactory(Header, Event)} />
    <Route path="/login" component={pageFactory(Header, LoginForm)} />
    <Redirect from="/" to="/events" />
  </Switch>
);