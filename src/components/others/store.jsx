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
const currentUser = localStorage.getItem('currentUser');
console.log('current user', currentUser);
const token = localStorage.getItem('token');

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
  currentUser,
  token: "" || token,
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
        currentUser: action.payload.currentUser,
        token: action.payload.token,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: '',
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
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('currentUser', res.data.currentUser);
      localStorage.setItem('token', res.data.token);
      return res.data;
    }
    dispatch({ type: LOGIN_ERROR, error: res.data.errors[0] });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error });
  }

  return dispatch({ type: LOGIN_ERROR });
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
export const AuthStateContext = React.createContext();
export const AuthDispatchContext = React.createContext();

// Initiate custom hooks for useContext

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
}

// Initiate context provider ('state management library')
// combines providers for both Auth State and Auth Dispatch
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}
