import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import CustomizeLink from './CustomizeLink';

const Header = () => {
  const collapse = useRef(null);

  const hideCollaspe = () => {
    window.$(collapse.current).collapse('hide');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        React Hooks
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse  navbar-collapse"
        id="navbarContent"
        ref={collapse}
      >
        <ul className="navbar-nav mr-auto">
          <CustomizeLink to="/counter" label="计数器" onClick={hideCollaspe} />
          <CustomizeLink
            to="/todo-app"
            label="待办事项"
            onClick={hideCollaspe}
          />
          <CustomizeLink
            to="/users"
            label="用户列表(useEffect)"
            onClick={hideCollaspe}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
