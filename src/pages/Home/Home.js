import React from 'react';
import User from '../UserForm';
import Employee from '../EmployeeForm';
import List from '../List';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';

const Home = () => {
    return (
      <Router>
      <div>
      <ul>
        <li>
          <Link
            to="/employee"
            style={{textDecoration: 'none'}}
          >
            EmployeeForm
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            style={{textDecoration: 'none'}}
          >
            UserForm
          </Link>
        </li>
        <li>
          <Link
            to="/preview"
            style={{textDecoration: 'none'}}
          >
            Preview Form
          </Link>
        </li>
      </ul>
      <hr/>
        <Route path="/employee" component={Employee}/>
        <Route path="/user" component={User}/>
        <Route path="/preview" component={List} />
      </div>
      </Router>
    );
  }

export default Home;
