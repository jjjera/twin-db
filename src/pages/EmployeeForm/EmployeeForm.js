import React, {Component} from 'react';
import {Col,Card,CardBody,Button,FormGroup,Label} from 'reactstrap';
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
          <h1 style={{color:'blue'}}>Employee Form</h1>
            <CardBody>
              <FormGroup row className="my-0">
                <Col xs="12" lg="10">
                  <Field
                    type="file"
                    id="file-input"
                    name="profilePicture"
                    accept="image/*"
                    component={ImageUpload}
                    onChange={(event) => this.uploadImage(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label>Upload Audio File</Label>
                <br/>
                <Field
                name="audio"
                type="file"
                accept="audio/*"
                component={ImageUpload}
                />
                </FormGroup>
              <Field
                name="name"
                type="text"
                component={FormInput}
                label="Name *"
                inputPlaceHolder="Enter Name"
              />
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    name="fatherName"
                    type="text"
                    component={FormInput}
                    label="Father Name *"
                    inputPlaceHolder="Enter Father Name"
                  />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="mobileNo"
                    type="text"
                    component={FormInput}
                    label="Mobile No *"
                    inputPlaceHolder="+91"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    name="empDob"
                    type="date"
                    component={FormInput}
                    label="Date of Birth"
                  />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="empAge"
                    type="text"
                    component={FormInput}
                    label="Age"
                    inputPlaceHolder="Enter Age"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="12" lg="6">
                  <Field
                    name="emailId"
                    type="email"
                    component={FormInput}
                    label="Email ID"
                    inputPlaceHolder="Enter Email ID"
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <div style={{ paddingBottom: 30 }}>
              <Button
                color="primary"
                className="btn-pill pull-right"
                type="save"
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
  form: 'employee'
})(EmployeeForm);
