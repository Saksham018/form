import React from 'react';
import Login from "./components/Login";
import Edit from './components/Edit';
import List from './components/List';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
        <h1> This IS Employee details </h1>
        <ul>
          <li><Link to="/Login">login</Link></li>
          <li><Link to="/Edit">Edit</Link></li>
          <li> <Link to="/List">List</Link></li>
        </ul>
        <Switch>
          <Route path="/List" component={List} />
          <Route path="/Edit" component={Edit} />
          <Route exact path="/" component={Login} />

        </Switch>
      </Router>

      <Login />
    </div>
  );
};

export default App
