import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Counter from './pages/Counter';
import TodoApp from './pages/TodoApp';
import Users from './pages/Users';
import User from './pages/User';

const App = () => (
  <div className="App">
    <Header />
    <div className="container pt-4 mt-4">
      <Switch>
        <Redirect exact from="/" to="/counter" />
        <Route path="/counter" component={Counter} />
        <Route path="/todo-app" component={TodoApp} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:id" exact component={User} />
        <Route
          component={() => (
            <div className="text-center">
              <h1 className="text-danger">404</h1>
              <Link to="/">返回首页</Link>
            </div>
          )}
        />
      </Switch>
    </div>
  </div>
);

export default App;
