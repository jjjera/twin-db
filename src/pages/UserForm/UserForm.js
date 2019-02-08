import React, {Component} from 'react';
import {FormGroup, Col, Card, CardBody, Button} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import ImageUpload from '../../components/ImageUpload';
import FormInput from '../../components/FormInput';

 class UserForm extends Component{

   constructor(props) {
     super(props);
     this.state = {};
   }

   uploadImage = (event) => {
   if (event.target.files[0]) {
     const employeeImage = URL.createObjectURL(event.target.files[0]);
     this.setState({ image: employeeImage });
   }
  };

   render(){
     const {handleSubmit} = this.props;
     return (
       <form onSubmit={handleSubmit}>
        <Col sm="12">
          <Card className="card-border" style={{color:'blue'}}>
          <h1 style={{color:'blue'}}>User Form</h1>
            <CardBody style={{color:'Green',width:1000, fontWeight: 'bold'}}>
              <FormGroup row>
                <Col xs="12" lg="10">
                  <Field
                    type="file"
                    id="file-input"
                    name="profilePicture"
                    label="Upload User Image"
                    accept="image/*"
                    component={ImageUpload}
                    onChange={(event) => this.uploadImage(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="12" lg="6">
                <Field
                  name="name"
                  type="text"
                  component={FormInput}
                  // label="Name *"
                  inputPlaceHolder="Enter User Name"
                />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="fatherName"
                    type="text"
                    component={FormInput}
                    // label="Father Name *"
                    inputPlaceHolder="Favourite Artist Name"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    name="userDob"
                    type="date"
                    component={FormInput}
                    // label="Date of Birth"
                  />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="userAge"
                    type="text"
                    component={FormInput}
                    // label="Age"
                    inputPlaceHolder="Enter Song Number"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    name="mobileNo"
                    type="text"
                    component={FormInput}
                    // label="Mobile No *"
                    inputPlaceHolder="+91"
                  />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="emailId"
                    type="email"
                    component={FormInput}
                    // label="Email ID"
                    inputPlaceHolder="Enter Email ID"
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <div style={{ paddingBottom: 30 }}>
              <Button
                color="primary"
                className="btn-pill pull-right"
                type="submit"
                style={{ marginRight: '20px' }}
              >
                Save
              </Button>
            </div>
          </Card>
        </Col>
      </form>
     );

   }
 }

export default reduxForm({
  form: 'users'
})(UserForm);
