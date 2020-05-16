import axios from 'axios';
import { Dispatch } from 'redux';

import { GET_USERS, ADD_USER } from './types';
import { User } from '../components/GridBody';

export const getUsers = () => (dispatch: Dispatch) => {
  axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then(result =>
      dispatch({
        type: GET_USERS,
        payload: result.data
      }))
    .catch(err => console.log('No deal...', err));
};

export const addUser = (userData: User) => (dispatch: Dispatch) => {
  const { name, username, email, city } = userData;
  axios
    .post('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', {
      name,
      username,
      email,
      address: { city },
    })
    .then(result =>
      dispatch({
        type: ADD_USER,
        payload: result.data
      }))
    .catch(err => console.log('No deal...', err));
};

export const updateUsers = (currentUsers: User[], newUser: User) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: currentUsers.push(newUser)
  });
};