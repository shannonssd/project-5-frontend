/* eslint-disable react/jsx-no-constructed-context-values */
/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React, { useReducer } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

/*
 * ========================================================
 * ========================================================
 *
 *             Initial State for useReducer
 *
 * ========================================================
 * ========================================================
 */
export const initialState = {
  userId: localStorage.getItem('userId'),
  name: localStorage.getItem('name'),
  photo: localStorage.getItem('photo'),
  displayAddress: localStorage.getItem('displayAddress'),
  district: localStorage.getItem('district'),
  token: localStorage.getItem('token'),
  loading: false,
  errorMessage: null,
};

/*
 * ========================================================
 * ========================================================
 *
 *                  Reducer Function
 *
 * ========================================================
 * ========================================================
 */

// Action Types
const REQUEST_LOGIN = 'request login';
const LOGIN_SUCCESS = 'login success';
const REQUEST_SIGNUP = ' request signup';
const LOGOUT = 'logout';
const LOGIN_ERROR = 'login error';
const AUTHENTICATE = 'authenticate';

export function AuthReducer(state, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        photo: action.payload.photo,
        name: action.payload.name,
        displayAddress: action.payload.displayAddress,
        district: action.payload.district,
        token: action.payload.token,
        loading: false,
      };
    case REQUEST_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT:
      return {
        ...state,
        userId: '',
        name: '',
        displayAddress: '',
        district: '',
        token: '',
        photo: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case AUTHENTICATE:
      return {
        ...state,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

/*
 * ========================================================
 * ========================================================
 *
 *         Action Generating Functions for useReducer
 *
 * ========================================================
 * ========================================================
 */

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: REQUEST_LOGIN });
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/login?${loginPayload.toString()}`);

    if (res.data.success) {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('name', res.data.name);
      localStorage.setItem(
        'displayAddress',
        res.data.displayAddress,
      );
      localStorage.setItem('district', res.data.district);
      localStorage.setItem('photo', res.data.photo);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('photo', res.data.photo);
      return res.data;
    }
    dispatch({ type: LOGIN_ERROR, error: res.data.errors[0] });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error });
  }

  return dispatch({ type: LOGIN_ERROR });
}

export async function signupUser(dispatch, signupPayload) {
  dispatch({ type: REQUEST_SIGNUP });
  const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, signupPayload);
  return res;
}

export function logout(dispatch) {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('userId');
  localStorage.removeItem('name');
  localStorage.removeItem('displayAddress');
  localStorage.removeItem('district');
  localStorage.removeItem('photo');
  localStorage.removeItem('token');
}

export async function authenticateUser(dispatch) {
  dispatch({ type: AUTHENTICATE });
  const history = useHistory();
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Something went wrong, please sign in again');
    history.push('/');
  }
  const config = { headers: { authorization: `Bearer ${token}` } };
  return config;
}

/*
 * ========================================================
 * ========================================================
 *
 *               Provider Code for useContext
 *
 * ========================================================
 * ========================================================
 */
// Create context
export const AuthContext = React.createContext();

// Initiate custom hooks for useContext
export function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  return context;
}

// Initiate context provider ('state management library')
// combines providers for both Auth State and Auth Dispatch
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
