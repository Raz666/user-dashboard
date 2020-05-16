import axios from 'axios';
import { Dispatch } from 'redux';

import { SET_LOADING, GET_USERS, GET_USER, ADD_USER, EDIT_USER, DELETE_USER } from './types';
import { User } from '../components/GridBody';

const normalizeResult = (e: any): User => {
  return {
    id: e.id,
    name: e.name,
    username: e.username,
    email: e.email,
    city: e.address.city,
  }
}

export const getUsers = () => (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then(result =>
      dispatch({
        type: GET_USERS,
        payload: result.data.map((e: any) => normalizeResult(e))
      }))
    .catch(err => console.log('No deal...', err))
    .finally(() => {
      dispatch({ type: SET_LOADING, payload: false });
    });
};

export const getUser = (id: number) => (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`)
    .then(result =>
      dispatch({
        type: GET_USER,
        payload: normalizeResult(result.data)
      }))
    .catch(err => console.log('No deal...', err))
    .finally(() => {
      dispatch({ type: SET_LOADING, payload: false });
    });
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
        payload: normalizeResult(result.data)
      }))
    .catch(err => console.log('No deal...', err));
};

export const editUser = (userData: User) => (dispatch: Dispatch) => {
  const { id, name, username, email, city } = userData;
  axios
    .put(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`, {
      name,
      username,
      email,
      address: { city },
    })
    .then(result =>
      dispatch({
        type: EDIT_USER,
        payload: normalizeResult(result.data)
      }))
    .catch(err => console.log('No deal...', err));
};

export const deleteUser = (id: number) => (dispatch: Dispatch) => {
  axios
    .delete(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`)
    .then(() =>
      dispatch({
        type: DELETE_USER,
        payload: id
      }))
    .catch(err => console.log('No deal...', err));
};