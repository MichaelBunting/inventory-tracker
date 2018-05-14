import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Search from './Search';

const Layout = props => (
  <div>
    <Nav />
    <div className="page">
      <Search />
      <div className="content">
        {props.children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
