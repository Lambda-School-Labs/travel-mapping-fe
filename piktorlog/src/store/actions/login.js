import address from '../../serverAddress';
import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export default (email, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const user = await loginHelper(email, password);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err });
    console.error(err);
  }
};

export const loginHelper = async (email, password) => {
  const { data } = await axios.post(`${address}/users/login/email`, {
    email,
    password
  });
  console.log(data);
  return data;
};