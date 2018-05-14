/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext();

export default class AppStore extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor() {
    super();

    this.setState = this.setState.bind(this);
  }

  state = {

  }

  render() {
    return (
      <Context.Provider value={{
          state: this.state,
          setState: this.setState,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
