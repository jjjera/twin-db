import React, {Component} from 'react';
import {Col,Card,CardBody,Button,FormGroup} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import ImageUpload from '../../components/ImageUpload';
import FormInput from '../../components/FormInput';

 class EmployeeForm extends Component{

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
          <Card className="card-border">
          <h1 style={{color:'blue'}}>Upload Form</h1>
            <CardBody style={{color:'Green',width:1000, fontWeight: 'bold'}}>
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    type="file"
                    id="file-input"
                    name="profilePicture"
                    label="Select Album Image"
                    accept="image/*"
                    component={ImageUpload}
                    onChange={(event) => this.uploadImage(event)}
                  />
                </Col>
                <Col xs="12" lg="6">
                    <Field
                    name="audio"
                    label="Add Song"
                    type="file"
                    accept="audio/*"
                    component={ImageUpload}
                    />
                </Col>
              </FormGroup>
              <FormGroup row>
                    <Col xs="12" lg="6">
                   <Field
                     name="name"
                     type="text"
                     component={FormInput}
                     inputPlaceHolder="Artist Name"
                   />
                    </Col>
                    <Col xs="12" lg="6">
                      <Field
                        name="fatherName"
                        type="text"
                        component={FormInput}
                        // label="Father Name"
                        inputPlaceHolder="Album Name"
                      />
                    </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    name="mobileNo"
                    type="text"
                    component={FormInput}
                    // label="Mobile No"
                    inputPlaceHolder="Song Number"
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
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    name="empDob"
                    type="date"
                    component={FormInput}
                    inputPlaceHolder="Date of Release"
                    // label="Date of Release"
                  />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="empAge"
                    type="text"
                    component={FormInput}
                    // label="Age"
                    inputPlaceHolder="Number Of Download"
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <div style={{ paddingBottom: 30 }}>
              <Button
                color="primary"
                type="save"
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
  form: 'employee'
})(EmployeeForm);
