import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { toast } from 'react-toastify';
import {addEmployees} from '../../redux/actions/addEmployee';
import {addImage} from '../../redux/actions/addStorage';
import {connect} from 'react-redux';

class Employee extends Component {

  handleSubmit = (values) => {
    console.log('handleSubmit called',values);
    console.log('props are',this.props);
    this.props.dispatch(addImage(values, 'Employees')).then((resp) => {
      values.isDeleted = false;
      let name = values.name.toLowerCase();
      values.isDeleted_mobileNo = values.isDeleted + '_' + values.mobileNo;
      values.isDeleted_name = values.isDeleted + '_' + name.replace(/\s/g,'');
      values.profilePicture = resp;
      const { history } = this.props;
      this.props.dispatch(addEmployees(values)).then(
        (success) => {
          toast.success(success);
          history.push('/employees');
        },
        (error) => {
          toast.error(error);
        }
      );
    });
  }


  render() {
    return (
      <div>
      <EmployeeForm onSubmit={this.handleSubmit}{...this.props}/>
      </div>
    );
  }

}

export default connect(null)(Employee);
