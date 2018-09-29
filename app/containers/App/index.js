import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from 'containers/HomePage/Loadable';
import DonationsPage from 'containers/DonationsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';

export default function App() {
  return (
    <div style={{ backgroundColor: '#e8eaec' }}>
      <Helmet titleTemplate="%s - Treelio" defaultTitle="Treelio">
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/donations" component={DonationsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
