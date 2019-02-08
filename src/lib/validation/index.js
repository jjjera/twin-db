export const name = (value) =>
  value && (value.length < 3 || value.length > 50)
    ? 'Name length should be 3...50'
    : undefined;

export const age = (value) =>
  value && !/^\d{3}$/i.test(value) ? 'Invalid Age' : undefined;

export const songNumber = (value) =>
    value && !/^([0-9]\d{9})$/i.test(value)
      ? 'Invalid number'
      : undefined;

export const emailId = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid Email ID'
      : undefined;

export const alphaNumberic = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
