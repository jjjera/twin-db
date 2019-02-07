import React, { Component } from 'react';
import MediaList from './MediaList';
import {fetchEmployees} from '../../redux/actions/fetchEmployee';
import {fetchUsers} from '../../redux/actions/fetchUser';
import { connect } from 'react-redux';

class List extends Component {

  componentDidMount() {
    this.props.dispatch(fetchEmployees());
    this.props.dispatch(fetchUsers());
  }

  render() {
    // console.log('props are',this.props.employees);
    // console.log('user props are',this.props.users);
    return (
      <div>
        <MediaList
          employees={this.props.employees}
          users={this.props.users}
        />
      </div>
    );
  }

}

function mapstateToProps(state){
return{
  employees: state.employeeState.employees,
  users: state.userState.users
};
}

export default connect(mapstateToProps)(List);
