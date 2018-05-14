import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  state = {
    links: [
      {
        icon: 'box-open',
        name: 'Inventory',
        path: '/',
        exact: true,
      },
      {
        icon: 'clipboard',
        name: 'Orders',
        path: '/orders',
      },
      {
        icon: 'dollar-sign',
        name: 'Income',
        path: '/income',
      },
    ],
  }

  render() {
    return (
      <nav className="menu">
        <div className="menu__header menu__item">
          <div className="menu__logo">
            <img src="/assets/logo.svg" />
          </div>

          <h1 className="menu__header-text">
              Inventory Tracker
          </h1>
        </div>

        <ul className="menu__list nav-list">
          {this.state.links.map((link, i) => (
            <li className="menu__item" key={`${link.name}link`}>
              <NavLink
                {...link.exact ? { exact: true } : ''}
                to={link.path}
                activeClassName="active"
                className="menu__link"
              >
                <i className={`menu__icon fa fa-${link.icon}`} />
                { link.name }
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
