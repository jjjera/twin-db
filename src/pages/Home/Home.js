import React from 'react';
import User from '../UserForm';
import Employee from '../EmployeeForm';
import List from '../List';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import {askForPermissioToReceiveNotifications} from '../../pushNotification/push-notification';

const Home = () => {
    return (
      <Router>
      <div>
      <ul class="list-unstyled">
        <li>
          <Link
            to="/employee"
            style={{textDecoration: 'none'}}
          >
            Tap To Upload Song
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            style={{textDecoration: 'none'}}
          >
            User Form
          </Link>
        </li>
        <li>
          <Link
            to="/preview"
            style={{textDecoration: 'none'}}
          >
            Tap To Play Songs !!
          </Link>
        </li>
      </ul>
      <hr/>
        <Route path="/employee" component={Employee}/>
        <Route path="/user" component={User}/>
        <Route path="/preview" component={List} />
        <br/>
          <button onClick={askForPermissioToReceiveNotifications} >
            Click Here To Receive Notifications
          </button>
      </div>
      </Router>
    );
  }

export default Home;
