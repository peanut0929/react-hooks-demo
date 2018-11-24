import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = ({ match }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = match.params;

  useEffect(
    () => {
      setLoading(true);

      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then(user => {
          setUser(user);
          setLoading(false);
        });
    },
    [id]
  );

  return !loading && user ? (
    <div>
      <p>
        <Link to="/users"> &laquo; 返回</Link>
      </p>
      <ul className="list-group">
        {Object.keys(user).map(key => {
          return key === 'company' || key === 'address' ? null : (
            <li className="list-group-item" key={key}>
              {key.toLocaleUpperCase()}: {user[key]}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};

export default User;
