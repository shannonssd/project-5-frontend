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

/*
 * ========================================================
 * ========================================================
 *
 *                Actions for useReducer
 *
 * ========================================================
 * ========================================================
 */

/*
 * ========================================================
 * ========================================================
 *
 *                  Get User Details + token
 *
 * ========================================================
 * ========================================================
 */
// const userId = localStorage.getItem('userId');
// const name = localStorage.getItem('name');
// const displayAddress = localStorage.getItem('displayAddress');
// const district = localStorage.getItem('district');
// const token = localStorage.getItem('token');

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
  userId: null,
  name: null,
  displayAddress: null,
  district: null,
  token: null,
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
const LOGOUT = 'logout';
const LOGIN_ERROR = 'login error';

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
        name: action.payload.name,
        displayAddress: action.payload.displayAddress,
        district: action.payload.district,
        token: action.payload.token,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        userId: '',
        name: '',
        displayAddress: '',
        district: '',
        token: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
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
      console.log('LOGIN DATA', res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('name', res.data.name);
      localStorage.setItem(
        'displayAddress',
        res.data.displayAddress,
      );
      localStorage.setItem('district', res.data.district);

      localStorage.setItem('token', res.data.token);
      return res.data;
    }
    dispatch({ type: LOGIN_ERROR, error: res.data.errors[0] });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error });
  }

  return dispatch({ type: LOGIN_ERROR });
}

export async function logout(dispatch) {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('userId');
  localStorage.removeItem('name');
  localStorage.removeItem('displayAddress');
  localStorage.removeItem('district');
  localStorage.removeItem('token');
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
// export const AuthDispatchContext = React.createContext();

// Initiate custom hooks for useContext

export function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  return context;
}

// export function useAuthDispatch() {
//   const context = React.useContext(AuthDispatchContext);
//   if (context === undefined) {
//     throw new Error('useAuthDispatch must be used within a AuthProvider');
//   }

//   return context;
// }

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
