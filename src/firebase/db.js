import {db} from './firebase';

export const addUser = (values) => db.collection('user').add(values);

export const getUsers = () => db.collection('user').get();
