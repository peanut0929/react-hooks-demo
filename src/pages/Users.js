import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(uses => {
        setLoading(false);

        setUsers(uses);
      });
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>详情</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/users/${user.id}`}>详情</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default Users;
