import React from 'react';
import { FormGroup, FormText, Label, Input } from 'reactstrap';

const ImageUpload = ({
  label,
  input,
  type,
  id,
  inputPlaceHolder,
  accept,
  meta: { error, touched }
}) => {
  delete input.value;
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        {...input}
        type={type}
        id={id}
        placeholder={inputPlaceHolder}
        accept={accept}
      />
      {touched && (
        <FormText className="help-block error-color">{error}</FormText>
      )}
    </FormGroup>
  );
};

export default ImageUpload;
