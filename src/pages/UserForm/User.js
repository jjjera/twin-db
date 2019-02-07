import React, { Component } from 'react';
import UserForm from './UserForm';
import { toast } from 'react-toastify';
import {addUser} from '../../redux/actions/addUser';
import {addImage} from '../../redux/actions/addStorage';
import {connect} from 'react-redux';

class User extends Component {

    handleSubmit = (values) => {
      console.log('handleSubmit called',values);
      console.log('props are',this.props);
      this.props.dispatch(addImage(values, 'Users')).then((resp) => {
        values.isDeleted = false;
        let name = values.name.toLowerCase();
        values.isDeleted_mobileNo = values.isDeleted + '_' + values.mobileNo;
        values.isDeleted_name = values.isDeleted + '_' + name.replace(/\s/g,'');
        values.profilePicture = resp;
        const { history } = this.props;
        this.props.dispatch(addUser(values)).then(
          (success) => {
            console.log('success is',success);
            toast.success(success);
            history.push('/user');
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
        <UserForm onSubmit={this.handleSubmit}{...this.props}/>
      </div>
    );
  }

}

export default connect(null)(User);
