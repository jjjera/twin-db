import {realTime} from './firebase';

export const addEmployee = (values) => realTime.ref('employees').push(values);

export const getEmployees = () =>
  realTime
    .ref('employees')
    .once('value');
