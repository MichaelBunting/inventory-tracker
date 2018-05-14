import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './layout';

export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Layout>
  </Router>
);
