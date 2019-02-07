import React from 'react';
import { FormGroup, FormText, Input, Label } from 'reactstrap';

const FormInput = ({
  input,
  label,
  type,
  inputPlaceHolder,
  maxDate,
  minDate,
  accept,
  disable,
  meta: { error, touched }
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      {...input}
      type={type}
      placeholder={inputPlaceHolder}
      max={maxDate}
      min={minDate}
      accept={accept}
      disabled={disable}
    />
    {touched && <FormText className="help-block error-color">{error}</FormText>}
  </FormGroup>
);

export default FormInput;
