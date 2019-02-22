import {} from '../../lib/validation';

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Field Required'
  }
  if (!values.fatherName) {
    errors.fatherName = 'Album Name Required'
  }
  if (!values.mobileNo) {
    errors.mobileNo = 'Song Number Required'
  }
  if (!values.emailId) {
    errors.emailId = 'Email Required'
  }
  if (!values.empDob) {
    errors.empDob = 'Date Of Release Required'
  }
  if (!values.empAge) {
    errors.empAge = 'Number Of Downloads Required'
  }
  return errors;
}

export default validate;
