import React from 'react';
import { Route, Link } from 'react-router-dom';

const CustomizeLink = ({ to, label, exact = true, ...staff }) => {
  return (
    <Route
      exact
      path={to}
      children={({ match }) => {
        return (
          <li className={match ? 'nav-item active' : 'nav-item'} {...staff}>
            <Link className="nav-link" to={to}>
              {label} <span className="sr-only">(current)</span>
            </Link>
          </li>
        );
      }}
    />
  );
};

export default CustomizeLink;
